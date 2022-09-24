import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../services/detalhes.service";
import './style.css'

function CardapioPage() {
  const { idRestaurante } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [cardapio, setCardapio] = useState();

  const getCardapio = async () => {
    const result = await getDetails(idRestaurante).then((response) => {
      setDetails(response.data);
      setCardapio(response.data.cardapio);
      setLoading(false);
    });
  };
  useEffect(() => {
    getCardapio();
  }, []);
  console.log("cardapio", cardapio);
  return (
    <div className="container">
      {cardapio ? (
        cardapio.map(({ categoria, itens }) => (
          <div className="item-container">
            <div className="categoria-prato">
              <p>{categoria}</p>
            </div>
            {itens.map((item) => (
              <div className="box-prato">
                <img src={item.imagem} className="image-prato" />
                <div className="container-texto">
                  <label className="nome-prato">{item.nome}</label>
                  <label className="descricao-prato">{item.descrição}</label>
                </div>
                <div className="preco">
                  <label>R$ {item.valor}</label>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
    </div>
  );
}

export default CardapioPage;
