const axios = require('axios')

// Make a request for a user with a given ID
export const getApiData = () => {
  const entidades = {}
  const resultadosGenerales = {}
  const resultadosGenero = {}
  let total = 0
  return axios.get('/api')
    .then(function (response) {
      // handle success
      // console.log(response);
      response.data.map(d => {
        let s = entidades[d.entidad_res]
        if (s === undefined) {
          s = {
            PRUEBAS_TOTALES: 0,
            GENEROS: {
              HOMBRE: {},
              MUJER: {}
            }
          }
        }
        entidades[d.entidad_res] = {
          ...s,
          PRUEBAS_TOTALES: s.PRUEBAS_TOTALES + 1,
          GENEROS: {
            ...s.GENEROS,
            [d.sexo]: {
              ...s.GENEROS[d.sexo],
              PRUEBAS_TOTALES: 'PRUEBAS_TOTALES' in s.GENEROS[d.sexo] ? s.GENEROS[d.sexo].PRUEBAS_TOTALES + 1 : 1,
              [d.resultado]: `${d.resultado}` in s.GENEROS[d.sexo] ? s.GENEROS[d.sexo][d.resultado] + 1 : 1
            }
          },
          [d.resultado]: `${d.resultado}` in s ? s[d.resultado] + 1 : 1
        }
        //
        let r = resultadosGenerales[d.resultado]
        if (r === undefined) { r = 0 }
        resultadosGenerales[d.resultado] = r + 1
        //
        let g = resultadosGenero[d.sexo]
        if (g === undefined) { g = 0 }
        resultadosGenero[d.sexo] = g + 1

        total++
      })
      // console.log(JSON.stringify(entidades, null, 2))
      // console.log(resultadosGenerales)
      // console.log(resultadosGenero)
      // console.log('Total de casos: ' + total)

      return {
        entidades,
        resultadosGenerales,
        resultadosGenero,
        total
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
}
