import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Response} from 'angular2/http';
import { artInfo } from './artList';
import{artListService} from './artList.service';
import{ArtlistbyartistFilterPipe} from './artlist-filter-byartist.pipe';

import { RouteParams, Router} from 'angular2/router';

import {AuthService} from "../auth//auth.service";
@Component({
  selector: 'actualpatients-list',
  directives: [ ROUTER_DIRECTIVES],
  template: `
  <div class="panel panel-primary ">
          <div class="panel-heading">
              <div class='row'>
                 <div class='col-md-2'><span style='font-size:large'>Art</span></div>
                 <div class='col-md-3'>
                    <span style='font-size:large'>Filter by:</span ><input style="color:black" type='text' [(ngModel)]='listFilter'/>
                </div>        
              </div>
          </div>    
          <div class="panel-body">
              <div class="table-responsive">
                  <div *ngIf="artList">
                      <table class="table table-striped">
                            <thead>
                                      <tr>                                         
                                          <th>Artist Name</th>
                                          <th>Cost</th>
                                          <th>Art</th> 
                                          <th></th>                                                                                              
                                      </tr>
                          </thead>
                            
                            <tr *ngFor="#art of artList | artlistbyartistFilter : listFilter ">
                              <td>
                                        {{art.artist_name}}  
                            </td>
                              <td>{{art.cost}}<td>
                              <td><img width="100" height="100" [src]='art.img_url' /></td>
                              <td> Add To cart</td>
                            </tr>
                      </table>
                  </div>
              </div>
          </div>
    </div>
    
  `,
  styleUrls: ['html/actualpatients/actualpatients-list.component.css'],
  pipes : [ArtlistbyartistFilterPipe]
  
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
