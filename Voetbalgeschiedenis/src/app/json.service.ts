import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class JsonService {

  constructor(private http: HttpClient) { }

  getYears(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears?type=json');
  }
  getMatches(){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatches?type=json');
  }
  getMatchesByYear(){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatchesbyyear?year=2010?type=json');
  }
  getPlayers(){
    return this.http.get('https://k0497.azurewebsites.net/api/players/getallplayers?type=json');
  }
  getPlayersByMatch(){
    return this.http.get('https://k0497.azurewebsites.net/api/players/getallplayersbymatch?matchid=300186502?type=json');
  }
}
