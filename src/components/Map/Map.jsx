import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import { Dimmer, Loader } from 'semantic-ui-react'
import './Map.css'
const MapGeojson = (props) => {
  const {
    position,
    onEachFeature,
    setStyles,
    hasData,
    data,
    className
  } = props

  return (
    <div className={`mapGeojson ${className}`}>
      <Dimmer active={!hasData}>
        <Loader />
      </Dimmer>
      <Map center={position} zoom={5} className={className || ''}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        />
        {hasData &&
          <GeoJSON
            data={data}
            weight={1}
            onEachFeature={onEachFeature}
            style={setStyles}
          />}
      </Map>
    </div>
  )
}

export default MapGeojson
