import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { POKEMON_STATS } from 'src/app/enums/pokemon-stats';
import { PokemonDetail, PokemonMoves } from 'src/app/interfaces/main-interface';
import { MainService } from 'src/app/services/main.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  providers: [MessageService]
})
export class PokemonDetailComponent implements OnInit {

  paramsPokemonName!: string;
  pokemonDetail!: PokemonDetail;
  POKEMON_STATS: typeof POKEMON_STATS = POKEMON_STATS;
  pokemonMoves: PokemonMoves[] = [];
  abilitiesDisplay: boolean = false;
  pokemonAbilityText: any = undefined;
  clickedPokemonAbility: any = undefined;

  constructor(private route: ActivatedRoute, private service: MainService, private messageService: MessageService) { }

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
        
        res.stats[POKEMON_STATS.HP].stat.name = 'HP';
        res.stats[POKEMON_STATS.ATTACK].stat.name = 'Attack';
        res.stats[POKEMON_STATS.DEFENCE].stat.name = 'Defence';
        res.stats[POKEMON_STATS.SPECIAL_ATTACK].stat.name = 'Sp. Attack';
        res.stats[POKEMON_STATS.SPECIAL_DEFENCE].stat.name = 'Sp. Defence';
        res.stats[POKEMON_STATS.SPEED].stat.name = 'Speed';

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

        res.moves.forEach(move => {
          this.service.getPokemonMoves(move.move.name).subscribe({
            next: res => {
              this.pokemonMoves.push(res);
            },
            error: err => {
              console.log(err);
              this.messageService.add({severity:'error', summary: 'Error', detail: 'There has been an error fetching the data. Please refresh the page'});
            }
          });
        });
      },
      error: err => {
        console.log(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'There has been an error fetching the data. Please refresh the page'});
      }
    });
  }

  abilityInfo(name:string){
    this.abilitiesDisplay = true;
    this.clickedPokemonAbility = name;
    this.service.getPokemonAbility(name).subscribe({
      next: res => {
        this.pokemonAbilityText = res.effect_entries[1].effect;
      },
      error: err => {
        console.log(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'There has been an error fetching the data. Please refresh the page'});
      }
    });
  }

  emptyAbilityData(){
    this.clickedPokemonAbility = undefined;
    this.pokemonAbilityText = undefined;
  }

}
