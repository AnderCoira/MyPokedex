import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { POKEMON_TYPES } from 'src/app/enums/pokemon-types';
import { PokemonDetail } from 'src/app/interfaces/main-interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonDetail!: PokemonDetail;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pokemonDetail.types.forEach(type => {
      switch (type.type.name) {
        case POKEMON_TYPES.NORMAL:
          type.type.name = '../../../assets/types/normal.svg';
          break;
        case POKEMON_TYPES.FIGHTING:
          type.type.name = '../../../assets/types/fighting.svg';
          break;
        case POKEMON_TYPES.FLYING:
          type.type.name = '../../../assets/types/flying.svg';
          break;
        case POKEMON_TYPES.POISON:
          type.type.name = '../../../assets/types/poison.svg';
          break;
        case POKEMON_TYPES.GROUND:
          type.type.name = '../../../assets/types/ground.svg';
          break;
        case POKEMON_TYPES.ROCK:
          type.type.name = '../../../assets/types/rock.svg';
          break;
        case POKEMON_TYPES.BUG:
          type.type.name = '../../../assets/types/bug.svg';
          break;
        case POKEMON_TYPES.GHOST:
          type.type.name = '../../../assets/types/ghost.svg';
          break;
        case POKEMON_TYPES.STEEL:
          type.type.name = '../../../assets/types/steel.svg';
          break;
        case POKEMON_TYPES.FIRE:
          type.type.name = '../../../assets/types/fire.svg';
          break;
        case POKEMON_TYPES.WATER:
          type.type.name = '../../../assets/types/water.svg';
          break;
        case POKEMON_TYPES.GRASS:
          type.type.name = '../../../assets/types/grass.svg';
          break;
        case POKEMON_TYPES.ELECTRIC:
          type.type.name = '../../../assets/types/electric.svg';
          break;
        case POKEMON_TYPES.PSYCHIC:
          type.type.name = '../../../assets/types/psychic.svg';
          break;
        case POKEMON_TYPES.ICE:
          type.type.name = '../../../assets/types/ice.svg';
          break;
        case POKEMON_TYPES.DRAGON:
          type.type.name = '../../../assets/types/dragon.svg';
          break;
        case POKEMON_TYPES.DARK:
          type.type.name = '../../../assets/types/dark.svg';
          break;
        case POKEMON_TYPES.FAIRY:
          type.type.name = '../../../assets/types/fairy.svg';
          break;
        case POKEMON_TYPES.UNKNOWN:
          type.type.name = '../../../assets/types/all.svg';
          break;
        case POKEMON_TYPES.SHADOW:
          type.type.name = '../../../assets/types/shadow.svg';
          break;
      
        default:
          break;
      }
    });
  }

}
