import { Routes, RouterModule, provideRoutes, RouteConfigLoadStart, RouteReuseStrategy } from '@angular/router';
import { NgModule } from '@angular/core';


 import { PortafolioComponent } from './components/portafolio/portafolio.component';
 import {  AboutComponent } from './components/about/about.component';
 import { ProductoComponent} from './components/producto/producto.component';
// import { AboutComponent , PortafolioComponent, ProductoComponent  } from './components/index.paginas';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ProductoComponent },
    // { path: '**', component: 'home' },

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: 'home' },
     { path: '**', redirectTo: 'home' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

 @NgModule({
     imports: [RouterModule.forChild(app_routes)],
     exports: [RouterModule]
 })
 export class FeatureRoutingModule {}

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
