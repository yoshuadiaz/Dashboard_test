import React from 'react'

const EntityCard = props => {
  const { title, data } = props
  return (
    <div>
      <h5>{title.toUpperCase()}</h5>
      <ul>
        <li>Porcentaje de Infectados:
          <strong>
            {
              Intl
                .NumberFormat()
                .format((data['Positivo SARS-CoV-2'] / data.PRUEBAS_TOTALES) * 100)
            }%
          </strong>
        </li>
        <li>Pruebas totales:
          <strong>{Intl
            .NumberFormat()
            .format(data.PRUEBAS_TOTALES)}
          </strong>
        </li>
        <li>Positivo SARS-CoV-2:
          <strong>{Intl
            .NumberFormat()
            .format(data['Positivo SARS-CoV-2']
            )}
          </strong>
        </li>
        <li>No positivo SARS-CoV-2:
          <strong>{Intl
            .NumberFormat()
            .format(data['No positivo SARS-CoV-2']
            )}
          </strong>
        </li>
        <li>Resultado pendiente:
          <strong>{Intl
            .NumberFormat()
            .format(data['Resultado pendiente']
            )}
          </strong>
        </li>
      </ul>
    </div>
  )
}

export default EntityCard
