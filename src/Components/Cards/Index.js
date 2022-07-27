import React from "react";
import CardApp from "./Card";
import { Container } from "react-bootstrap";
import imgCard1 from "../Assets/img/cardcod.jpg";
import imgCard2 from "../Assets/img/cardforza.jpg";
import imgCard3 from "../Assets/img/cardgod.webp";

const cards = [
  {
    id: 1,
    title: "Call of duty",
    image: imgCard1,
    text: "es un juego Multijugador masivo en línea de Disparos en primera persona desarrollado por Tencent y Activision",
  },
  {
    id: 2,
    title: "Forza Horizon",
    image: imgCard2,
    text: "es un videojuego de aventura de acción y de sigilo en la que el jugador sobre todo asume el papel de Altaïr, experimentado por el protagonista Desmond Miles. El objetivo principal del juego es llevar a cabo una serie de asesinatos ordenados por Al Mualim, el líder de los asesinos.",
  },
  {
    id: 3,
    title: "God of war",
    image: imgCard3,
    text: "La jugabilidad de God of War se centra en el combate basado en combos, logrado a través del arma principal del jugador, las Espadas del Caos, y un arma secundaria adquirida más adelante en el juego.",
  },
];

const CardsApp = () => {
  return (
    <Container className="d-flex justify-content-center flex-wrap">
      {cards.map((card) => (
        <CardApp key={card.id} title={card.title} imageSrc={card.image} />
      ))}
    </Container>
  );
};

export default CardsApp;
