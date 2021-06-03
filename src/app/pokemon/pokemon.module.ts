import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CustomsModule } from '../customs/customs.module';
import { PokemonFavComponent } from './pokemon-fav/pokemon-fav.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonFavComponent
  ],
  imports: [
    CommonModule,
    CustomsModule
  ],
  exports: [
    PokemonListComponent,
    PokemonFavComponent
  ]
})
export class PokemonModule { }
