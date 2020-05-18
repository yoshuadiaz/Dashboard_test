import React, { useState, useEffect } from 'react'
import states from '../utils/states.json'
import DashboardView from '../views/Dashboard/Dashboard.view'
import { getApiData } from '../utils/networkUtils'
const DashboardContainer = () => {
  const [covidData, setCovidData] = useState(null)
  const setStyles = (feature) => {
    const stateName = feature.properties.state_name.toUpperCase()
    const data = covidData.entidades[stateName]
    const average = (data['Positivo SARS-CoV-2'] / data.PRUEBAS_TOTALES) * 100
    return { color: '#600', fillColor: `hsl(0, 100%, ${50 - average}%)`, fillOpacity: '.8' }
  }
  const infoData = ({ title, data }) => `
    <strong>${title}</strong>
    <br/>
    <span>
    Pruebas totales: <strong>${Intl.NumberFormat().format(data.PRUEBAS_TOTALES)}</strong> 
    </span>
    <br/>
    <span>
      Positivo SARS-CoV-2: <strong>${Intl.NumberFormat().format(data['Positivo SARS-CoV-2'])}</strong> 
    </span>
    <br/>
    <span>
      No positivo SARS-CoV-2: <strong>${Intl.NumberFormat().format(data['No positivo SARS-CoV-2'])}</strong> 
    </span>
    <br/>
    <span>
      Resultado pendiente: <strong>${Intl.NumberFormat().format(data['Resultado pendiente'])}</strong> 
    </span>
  `
  const onEachFeature = (feature, layer) => {
    const stateName = feature.properties.state_name.toUpperCase()
    return layer.bindTooltip(`
    <div>
      <h4>${stateName}</h4>
      <hr/>
      <p>
      ${infoData({ title: 'ESTATUS GENERAL', data: covidData.entidades[stateName] })} 
      </p>
      <strong>DATOS POR GÉNERO</strong>
      <p>
        ${infoData({ title: 'Mujeres', data: covidData.entidades[stateName].GENEROS.MUJER })}
      </p>
      <p>
        ${infoData({ title: 'Hombres', data: covidData.entidades[stateName].GENEROS.HOMBRE })}
      </p>
    </div>
  `)
  }
  useEffect(() => {
    getApiData().then(r => {
      setCovidData(r)
    })
  }, [])
  const position = [23.451, -99.125]
  return (
    <DashboardView
      position={position}
      onEachFeature={onEachFeature}
      setStyles={setStyles}
      hasData={!!covidData}
      headerData={covidData}
      mapData={states}
    />
  )
}

export default DashboardContainer
