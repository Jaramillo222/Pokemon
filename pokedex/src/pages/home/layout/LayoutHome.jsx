import React, { useEffect, useState } from 'react';
import css from './layout.module.scss';
import Header from '../header/Header';
import axios from 'axios';
import { URL_POKEMON } from '../../../api/apiRest';

export default function LayoutHome() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  console.log(arrayPokemon);

  useEffect(() => {
    const api = async() => {
      const apiPoke = await axios.get(`${URL_POKEMON}`);

      setArrayPokemon(apiPoke.data.results);
    };

    api();
  }, []);
  

  return (
    <div className={css.layout}>
      <Header/>
    </div>
  );
}
