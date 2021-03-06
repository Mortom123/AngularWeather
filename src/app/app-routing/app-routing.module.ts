import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../favorites/favorites.component';
import { SearchComponent } from '../search/search.component';



const routes: Routes = [
     {path: '', redirectTo: '/search', pathMatch: 'full' }, // Start
     {path: 'favorites', component: FavoritesComponent },
     {path: 'search', component: SearchComponent  },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
