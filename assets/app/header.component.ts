import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router"; 
import {AuthService} from "./auth//auth.service";


@Component({
    selector: 'my-header',
    template: `                
                 <div>
						<nav class="navbar navbar-default">
							<div class="container-fluid">
								<a class="navbar-brand"><B style="color:#337ab7;font-size:large">{{pageTitle}}</B></a>
								<ul class="nav navbar-nav" >
                                    <li (click)="makeactive(0)"><a *ngIf="isLoggedIn()"><strong style="font-size:large"><span [style] = "active[0]? 'color:#337ab7' : '' " >Hey</span></strong></a></li>
                                    <li *ngIf="!isLoggedIn()"><a [routerLink]="['Auth']" >User Management</a></li>                                    									
								</ul>
                                <ul class="nav navbar-nav navbar-right">
                                    
                                        <li *ngIf="isLoggedIn()" class="dropdown">
                                            <a class="dropdown-toggle" data-toggle="dropdown"><strong style="color:#337ab7;font-size:large">Welcome {{getUserName()}}
                                            <span class="caret"></span></strong></a>
                                            <ul class="dropdown-menu">
                                            <li align="center"><a (click) ="onLogout()">Logout</a></li>                                            
                                            </ul>
                                         </li>                                    
                                    
                                </ul>
							</div>
						</nav>
					</div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    pageTitle = "Advantage Elder care";

    active = [true , false , false , false , false , false , false]

    constructor (private _authService: AuthService , private router : Router) {}

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }

    makeactive(index)
    {
        
        for(var i = 0 ; i<this.active.length ; i++)
        {
            this.active[i] = false;
            if(i==index)
                this.active[i] = true;
        }

        //console.log()
    }

    getUserName(){
            return localStorage.getItem('firstname') + " " + localStorage.getItem('lastname') ;
    }

    

     onLogout() {
        this._authService.logout();
        this.router.navigate(['Auth']);
    }
}