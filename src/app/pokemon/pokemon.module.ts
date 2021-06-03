import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CustomsModule } from '../customs/customs.module';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    CustomsModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonModule { }
