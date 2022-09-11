import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
        case 'normal':
          type.type.name = '../../../assets/types/normal.svg';
          break;
        case 'fighting':
          type.type.name = '../../../assets/types/fighting.svg';
          break;
        case 'flying':
          type.type.name = '../../../assets/types/flying.svg';
          break;
        case 'poison':
          type.type.name = '../../../assets/types/poison.svg';
          break;
        case 'ground':
          type.type.name = '../../../assets/types/ground.svg';
          break;
        case 'rock':
          type.type.name = '../../../assets/types/rock.svg';
          break;
        case 'bug':
          type.type.name = '../../../assets/types/bug.svg';
          break;
        case 'ghost':
          type.type.name = '../../../assets/types/ghost.svg';
          break;
        case 'steel':
          type.type.name = '../../../assets/types/steel.svg';
          break;
        case 'fire':
          type.type.name = '../../../assets/types/fire.svg';
          break;
        case 'water':
          type.type.name = '../../../assets/types/water.svg';
          break;
        case 'grass':
          type.type.name = '../../../assets/types/grass.svg';
          break;
        case 'electric':
          type.type.name = '../../../assets/types/electric.svg';
          break;
        case 'psychic':
          type.type.name = '../../../assets/types/psychic.svg';
          break;
        case 'ice':
          type.type.name = '../../../assets/types/ice.svg';
          break;
        case 'dragon':
          type.type.name = '../../../assets/types/dragon.svg';
          break;
        case 'dark':
          type.type.name = '../../../assets/types/dark.svg';
          break;
        case 'fairy':
          type.type.name = '../../../assets/types/fairy.svg';
          break;
        case 'unknown':
          type.type.name = '../../../assets/types/all.svg';
          break;
        case 'shadow':
          type.type.name = '../../../assets/types/shadow.svg';
          break;
      
        default:
          break;
      }
    });
  }

}
