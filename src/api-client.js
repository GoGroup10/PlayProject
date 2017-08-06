const URL='https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=2ae35b6bf750ade63879db8cb3fbba34&format=json'

function getArtists(){
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist=>{
            return{
                id: artist.mbid,
                name:artist.name,
                image:artist.image[3]['#text'],
                likes:200,
                comments:135
                
            }
        }))
}

export  {getArtists}
