import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> Develop

@Injectable({
  providedIn: 'root'
})
export class JsonService {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private http: HttpClientModule) { }

  
>>>>>>> Develop
}
