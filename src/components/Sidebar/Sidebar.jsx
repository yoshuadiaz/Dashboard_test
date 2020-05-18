import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionTitle, Icon, Dimmer, Loader } from 'semantic-ui-react'
import EntityCard from '../EntityCard/EntityCard'
import './Sidebar.css'

const Sidebar = (props) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const { hasData, covidData } = props
  return (
    <section className='sidebar'>
      {!hasData && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      {hasData &&
        covidData.entidades &&
            Object.entries(covidData.entidades).length > 0 &&
            Object.entries(covidData.entidades).map(([name, data], idx) => (
              <Accordion
                className='sidebar_item'
                key={`sidebar_item_${name}`}
                inverted
              >
                <AccordionTitle
                  className='sidebar_item_title'
                  active={activeIndex === idx}
                  onClick={() => {
                    if (activeIndex === idx) return setActiveIndex(null)
                    setActiveIndex(idx)
                  }}
                >
                  <Icon name='dropdown' />
                  {name}
                </AccordionTitle>
                <AccordionContent className='sidebar_item_content' active={activeIndex === idx}>
                  <EntityCard title='Estatus General' data={data} />
                  <h4>DATOS POR GENERO</h4>
                  <EntityCard title='Mujeres' data={data.GENEROS.MUJER} />
                  <EntityCard title='Hombres' data={data.GENEROS.HOMBRE} />
                </AccordionContent>
              </Accordion>
            ))}
    </section>
  )
}

export default Sidebar
