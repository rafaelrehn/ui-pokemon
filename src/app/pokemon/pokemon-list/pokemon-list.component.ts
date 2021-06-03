import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ListPokemon } from '../pokemon.interace';
import { PokemonService } from '../pokemon.service';

interface Paginator{
  current: number
  total: number
  itemsPerPage: 20
  pages: number[]
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons!: ListPokemon

  paginator: Paginator = {
    current: 0,
    itemsPerPage: 20,
    pages: [],
    total: 0
  }

  constructor(
    private pokemonService: PokemonService,
    private localStorage: LocalStorageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.getAllPokemons()
    
  }

  async getAllPokemons(page?: number){
    const _page = page || 0
    this.pokemons = await this.pokemonService.getAll(_page)
    this.paginator = this.factoryPaginator(this.pokemons)
  }

  factoryPaginator(pokemons: ListPokemon): Paginator{
    let pages: number[] = []
    const numeroPaginas = pokemons.count/20
    for (let index = 0; index < numeroPaginas; index++) {
      pages.push(index)
    } 
    return {
      current: 0,
      total: pokemons.count,
      itemsPerPage: 20,
      pages: pages
    }
  }

  getImageUrl(i: any): string{
    const id = parseInt(i)+1
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  }

  pushPopfavorite(idx: number){
    let currentFavorites: number[] = this.localStorage.get('pokemonFavorites') || []
    if(this.isFavorite(idx)){
      const i = currentFavorites.indexOf(idx)
      currentFavorites.splice(i, 1)
    }else{
      currentFavorites.push(idx)
    }
    this.localStorage.set('pokemonFavorites', currentFavorites)    
  }

  isFavorite(i: number): boolean{
    const currentFavorites: number[] = this.localStorage.get('pokemonFavorites') || []
    return currentFavorites.includes(i)
  }

}
