import { Component, OnInit } from '@angular/core';
import { ListPokemon } from '../pokemon.interace';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons!: ListPokemon

  constructor(
    private pokemonService: PokemonService
  ) { }

  async ngOnInit(): Promise<void> {
    this.pokemons = await this.pokemonService.getAll()
  }

  getImageUrl(i: any): string{
    const id = parseInt(i)+1
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  }

}
