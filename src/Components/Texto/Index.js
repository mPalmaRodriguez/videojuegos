import React from 'react';
import { Container } from 'react-bootstrap';

const TextoApp = () => {
  return (
    <Container style={{border:"solid palevioletred", marginTop:"25px"}}>
        <h2 className='m-3 p-2 text-center fw-bold text-decoration-underlin' style={{color:"#2983CD", textDecoration:"underline"}}>VIDEOJUEGOS</h2>
        <p className='m-2 p-2 text-bg-bg-white' style={{textAlign:"justify"}}>Los videojuegos son juegos electrónicos
         en los que están involucradas una o más personas interactuando 
         entre sí, es decir, es todo tipo de juego digital interactivo que 
         su base principal es entretener y divertir por un lapso de tiempo prolongado,
          utilizando soportes de interface como los ordenadores, las videoconsolas,
           las consolas portátiles o máquinas recreativas. El programa informático
            del juego permite ser participativo de una experiencia que en la realidad no 
            se puede hacer como los juegos de rol.</p>
            <p className='m-2 p-2 text-bg-bg-white' style={{textAlign:"justify"}}>            Los videojuegos representan situaciones o mundos virtuales de todo tipo y de una complejidad muy diversa, que van desde juegos muy sencillos y minimalistas como el Tetris, en donde el jugador se limita a mover bloques para acomodarlos en un área rectangular; a representaciones de verdaderos mundos y ciudades virtuales, como la serie de juegos Grand Theft Auto en donde el jugador controla a un personaje que se puede mover libremente dentro de una ciudad e interactuar con los personajes y objetos que en ella se encuentran.</p>
    </Container>
  )
}

export default TextoApp