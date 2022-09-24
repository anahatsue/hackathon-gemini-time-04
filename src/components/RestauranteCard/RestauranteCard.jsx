import { Box, Card, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import './styles.css'
import estrela from '../../assets/estrela.svg'

function RestauranteCard({ restaurante }) {

  let formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  const precoEntregaFormatado = formatador.format(restaurante.valor_entrega)


  return (
    <div className="restaurantes-card">
      <Card
        className='restaurantes-card--card'
        sx={{
          backgroundColor: '#D9D9D9'
        }}
      >
        <CardMedia
          className="logo-restaurante"
          component='img'
          image={restaurante.imagem}
          alt={`Logo do restaurante ${restaurante.nome}`}
        />
        <Box
          sx={{ backgroundImage: '#D9D9D9' }}
        >
          <Typography
            className='restaurantes-card--nome'
          >
            {restaurante.nome}
          </Typography>
          <Typography
            className='restaurantes-card--distancia'
            variant='body2'
          >{restaurante.distancia} km</Typography>
          <Box className='restaurantes-card--nota'>
            <img src={estrela} alt="Nota do restaurante" />
            <Typography variant='body2' className='restaurantes-card--texto-nota'>{restaurante.nota}</Typography>
          </Box>
          <Typography
            className='restaurantes-card--entrega'
          >{restaurante.tempo_medio} - {restaurante.valor_entrega == '0.0' ? 'Grátis' : precoEntregaFormatado}</Typography>
        </Box>
      </Card>
    </div>
  );
}

export default RestauranteCard;