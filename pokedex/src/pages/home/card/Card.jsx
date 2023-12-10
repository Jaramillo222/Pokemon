import React, { useEffect, useState } from 'react'
import css from './card.module.scss'
import { URL_POKEMON } from '../../../api/apiRest'
import axios from 'axios';

export default function Card({card}) {

  const[itemPokemon, setItemPokemon] = useState({})

  console.log(itemPokemon);
  
  useEffect(()=>{
    const dataPokemon = async ()=>{
      const api = await axios.get(`${URL_POKEMON}/${card.name}`)
      setItemPokemon(api.data)
    }
    dataPokemon()
  }, [])

  return (
    <div className={css.card}>
      <img src={itemPokemon?.sprites?.other["official-artwork"]?.front_default} alt="pokemon" />
      <div className={css.sub_card}>
        <strong className={css.id_card}>01</strong>
        <strong className={css.name_card}>name</strong>
        <h4 className={css.peso_poke}>10 cm</h4>
        <h4 className={css.habitat_poke}>habitat</h4>
      </div>
    </div>
  )
}
