import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonPokedexComponent } from './components/pokemon-pokedex/pokemon-pokedex.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonLoaderComponent } from './components/pokemon-loader/pokemon-loader.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

import {BlockUIModule} from 'primeng/blockui';
import {TooltipModule} from 'primeng/tooltip';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  declarations: [
    AppComponent,
    PokemonPokedexComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonLoaderComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlockUIModule,
    HttpClientModule,
    FormsModule,
    TooltipModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
