"use client";
import React, { useState } from "react";
import { Sprites } from "../../pages/api/sprites";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardPokemon from "../components/CardPokemon";
import Link from "next/link";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const addPokemon = () => {
    if (
      Sprites[Math.floor(Math.random() * (Sprites.length - 1) + 1)].sprite !==
        undefined ||
      null
    ) {
      if (
        pokemons.filter(
          (x) =>
            x.name ===
            Sprites[Math.floor(Math.random() * (Sprites.length - 1) + 1)].name
        ).length === 0
      ) {
        setPokemons([
          ...pokemons,
          Sprites[Math.floor(Math.random() * (Sprites.length - 1) + 1)],
        ]);
      }
    } else {
      addPokemon();
    }
  };

  const deleteLastPokemon = () => {
    setPokemons((previousArr) => previousArr.slice(0, -1));
  };

  const clearPokemons = () => {
    setPokemons([]);
  };
  return (
    <>
      <header>
        <Link
          href={"/"}
          style={{ position: "absolute", top: "50px", left: "30px", zIndex: 3 }}
          className="back-link"
        >
          {" <-"} BACK
        </Link>
        <h1>POKEMON</h1>

        <div className="buttons">
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => {
                addPokemon();
              }}
              variant="contained"
              color="success"
            >
              Add
            </Button>
            <Button
              onClick={() => {
                deleteLastPokemon();
              }}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
            <Button
              onClick={() => {
                clearPokemons();
              }}
              color="secondary"
            >
              Clear
            </Button>
          </Stack>
        </div>
      </header>

      <div className="pokemon-list">
        {pokemons.map((pokemon) => {
          return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
};

export default Pokemon;
