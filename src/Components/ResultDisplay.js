import React from 'react'

const ResultDisplay = ({results}) => {
    const {eto,kc,etc,cropWaterNeeds,irrigationVolume,} =results;
  return (
    <div>
        <h2>
            Resultados
        </h2>
        <div>
            <label>evapotranspiracion potencial</label>
            <span>{eto.toFixed(2) }mm/dia</span>
        </div>
        <div>
            <label>coeficiente de cultivo</label>
            <span>{kc.toFixed(2)}</span>
        </div>
        <div>
            <label>evapotranspiracion del cultivo</label>
            <span>{etc.toFixed(2) }mm/dia</span>
        </div>
        <div>
            <label>necesidades hidricas del cultivo</label>
            <span>{cropWaterNeeds.toFixed(2) }mm/dia</span>
        </div>
        <div>
            <label>volumen del riego Requerido</label>
            <span>{irrigationVolume.toFixed(2)  }m3</span>
        </div>
    </div>
  )
}

export default ResultDisplay