import React from 'react'
import '../stylesheets/Testimonio.css';

export default function Testimonio(props) {
    return (
        //un elemento funcional nos va a retornar JSX
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={props.foto}
                alt={props.nombre} />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong>, {props.cargo} de {props.bootcamp}.
                </p>
                <p>
                {props.edad} años de edad
                </p>
            </div>
        </div>
    );
}

