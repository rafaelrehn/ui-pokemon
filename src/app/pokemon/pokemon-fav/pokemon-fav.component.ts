import { Component, OnInit } from '@angular/core';
import { EnterAnimation } from 'src/app/customs/animations/animate';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PokemonFavorito } from '../pokemon.interace';

@Component({
  selector: 'app-pokemon-fav',
  templateUrl: './pokemon-fav.component.html',
  styleUrls: ['./pokemon-fav.component.scss'],
  animations: [EnterAnimation]
})
export class PokemonFavComponent implements OnInit {

  favoritos!: PokemonFavorito[]

  constructor(
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.favoritos = this.localStorage.get('pokemonFavorites')
  }

  popFavorite(pokemonName: string){
    let currentFavorites: PokemonFavorito[] = this.localStorage.get('pokemonFavorites') || []
    const i = currentFavorites.map(m=>m.name).indexOf(pokemonName)
    currentFavorites.splice(i, 1)
    this.localStorage.set('pokemonFavorites', currentFavorites)
    const iFavoritos = this.favoritos.map(m=>m.name).indexOf(pokemonName)
    this.favoritos.splice(iFavoritos, 1)
  }

}
