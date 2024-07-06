export const getSeasonsAPI = async (teamNames) => {
    try{
        //this is actually a post request because i needed to pass an array is it is just easier if I can provide a body
        // console.log('teamnames in getSeasonsAPI', teamNames)
        console.log('stringified teamnames')
        const response = await fetch('/api/seasons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({teamNames})
        })
        const data = await response.json()
        return data
    }catch(e){
        console.log('error fetching seasons', e)
    }
}