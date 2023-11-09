import axios from 'axios';

const geocode = (address, callback)=>{
    const new_Url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmItYmFkdSIsImEiOiJjbG9sN3JsbzAwb2JwMnFwN25oN2F0dnplIn0.osRm9snkwxj-Mh7sggCb7w&limit=1`;

    axios.get(new_Url)
    .then(({data})=>{
        callback({
            latitude :`${data.features[0].center[1]}`,
            longitude : `${data.features[0].center[0]}`,
            location : `${data.features[0].place_name}`
        })
    
    }).catch((error)=>{
        console.log(error);
    });

}

export {geocode};