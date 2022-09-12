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

}
