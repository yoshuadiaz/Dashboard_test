import React from 'react'
import Headbar from '../../components/Headbar/Headbar'
import MapGeojson from '../../components/Map/Map'
const App = (props) => {
  const {
    position,
    onEachFeature,
    setStyles,
    hasData,
    mapData,
    headerData,
    className
  } = props
  return (
    <div>
      <Headbar
        hasData={hasData}
        data={headerData}
      />
      <MapGeojson
        position={position}
        onEachFeature={onEachFeature}
        setStyles={setStyles}
        hasData={hasData}
        data={mapData}
        className={className || ''}
      />
    </div>
  )
}

export default App
