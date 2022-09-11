import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPokedexComponent } from './components/pokemon-pokedex/pokemon-pokedex.component';

const routes: Routes = [
  { path: '', component: PokemonPokedexComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
