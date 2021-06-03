import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ListPokemon, PokemonFavorito } from '../pokemon.interace';
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

  loading = false

  constructor(
    private pokemonService: PokemonService,
    private localStorage: LocalStorageService,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getAllPokemons()
  }

  async getAllPokemons(page?: number){
    this.loading = true
    const _page = page || 0
    this.pokemons = await this.pokemonService.getAll(_page)
    this.setFavorites(this.pokemons)
    this.paginator = this.factoryPaginator(this.pokemons, _page)
    this.loading = false
  }

  setFavorites(pokemons: ListPokemon){
    pokemons.results.forEach((el)=>{
      el.favorite = this.isFavorite(el.name)
    })
  }

  factoryPaginator(pokemons: ListPokemon, _page: number): Paginator{
    let pages: number[] = []
    const numeroPaginas = pokemons.count/20
    for (let index = 0; index < numeroPaginas; index++) {
      pages.push(index)
    } 
    return {
      current: _page,
      total: pokemons.count,
      itemsPerPage: 20,
      pages: pages
    }
  }

  getImageUrl(idx: any): string{
    let i = this.getRealIdPokemon(idx)
    const id =i+1
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  }

  getRealIdPokemon(idx: number): number{
    return idx + this.paginator.current * this.paginator.itemsPerPage
  }


  pushPopfavorite(pokemonName: string, idx: number){
    let currentFavorites: PokemonFavorito[] = this.localStorage.get('pokemonFavorites') || []
    if(this.isFavorite(pokemonName)){
      const i = currentFavorites.map(m=>m.name).indexOf(pokemonName)
      currentFavorites.splice(i, 1)
      
    }else{
      currentFavorites.push({
        name: pokemonName,
        imgUrl: this.getImageUrl(idx)
      })
    }
    this.localStorage.set('pokemonFavorites', currentFavorites)
    this.setFavorites(this.pokemons)    
  }

  isFavorite(pokemonName: string): boolean{
    const currentFavorites: PokemonFavorito[] = this.localStorage.get('pokemonFavorites') || []
    return currentFavorites.map(m=>m.name).includes(pokemonName)
  }

  goToPaginator(pag: number){
    this.getAllPokemons(pag)
  }

}
