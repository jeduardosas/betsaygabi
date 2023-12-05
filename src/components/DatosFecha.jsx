import React from 'react'

const DatosFecha = ({datosFechaVisible}) => {
  return (
    <div id='datosFechaSection' className={`datos-fecha ${datosFechaVisible && 'animate__animated animate__slideInUp'}`}>
      <p className='datos-fecha-title'>Celeberemos Juntos el día</p>
      <div className="datos-fecha_div">
        <p>10</p>
        <p>Febrero</p> 
        <p>2024</p>
      </div>
    </div>
  )
}

export default DatosFecha