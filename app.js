import express from 'express';
import path from 'path';
const app = express();

import {geocode} from './geocode.js';
import {forecast} from './forecast.js';
import bodyParser from 'body-parser';

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));


//loading static assets....
app.use('/css', express.static(path.resolve("assets/css")));
app.use('/js', express.static(path.resolve("assets/js")));
app.use('/img', express.static(path.resolve("assets/img")));


// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
});

let new_result = {};
// Handle the form submission
app.post('/submit', async (req, res) => {
    const location = req.body.location;
    console.log(location);
    if (!location) {
        alert(`You have to provide the location....`);
    } else {
        geocode(location, ({longitude,latitude,location}={}, error) => {
            if (error) {
                return console.log(error);
            }
            forecast(longitude, latitude, ({result}, error) => {
                if (error) {
                    return console.log(error);
                }
                const new_location = location.split(',');
                new_result = result;
                res.render('main', {result, new_location});
                console.log(location);
                console.log(result);
            })
        })
    }
    
  });


  // Use PORT provided in environment or default to 3000
const port = process.env.PORT || 7000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
    console.log(`Server is listening at port no. ${port}`);
});






//GEOCODING...
//PROVIDING LONGITUDE AND LATITUDE ON THE BASIS OF LOCATION....

// pk.eyJ1IjoibmItYmFkdSIsImEiOiJjbG9sODN6M3IyaGY5MmxwbDZ4MXY5d3Q0In0.KdnvVG-S5bHb7p04l1698w


// https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json

// console.log(process.argv[2]);













