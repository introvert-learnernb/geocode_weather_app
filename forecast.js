import axios from 'axios';

const forecast = (longitude, latitude, callback) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&appid=e6ceecea37b4593d9d6d14daccef0f10&units=metric`;
    axios.get(url)
        .then(({data}) => {
            callback({
                result: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
}

export {forecast};