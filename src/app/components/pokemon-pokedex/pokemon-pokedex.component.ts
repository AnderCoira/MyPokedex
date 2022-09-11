import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { PokemonDetail } from 'src/app/interfaces/main-interface';

@Component({
  selector: 'app-pokemon-pokedex',
  templateUrl: './pokemon-pokedex.component.html',
  styleUrls: ['./pokemon-pokedex.component.scss']
})
export class PokemonPokedexComponent implements OnInit {

  pokemonAmount: Number = 150;
  allThePokemons: PokemonDetail[] = [];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.getAllPokemons(this.pokemonAmount);
  }

  getAllPokemons(pokemonAmount: Number) {
    this.service.getPokemons(pokemonAmount).subscribe({
      next: res => {
        res.results.forEach(pokemon => {
          this.service.getPokemonByName(pokemon.name).subscribe({
            next: res => {
              //Changing first letter of the pokemons to uppercase
              res.name = res.name.charAt(0).toUpperCase() + res.name.slice(1);

              //In case there is no sprite adding a custom missing image
              if(!res.sprites.front_default){
                res.sprites.front_default = '../../../assets/pokemons/missingno.png';
              }
              this.allThePokemons.push(res);
            },
            error: err => {
              console.log(err);
            }
          });
        });
        this.pokemonAmount = res.results.length;
        console.log('All the pokemons -> ', this.allThePokemons);
      },
      error: err => {
        console.log(err);
      }
   });
  }

  searchPokemon(e:any){
    console.log(e);
  }

}
