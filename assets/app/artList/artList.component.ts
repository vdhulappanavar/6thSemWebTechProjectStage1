import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Response} from 'angular2/http';
import { artInfo } from './artList';
import{artListService} from './artList.service';

import { RouteParams, Router} from 'angular2/router';

import {AuthService} from "../auth//auth.service";
@Component({
  selector: 'actualpatients-list',
  directives: [ ROUTER_DIRECTIVES],
  template: `
  <div class="panel panel-primary ">
          <div class="panel-heading">
              <div class='row'>
                  ART        
              </div>
          </div>    
          <div class="panel-body">
              <div class="table-responsive">
                  <div *ngIf="artList">
                      <table class="table table-striped">
                            <thead>
                                      <tr>
                                          <th>
                                              <button class='btn btn-primary' (click) = "toggleImage()">
                                                  {{showImage ? 'Hide' : 'Show'}} Image
                                              </button>
                                          </th>
                                          <th>Reg No</th>
                                          <th>Patient Name</th>
                                          <th>Gender</th>
                                          <th>Age</th>
                                          <th>DOA</th>                        
                                          <th></th>         
                                          <th></th>               
                                      </tr>
                          </thead>
                            
                            <tr *ngFor="#art of artList ">
                              <td>{{art.artist_name}}</td>
                              <td>{{art.cost}}<td>
                              <td><img width="100" height="100" [src]='art.img_url' /></td>
                            </tr>
                      </table>
                  </div>
              </div>
          </div>
    </div>
    
  `,
  styleUrls: ['html/actualpatients/actualpatients-list.component.css']
  
})
export class artListComponent implements OnInit{
  artList: artInfo[] = [];  
  listFilter = "";
  showImage = false;
  
  constructor(private artListService : artListService , private _authService: AuthService , private router: Router) { }
 
  ngOnInit(){

    this.artListService
      .getAllArtList()
      .subscribe(p=> this.artList = p);
    
  }
    isLoggedIn() {
            return this._authService.isLoggedIn();
        }
  
}
