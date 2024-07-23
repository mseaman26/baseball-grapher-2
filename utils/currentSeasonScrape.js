const cheerio = require('cheerio')

const mlbURL = 'https://www.baseball-reference.com/leagues/majors/2024-schedule.shtml'

const scrapeCurrentSeason = async (teamName) => {
    try{
        const response = await fetch(mlbURL)
        const html = await response.text()
        const $ = cheerio.load(html)
        const results = []
        const standings = [0]
        const labels = [0]
        let allGames = []
        let currentDay = 0
        let currentStanding = 0
        
        //checking each day
        $('h3').each(function(i, element) {
            const dailyGames = $(this).parent().find('.game');
            let todaysTeamGames = []
            let doubleHeader = false
            if($(dailyGames).text().includes('Preview')){
                return false
            }
            //add specified teams' games to todaysGames array
            dailyGames.each(function(j, gameElement) {
                if($(gameElement).text().includes(teamName) && (!$(gameElement).text().includes('Spring'))){
                    
                    todaysTeamGames.push($(gameElement).text())
                }
            });
            //handle days off
            if(todaysTeamGames.length === 0){
                currentDay += .5
                labels.push(currentDay)
                standings.push(currentStanding)
                currentDay += .5
                labels.push(currentDay)
                standings.push(currentStanding)
            }
            //if there's more than one game, make daysPerGame .5, otherwise make it 1
            if(todaysTeamGames.length > 1){
                doubleHeader = true
            }else {doubleHeader = false}
            //performing action on each game
            if(todaysTeamGames.length > 0){
                for(let i = 0; i < todaysTeamGames.length; i++){
                    let splitGame = todaysTeamGames[i].split('@')
                    let teamScore
                    let opponentScore
                    //get team scores and opponent scores
                    if(splitGame[0].includes(teamName)){
                        teamScore = parseInt(splitGame[0].split('(')[1])
                        opponentScore = parseInt(splitGame[1].split('(')[1])
                    }else{
                        teamScore = parseInt(splitGame[1].split('(')[1])
                        opponentScore = parseInt(splitGame[0].split('(')[1])
                    }
                    //determine win v loss
                    if(teamScore > opponentScore){
                        
                        if(doubleHeader){
                            currentStanding += 1
                            currentDay += .5
                            standings.push(currentStanding)
                            labels.push(currentDay)
                        }else{
                            currentStanding += .5
                            currentDay += .5
                            standings.push(currentStanding)
                            labels.push(currentDay)
                            currentStanding += .5
                            currentDay += .5
                            standings.push(currentStanding)
                            labels.push(currentDay)

                        }
                        
                        
                    }else {
                        if(doubleHeader){
                            currentStanding -= 1
                            currentDay += .5
                            standings.push(currentStanding)
                            labels.push(currentDay)
                        }else{
                            currentStanding -= .5
                            currentDay += .5
                            standings.push(currentStanding)
                            labels.push(currentDay)
                            currentStanding -= .5
                            currentDay += .5
                            standings.push(currentStanding)
                            labels.push(currentDay) 
                        }
                    }

                }

        
            } 
            //all star break. had to find the day (116) manually and add four days off (8 ticks)
            if(currentDay === 116){
                for(let i = 0; i < 8; i++){
                    currentDay += .5
                    labels.push(currentDay)
                    standings.push(currentStanding)
                    
                }
            }
        });

    return {
        teamName: teamName,
        labels: labels,
        standings, standings
    }
    }catch(e){
        console.log(e)
    }
}
const fetchCurrentSeasons = async(teamNames) => {
    try{
        let currentSeasons = []
        for(let i = 0; i < teamNames.length; i++){
            let currentSeason = await scrapeCurrentSeason(teamNames[i])
            currentSeasons.push(currentSeason)
        }
        return currentSeasons
    }catch(e){
        console.log(e)
    }
}
scrapeCurrentSeason('San Francisco Giants')
module.exports = {scrapeCurrentSeason, fetchCurrentSeasons}