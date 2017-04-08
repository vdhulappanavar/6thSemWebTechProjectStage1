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

  med2patient;
  constructor(private http : Http ){}

  getAllArtList(): Observable<artInfo[]>{
    let actualpatients$ = this.http
      .get(`${this.baseUrl}/artList`)
      .map(mapActualpatients);
      return actualpatients$;
  }

}

function mapActualpatients(response:Response): artInfo[]{
  console.log("mapActualpatients");
   console.log(response);
   return response.json().obj.map(toActualpatient)
}

function mapActualpatient(response:Response): artInfo{
  console.log("mapActualpatient");
  console.log(response);
   return toActualpatient(response.json().obj);
}

function toActualpatient(r:any): artInfo{
  console.log("in toActualpatient");
  console.log(r);
  let actualpatient = <artInfo>({
    id : r._id , 
    artist_id : r.artist_id ,     
    name        : r.name,
    artist_name : r.artist_name , 
    cost      : r.cost,
    img_url         : r.img_url
  });
  console.log('Parsed actualpatient:', actualpatient);
  return actualpatient;
}
