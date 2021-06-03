import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PokemonFavorito } from '../pokemon.interace';

@Component({
  selector: 'app-pokemon-fav',
  templateUrl: './pokemon-fav.component.html',
  styleUrls: ['./pokemon-fav.component.scss']
})
export class PokemonFavComponent implements OnInit {

  favoritos!: PokemonFavorito[]

  constructor(
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.favoritos = this.localStorage.get('pokemonFavorites')
  }

  popfavorite(pokemonName: string){
    let currentFavorites: PokemonFavorito[] = this.localStorage.get('pokemonFavorites') || []
    const i = currentFavorites.map(m=>m.name).indexOf(pokemonName)
    currentFavorites.splice(i, 1)
    this.localStorage.set('pokemonFavorites', currentFavorites)
  }

}
