const axios = require('axios');

// Make a request for a user with a given ID
let sum={}
let mres={};
let total=0;
axios.get('http://localhost:8000/api')
  .then(function (response) {
    // handle success
    //console.log(response);
    response.data.map(d=>{
        let s=sum[d.entidad_res]
        if(s==undefined)
            s=0;
        sum[d.entidad_res]=s+1
        //
        let r=mres[d.resultado]
        if(r==undefined)
            r=0
        mres[d.resultado]=r+1
        total++;
    })
    console.log(sum);
    console.log(mres);
    console.log(`Total de casos: `+total);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
