import { Routes } from '@angular/router'
import { FavoritesComponent } from '../favorites/favorites.component';
import { SearchComponent as WebSearchComponent } from '../search-web/search.component'
import { SearchComponent as MobSearchComponent } from '../search-mobile/search.component.tns'

const ROUTES: Routes = [
{path: '', redirectTo: '/search', pathMatch: 'full' }, // Start
{path: 'favorites', component: FavoritesComponent },
]

export const WEBROUTES: Routes = [
    ...ROUTES,
    {path: 'search', component: WebSearchComponent },
]

export const MOBROUTES: Routes = [
    ...ROUTES,
    {path: 'search', component: MobSearchComponent },
]