import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from '../city/city.component';
import { SearchComponent } from '../search/search.component';


const routes: Routes = [
     {path: '', redirectTo: '/favorites', pathMatch: 'full' }, // Start
     {path: 'favorites', component: CityComponent },
     {path: 'search', component: SearchComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
