import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { WEBROUTES as ROUTES} from './app.routes'


@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(ROUTES) ]
})

export class AppRoutingModule { }
