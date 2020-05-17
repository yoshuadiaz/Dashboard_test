const axios = require('axios');

// Make a request for a user with a given ID
export const getApiData = () => {
  let entidades={}
  let resultados_generales={};
  let resultados_genero={};
  let total=0;
  axios.get('http://localhost:8000/api')
    .then(function (response) {
      // handle success
      // console.log(response);
      response.data.map(d=>{
          let s=entidades[d.entidad_res]
          if(s==undefined)
              s= {
                PRUEBAS_TOTALES: 0,
                GENEROS: {
                  HOMBRE: {},
                  MUJER: {}
                }
              };
          entidades[d.entidad_res]= {
            ...s,
            PRUEBAS_TOTALES: s.PRUEBAS_TOTALES+1,
            GENEROS: {
              ...s.GENEROS,
              [d.sexo]: {
                ...s.GENEROS[d.sexo],
              TOTALES: s.GENEROS[d.sexo].hasOwnProperty('TOTALES') ? s.GENEROS[d.sexo].TOTALES+1 : 1,
              [d.resultado]: s.GENEROS[d.sexo].hasOwnProperty(d.resultado) ? s.GENEROS[d.sexo][d.resultado]+1:1
              }
            },
            [d.resultado]: s.hasOwnProperty(d.resultado) ? s[d.resultado] + 1 : 1,
          }
          //
          let r=resultados_generales[d.resultado]
          if(r==undefined)
              r=0
          resultados_generales[d.resultado]=r+1
          //
          let g=resultados_genero[d.sexo]
          if(g==undefined)
              g=0
          resultados_genero[d.sexo]=g+1

          total++;
      })
      console.log(JSON.stringify(entidades, null, 2));
      console.log(resultados_generales);
      console.log(resultados_genero);
      console.log(`Total de casos: `+total);

      return {
        entidades,
        resultados_generales,
        resultados_genero,
        total
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
