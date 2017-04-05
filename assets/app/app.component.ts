import {Component} from 'angular2/core';
import {enableProdMode} from 'angular2/core';
enableProdMode();
// HTTP_PROVIDERS =. let's you inject http service
import { HTTP_PROVIDERS } from 'angular2/http';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";


import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";






@Component({
    selector: 'my-app',
    
    template: `
    <my-header></my-header> 
        <div class="container">            
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent] ,
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
    
})

//var test = true;
//var test1=false;x
/*@RouteConfig([
    { path: '/Actualpatients', name: 'Actualpatients', component: ActualpatientComponent , useAsDefault: true }
])*/

export class AppComponent {
   // test = true;
    test1=false;

    foo(){ return false;}
}