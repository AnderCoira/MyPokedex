import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { PokemonDetail } from 'src/app/interfaces/main-interface';

@Component({
  selector: 'app-pokemon-pokedex',
  templateUrl: './pokemon-pokedex.component.html',
  styleUrls: ['./pokemon-pokedex.component.scss']
})
export class PokemonPokedexComponent implements OnInit {

  pokemonAmount: Number = 1150;
  allThePokemons: PokemonDetail[] = [];
  filteredPokemons: PokemonDetail[] = [];
  searchValue: String = '';

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
              //Changing first letter of the pokemons to uppercase and shortenning big names
              res.original_name = res.name;
              res.name = res.name.charAt(0).toUpperCase() + res.name.slice(1);
              if(res.name.length > 17) {
                res.name = res.name.substring(0,14) + '...';
              }

              //In case there is no sprite adding a custom missing image
              if(!res.sprites.other.home.front_default){
                res.sprites.other.home.front_default = '../../../assets/pokemons/missingno.png';
              }
              this.allThePokemons.push(res);
              this.filteredPokemons.push(res);
              if(this.allThePokemons.length >= this.pokemonAmount && this.filteredPokemons.length >= this.pokemonAmount) {
                this.sortPokemons();
              }
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

  searchPokemon(){
    let _filterPokemons;
    if (!this.searchValue.trim().length) {
        _filterPokemons = this.allThePokemons;
    }else {
        _filterPokemons = this.allThePokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().startsWith(this.searchValue.toLowerCase());
        });
    }
    this.filteredPokemons = _filterPokemons;
    this.pokemonAmount = this.filteredPokemons.length;
    this.sortPokemons();
  }

  sortPokemons(){
    this.filteredPokemons.sort(function(a, b) { 
      return - ( b.id - a.id );
    });
  }

}
