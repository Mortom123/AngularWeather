import { Routes } from '@angular/router'
import { FavoritesComponent } from '../favorites/favorites.component';
import { SearchComponent as WebSearchComponent } from '../search-web/search.component'
import { SearchComponent as MobSearchComponent } from '../search-mobile/search.component.tns'

const ROUTES: Routes = [
{path: '', redirectTo: '/search', pathMatch: 'full' }, // Start
]

export const WEBROUTES: Routes = [
    ...ROUTES,
    {path: 'favorites', component: FavoritesComponent},
    {path: 'search', component: WebSearchComponent },
]

export const MOBROUTES: Routes = [
    ...ROUTES,
    {path: 'favorites', component: FavoritesComponent, outlet:"favorites" },
    {path: 'search', component: MobSearchComponent, outlet:"search" },
]