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

  async getAll(page: number){
    const offset = 20 * page
    const paginate = `?limit=20&offset=${offset}`
    const url = environment.pokemonApiEndpoint + '/pokemon' + paginate
    // return await this.http.get(url).toPromise() as ListPokemon
    return PokemonListMock as ListPokemon
  }

}
