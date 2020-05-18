import React from 'react'
import { Statistic, StatisticGroup } from 'semantic-ui-react'
import './Headbar.css'

const Headbar = (props) => {
  const { hasData, data } = props
  const rawGeneralResults = data && data.resultadosGenerales ? data.resultadosGenerales : []
  const rawGenderResults = data && data.resultadosGenero ? data.resultadosGenero : []
  const rawTotal = data && data.total ? data.total : 'Loading'
  const GeneralResults = (_) => Object
    .entries(rawGeneralResults)
    .map((gr, idx) => (
      <Statistic
        key={`generalResult_${idx}`}
        inverted
        label={gr[0]}
        value={Intl.NumberFormat().format(gr[1])}
      />
    ))
  const GenderResults = (_) => Object
    .entries(rawGenderResults)
    .map((gr, idx) => (
      <Statistic
        key={`genderResult_${idx}`}
        inverted
        label={gr[0]}
        value={Intl.NumberFormat().format(gr[1])}
      />
    ))
  console.log(rawGeneralResults['Positivo SARS-CoV-2'])
  return (
    <div className='headbar'>
      {!hasData && <Statistic size='small' inverted label='Estatus' value='Descargando datos' />}
      {hasData && (
        <StatisticGroup size='tiny'>
          <Statistic
            inverted
            value={Intl.NumberFormat().format(rawTotal)}
            label='PRUEBAS TOTALES'
          />
          <Statistic
            inverted
            value={`${
                Intl
                .NumberFormat()
                .format((rawGeneralResults['Positivo SARS-CoV-2'] / rawTotal) * 100)
            }%`}
            label='PORCENTAJE DE INFECTADOS'
          />
          {
            rawGeneralResults &&
              <GeneralResults />
          }
          {
            rawGenderResults &&
              <GenderResults />
          }
        </StatisticGroup>
      )}
    </div>
  )
}

export default Headbar
