import React from "react";
import CardApp from "./Card";
import { Container } from "react-bootstrap";
import imgCard1 from "../Assets/img/cardcod.jpg";
import imgCard2 from "../Assets/img/cardforza.jpg";
import imgCard3 from "../Assets/img/cardgod.webp";
import imgCard4 from "../Assets/img/cardmine.jpg";

const cards = [
  {
    Id: 1,
    Titulo: "CALL OF DUTY",
    Imagen: imgCard1,
    Texto: "Call of Duty (CoD) es uno de los videojuegos de disparos en primera persona más famosos del mundo. Lo juegan personas de todas las edades, incluyendo niños y adolescentes que pasan varias horas al día absortos en un mundo virtual repleto se sangre, violencia y sexo.",
    Boton: "Ver más sobre Call of Duty"
  },
  {
    Id: 2,
    Titulo: "FORZA HORIZON",
    Imagen: imgCard2,
    Texto: "El juego incorpora muchos aspectos de juego diferente de los anteriores títulos de Forza Motorsport, como la gran variedad de coches, física realista y los gráficos de alta definición. El objetivo es avanzar a través del juego mediante la obtención de Pulseras por conducción rápida. ",
    Boton: "Ver más sobre Forza Horizon"
  },
  {
    Id: 3,
    Titulo: "GOD OF WAR",
    Imagen: imgCard3,
    Texto: "La jugabilidad de God of War se centra en el combate basado en combos, logrado a través del arma principal del jugador, las Espadas del Caos, y un arma secundaria adquirida más adelante en el juego. Cuenta con eventos de tiempo rápido que requieren que el jugador complete juegos",
    Boton:"Ver más de God of war"
  },
  {
    Id: 4,
    Titulo: "MINECRAFT",
    Imagen: imgCard4,
    Texto: "Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por (conocido comúnmente como «Notch»)​ y posteriormente desarrollado por Mojang Studios (actualmente parte de Microsoft). Fue lanzado el 17 de mayo de 2009,",
    Boton:"Ver más de Minecraft"
  },

];

const CardsApp = () => {
  return (
    <Container className="d-flex justify-content-center flex-wrap">
      {cards.map((card) => (
        <CardApp key={card.Id} title={card.Titulo} imageSrc={card.Imagen} texto={card.Texto} boton={card.Boton} />
      ))}
    </Container>
  );
};

export default CardsApp;
