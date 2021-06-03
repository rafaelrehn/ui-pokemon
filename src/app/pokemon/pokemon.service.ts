import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../services/local-storage.service';
import { ListPokemon } from './pokemon.interace';
import { PokemonListMock } from './pockemon.mock';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService  
  ) { }

  async getAll(){
    const url = environment.pokemonApiEndpoint + '/pokemon'
    // ?limit=20&offset=20"
    // const res = await this.http.get(url).toPromise() as ListPokemon
    // return res
    return PokemonListMock as ListPokemon
  }

}
