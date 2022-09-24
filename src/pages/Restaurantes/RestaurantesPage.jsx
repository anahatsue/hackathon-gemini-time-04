import {
  Container,
  Typography,
  CircularProgress,
  Card,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantes } from "../../services/restaurantes.service";
import "./style.css";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
  const { id } = useParams();

  useEffect(() => {
    getRestaurantes(id).then((response) => {
      console.log(response);
      setNomeCategoria(response.categoria);
=======
  const { id } = useParams()

  useEffect(() => {
    getRestaurantes(id).then((response) => {
      setNomeCategoria(response.categoria)
>>>>>>> 4ee0cb76aeb230f8056f6c887cf387923d99c63e
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
    });
  }, [id]);

  return (
    <Container class="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
      {restaurantesBaratinho && (
        <div className="sub-header">
          <Typography variant="body1" color="primary">
            Baratinho <span>(</span>$ <span>$ $ $ $)</span>
          </Typography>
        </div>
      )}
      {restaurantesBaratinho?.map((restaurante) => (
        <div key={restaurante.id}>{restaurante.nome}</div>
      ))}

      {restaurantesNoPreco && (
        <div className="sub-header">
          <Typography variant="body1" color="primary">
            No preço <span>(</span>$ $ $<span> $ $)</span>
          </Typography>
        </div>
      )}
      {restaurantesNoPreco?.map((restaurante) => (
        <div key={restaurante.id}>{restaurante.nome}</div>
      ))}
      {restaurantesCaro && (
        <div className="sub-header">
          <Typography variant="body1" color="primary">
            Caro, mas vale a pena <span>(</span>$ $ $ $ $<span> )</span>
          </Typography>
        </div>
      )}
      {restaurantesCaro?.map((restaurante) => (
        <div key={restaurante.id}>{restaurante.nome}</div>
      ))}
    </Container>
  );
}

export default RestaurantesPage;
