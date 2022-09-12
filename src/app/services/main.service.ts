import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonAbility, PokemonAllMain, PokemonDetail, PokemonMoves } from '../interfaces/main-interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  URL: String = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(pokemonAmount: Number){
    return this.http.get<PokemonAllMain>(`${this.URL}/pokemon?limit=${pokemonAmount}&offset=0`);
  }

  getPokemonByName(pokemonName: String){
    return this.http.get<PokemonDetail>(`${this.URL}/pokemon/${pokemonName}`);
  }

  getPokemonMoves(moveName: String){
    return this.http.get<PokemonMoves>(`${this.URL}/move/${moveName}`);
  }

  getPokemonAbility(abilityName: String){
    return this.http.get<PokemonAbility>(`${this.URL}/ability/${abilityName}`);
  }

}
