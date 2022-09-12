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

import {TooltipModule} from 'primeng/tooltip';
import {ProgressBarModule} from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';


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
    HttpClientModule,
    FormsModule,
    TooltipModule,
    ProgressBarModule,
    TagModule,
    DialogModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
