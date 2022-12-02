import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class JsonService {

  constructor(private http: HttpClientModule) { }

  getYears(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
  
}
