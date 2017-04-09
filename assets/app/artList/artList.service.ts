import { Injectable } from 'angular2/core';
import { Http, Headers, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { artInfo } from './artList';

@Injectable()
export class artListService{
  //private baseUrl: string = 'http://swapi.co/api';
    private baseUrl: string = 'http://localhost:3000';
  //private baseUrl: string = 'http://192.168.1.104:3000';

  
  constructor(private http : Http ){}

  getAllArtList(): Observable<artInfo[]>{
    let artlist$ = this.http
      .get(`${this.baseUrl}/artList`)
      .map(mapArtlists);
      return artlist$;
  }

}

function mapArtlists(response:Response): artInfo[]{
  console.log("mapArtlists");
   console.log(response);
   return response.json().obj.map(toArtlist)
}

function mapArtlist(response:Response): artInfo{
  console.log("mapArtlist");
  console.log(response);
   return toArtlist(response.json().obj);
}

function toArtlist(r:any): artInfo{
  console.log("in toArtlist");
  console.log(r);
  let artlist = <artInfo>({
    id : r._id , 
    artist_id : r.artist_id ,     
    name        : r.name,
    artist_name : r.artist_name , 
    cost      : r.cost,
    img_url         : r.img_url
  });
  console.log('Parsed artlist:', artlist);
  return artlist;
}
