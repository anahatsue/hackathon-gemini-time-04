import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantes } from "../../services/restaurantes.service";
import { getDetails } from "../../services/detalhes.service";
import { Card } from "@material-ui/core";
import "./TelaDetalhes.css";

function TelaDetalhes() {
  const [nome, setnome] = useState();
  const [descricao, setdescricao] = useState();
  const [endereco, setendereco] = useState();
  const [imagem, setimagem] = useState();
  const [distancia, setdistancia] = useState();
  const [nota, setnota] = useState();
  const [tempo, settempo] = useState();
  const [valor, setvalor] = useState();

  const { idRestaurante } = useParams();

  useEffect(() => {
    getDetails(idRestaurante).then((response) => {
      setnome(response.nome);
      setdescricao(response.descricao);
      setendereco(response.endereco);
      setimagem(response.imagem);
      setdistancia(response.distancia);
      setnota(response.nota);
      settempo(response.tempo_medio);
      setvalor(response.valor_entrega);
    });
  }, [idRestaurante]);

  return;
}

export default TelaDetalhes;
