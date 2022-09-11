import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { POKEMON_STATS } from 'src/app/enums/pokemon-stats';
import { PokemonDetail } from 'src/app/interfaces/main-interface';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  paramsPokemonName!: string;
  pokemonDetail!: PokemonDetail;
  POKEMON_STATS: typeof POKEMON_STATS = POKEMON_STATS;

  constructor(private route: ActivatedRoute, private service: MainService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.paramsPokemonName = param["name"];
     });

     if(this.paramsPokemonName) {
        this.getPokemonDetail(this.paramsPokemonName);
     }

  }

  getPokemonDetail(pokemonName: string) {
    this.service.getPokemonByName(pokemonName).subscribe({
      next: res => {
        this.pokemonDetail = res;
        this.pokemonDetail.original_name = res.name;
        this.pokemonDetail.totalStats = 
          res.stats[POKEMON_STATS.HP].base_stat + 
          res.stats[POKEMON_STATS.ATTACK].base_stat + 
          res.stats[POKEMON_STATS.DEFENCE].base_stat +
          res.stats[POKEMON_STATS.SPECIAL_ATTACK].base_stat +
          res.stats[POKEMON_STATS.SPECIAL_DEFENCE].base_stat +
          res.stats[POKEMON_STATS.SPEED].base_stat;

        this.pokemonDetail.name = this.pokemonDetail.name.toUpperCase();
        console.log('Pokemon detail data -> ', this.pokemonDetail);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
