const chooseColor = (teamName) => {
    switch(teamName){
        case 'San Francisco Giants':
            return 'rgb(254, 90, 29)'
        case 'Los Angeles Dodgers':
            return 'rgb(0, 104, 255)'
        case 'San Diego Padres':
            return 'rgb(153, 67, 8)'
        case `Arizona D'Backs`:
            return `rgb(214, 22, 45)`
        case `Colorado Rockies`:
            return `rgb(168, 11, 206)`
        case `Chicago Cubs`:
            return `rgb(9, 0, 198)`
        case `St. Louis Cardinals`:
            return `rgb(221, 114, 114)`
        case `Cincinnati Reds`:
            return `rgb(255,0,0)`
        case `Pittsburgh Pirates`:
            return `rgb(255, 195, 36)`
        case `Milwaukee Brewers`:
            return `rgb(178, 142, 66)`
        case `Atlanta Braves`:
            return `rgb(0, 55, 112)`
        case `New York Mets`:
            return `rgb(241, 103, 30)`
        case `Philadelphia Phillies`:
            return `rgb(244, 103, 134)`
        case `Washington Nationals`:
            return `rgb(244, 11, 61)`
        case `Miami Marlins`:
            return `rgb(4, 130, 204)`
        case `Oakland Athletics`:
            return `rgb(5, 107, 39)`
        case `Los Angeles Angels`:
            return `rgb(199, 15, 39)`
        case `Texas Rangers`:
            return `rgb(0, 70, 133)`
        case `Seattle Mariners`:
            return `rgb(5, 168, 156)`
        case `Houston Astros`:
            return `rgb(244, 121, 62)`
        case `Detroit Tigers`:
            return `rgb(222, 68, 6)`
        case `Kansas City Royals`:
            return `rgb(65, 105, 225)`
        case `Chicago White Sox`:
            return `rgb(170, 170, 170)`
        case `Cleveland Guardians`:
            return `rgb(212, 2, 52)`
        case `Minnesota Twins`:
            return `rgb(3, 40, 94)`
        case `New York Yankees`:
            return `rgb(135, 135, 134)`
        case `Boston Red Sox`:
            return `rgb(204, 5, 24)`
        case `Baltimore Orioles`:
            return `rgb(245, 100, 42)`
        case `Toronto Blue Jays`:
            return `rgb(0, 149, 215)`
        case `Tampa Bay Rays`:
            return `rgb(17, 41, 85)`

        default:
            return 'rgb(254, 90, 29)'

    }
}

module.exports = {chooseColor}