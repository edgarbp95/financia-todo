import React, { useState } from 'react'
import SocialMedia from '../components/SocialMedia'
import {AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai"

const Questions = () => {
    const [isOpenQ1,setIsOpenQ1] = useState(false)     
    const [isOpenQ2,setIsOpenQ2] = useState(false)  
    const [isOpenQ3,setIsOpenQ3] = useState(false)  
    const [isOpenQ4,setIsOpenQ4] = useState(false)  
   

  return (
    <div className='container-questions'>
        <h2>PREGUNTAS FRECUENTES</h2>
        <p>En el siguiente apartado encontrarás la respuesta a tus dudas. Ante cualquier interrogante por favor comunicate con nosotros y con gusto te atenderemos.</p>
        <SocialMedia />
      <div className={`question ${!isOpenQ1? "" : "is-open"}`} onClick={()=>setIsOpenQ1(!isOpenQ1)}>
        <div className='top-question' >
            <h3 >¿Cómo solicito un préstamo?</h3>
            {!isOpenQ1?<AiOutlineArrowDown size="22px"/> : <AiOutlineArrowUp size="22px"/>}
        </div>
        <p>Solicitar un préstamo con nosotros es muy sencillo. Puedes aplicar en línea en nuestra página web: https://www.financiatodo.com/solicitar-prestamo (en nuestro menú de Cómo Funciona te explicamos detalladamente los pasos para aplicar) Otra opción que tienes es de llamarnos al +507 208-1216. Nuestro horario de atención al público es de Lunes a Viernes, 8am a 7pm, y los Sábados de 9am a 3pm.</p>
      </div>
      <div className={`question ${!isOpenQ2? "" : "is-open"}`} onClick={()=>setIsOpenQ2(!isOpenQ2)} >
        <div className='top-question' >
            <h3>¿Puedo aplicar por medio de una llamada telefónica?</h3>
            {!isOpenQ2?<AiOutlineArrowDown size="22px"/> : <AiOutlineArrowUp size="22px"/>}
        </div>
        <p>¡Por supuesto! Puedes llamarnos y gustosamente uno de nuestros agentes te atenderá, te realizará la respectiva cotización y te asistirá con los pasos a seguir para la obtención de tu préstamo.</p>
      </div>
      <div className={`question ${!isOpenQ3? "" : "is-open"}`} onClick={()=>setIsOpenQ3(!isOpenQ3)}>
        <div className='top-question' >
            <h3>¿Cuáles son los requisitos para obtener un prestamo?</h3>
            {!isOpenQ3?<AiOutlineArrowDown size="22px"/> : <AiOutlineArrowUp size="22px"/>}
        </div>
        <div>
            <p>Los requisitos son los siguientes:</p>
            <ol>
                <li>Mínimo 12 meses laborando en su empleo actual.</li>
                <li>Capacidad de descuento directo.</li>
            </ol>
        </div>
        <div>
            <p>Los documentos que requerimos son:</p>
            <ol>
                <li>Cédula</li>
                <li>ficha</li>
                <li>2 últimos talonarios de pago</li>
                <li>carta laboral (a nombre de FinanciaTodo)</li>
            </ol>
        </div>
      </div>
      <div className={`question ${!isOpenQ4? "" : "is-open"}`} onClick={()=>setIsOpenQ4(!isOpenQ4)}>
        <div className='top-question' >
            <h3>¿Cómo debo presentar mis documentos?</h3>
            {!isOpenQ4?<AiOutlineArrowDown size="22px"/> : <AiOutlineArrowUp size="22px"/>}
        </div>
        <p>Al llamar a nuestra línea telefónica, uno de nuestros agentes te brindará su dirección de correo electrónico y número de celular para que puedas enviar tus documentos por e-mail o WhatsApp. De esta manera evitas un viaje adicional a nuestras oficinas. Sin embargo, si prefieres venir en persona, con gusto te atendemos!</p>
      </div>
    </div>
  )
}

export default Questions
