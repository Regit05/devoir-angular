import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {IndexComponent} from "./pages/index/index.component";
import {InscriptionComponent} from "./pages/inscription/inscription.component";


const routes: Routes = [
    {
        path: 'connexion',
        component: ConnexionComponent
    },
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'inscription',
        component: InscriptionComponent
    }
]




@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [

    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
