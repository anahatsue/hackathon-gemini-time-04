import React from "react";
import "./style.css";

const RestaurantCard = ({
  id,
  nome,
  imagem,
  nota,
  tempoMedio,
  valorEntrega,
  distancia,
  onClick,
}) => {
  console.log("dsdsdsdsds", id);
  return (
    <div className="card" id={id} onClick={onClick}>
      <img src={imagem} width={100} />
      <div>Nome: {nome}</div>
      <div>Nota: {nota}</div>
      <div>Tempo Médio: {tempoMedio}</div>
      <div>Valor da entrega: {valorEntrega}</div>
      <div>Distância: {distancia}</div>
    </div>
  );
};

export default RestaurantCard;
