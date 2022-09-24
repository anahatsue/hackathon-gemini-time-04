import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantes } from "../../services/restaurantes.service";

function TelaDetalhes() {
  const [nome, setnome] = useState();
  const [descricao, setdescricao] = useState();
  const [endereco, setendereco] = useState();
  const [imagem, setimagem] = useState();
  const [distancia, setdistancia] = useState();
  const [nota, setnota] = useState();
  const [tempo, settempo] = useState();
  const [valor, setvalor] = useState();

  const { id } = useParams();

  useEffect(() => {
    getRestaurantes(id).then((response) => {
      setnome(response.nome);
    });
  }, [id]);
  return {};
}

export default TelaDetalhes;
