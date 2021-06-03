import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonFavComponent } from './pokemon/pokemon-fav/pokemon-fav.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { animationState: 'One' } },
  { path: 'pokemons', component: PokemonListComponent, data: { animationState: 'Two' } },
  { path: 'pokemons-fav', component: PokemonFavComponent, data: { animationState: 'Three' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
