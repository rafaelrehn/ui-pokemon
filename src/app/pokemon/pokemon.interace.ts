export interface ListPokemon{
    count: number
    next: string | null
    previous: string | null
    results: ListPokemonResults[]
}

export interface ListPokemonResults{
    name: string
    url: string
    favorite: boolean
}

export interface PokemonFavorito{
    name: string
    imgUrl: string
  }