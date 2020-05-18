import React from 'react'
import Headbar from '../../components/Headbar/Headbar'
import MapGeojson from '../../components/Map/Map'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Dashboard.css'

const App = (props) => {
  const {
    position,
    onEachFeature,
    setStyles,
    hasData,
    mapData,
    covidData,
    className
  } = props
  return (
    <div className='dashboard'>
      <Headbar
        hasData={hasData}
        data={covidData}
      />
      <div className='dashboard_content'>
        <MapGeojson
          position={position}
          onEachFeature={onEachFeature}
          setStyles={setStyles}
          hasData={hasData}
          data={mapData}
          className={className || ''}
        />
        <Sidebar covidData={covidData} hasData={hasData} />
      </div>
    </div>
  )
}

export default App
