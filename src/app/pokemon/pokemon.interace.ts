export interface ListPokemon{
    count: number
    next: string
    previous: string 
    results: ListPokemonResults[]
}

export interface ListPokemonResults{
    name: string
    url: string
}