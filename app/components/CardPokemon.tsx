import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { GiWaterDrop } from "react-icons/Gi";

export default function CardPokemon({ pokemon }) {
  return (
    <Card
      style={{
        borderRadius: 0,
        position: "relative",
      }}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        component="img"
        height="200"
        image={pokemon.sprite || "/poke.png"}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokemon.description}
        </Typography>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            background: "black",
            color: "white",
            height: "20px",
            zIndex: 1,
            overflow: "hidden",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        >
          {pokemon.types.map((type) => {
            return (
              <div
                key={type}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                }}
              >
                {type}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
