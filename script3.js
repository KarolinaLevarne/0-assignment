let axios = require("axios");
axios.get('https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json').then(resp => {

    console.log(resp.data);
});