import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../services/detalhes.service";
import { Box, Card, CardMedia, Typography } from "@material-ui/core";
import estrela from "../../assets/estrela.svg";
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
      console.log(response.data);
      setnome(response.data.nome);
      setdescricao(response.data.descricao);
      setendereco(response.data.endereco);
      setimagem(response.data.imagem);
      setdistancia(response.data.distancia);
      setnota(response.data.nota);
      settempo(response.data.tempo_medio);
      setvalor(response.data.valor_entrega);
    });
  }, [idRestaurante]);

  return (
    <div>
      <Card
        className="restaurantes-card--card"
        sx={{
          backgroundColor: "#D9D9D9",
        }}
      >
        <CardMedia
          className="logo-restaurante"
          component="img"
          image={imagem}
          alt=""
        />
        <Box sx={{ backgroundImage: "#D9D9D9" }}>
          <Typography className="restaurantes-card--nome">{nome}</Typography>
          <Typography className="restaurantes-card--distancia" variant="body2">
            {distancia} km
          </Typography>
          <Box className="restaurantes-card--nota">
            <img src={estrela} alt="Nota do restaurante" />
            <Typography
              variant="body2"
              className="restaurantes-card--texto-nota"
            >
              {nota}
            </Typography>
          </Box>
          <Typography className="restaurantes-card--entrega">
            {tempo}
          </Typography>
        </Box>
      </Card>

      <div class="posicao">
        <div class="descricao p"> {descricao}</div>
      </div>
      <br />
      <div class="descricao p">{endereco}</div>
    </div>
  );
}

export default TelaDetalhes;
