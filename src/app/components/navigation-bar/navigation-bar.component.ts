import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Output() searchPokemonEmitter = new EventEmitter<string>();
  @Input() screenStatus!: string;
  searchValue: string = '';
  pokemon!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  searchPokemon(value: string) {
    this.searchPokemonEmitter.emit(value);
  }

  ngOnChanges(changes: any) {
    this.screenStatus = changes.screenStatus.currentValue;
  }

}
