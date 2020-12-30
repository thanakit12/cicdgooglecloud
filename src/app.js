
const express = require('express');
const axios = require('axios').default;

const app = express();
const port = process.env.PORT || 8080;

app.get('/v1/api/covid',async (req,res) => {
    
    const response = await axios.get(`${process.env.COVID_ENDPOINT}/api/open/today`);
    const {Confirmed , Recovered , Hospitalized , Deaths , NewConfirmed , NewRecovered , NewHospitalized , NewDeaths} = response.data;

    return res.status(200).json({
        Confirmed,
        Recovered,
        Hospitalized,
        Deaths,
        NewConfirmed,
        NewRecovered,
        NewHospitalized,
        NewDeaths
    })

})


app.listen(port,() => {
    console.log(`---- Server starting on http://localhost:${port} ----`);
})
