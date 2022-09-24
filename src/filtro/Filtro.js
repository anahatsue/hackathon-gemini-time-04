import React, { useState } from "react";

function Filtro() {
  const [filtro, setFiltro] = useState("");

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  const buscaFiltrada = cardapio.filter((item) =>
    item.includes(filtro.toLowerCase())
  );

  return (
    <input
      type="text"
      onChange={(event) => handleChange(event)}
      value={filtro}
    />

    //  {
    //      buscaFiltrada.length > 0 ? buscaFiltrada.map(...) : cardapio.map(...)
    //  }
  );
}

export default Filtro;