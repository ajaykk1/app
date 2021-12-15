import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutrionistApiService {
  url="https://api.nal.usda.gov/fdc/v1/foods/search?query=";
  food:any;
  _iserror:boolean=true;
  constructor(private http:HttpClient) {
   
  }
  nutrionistApi():Observable<any>{
    return this.http.get(`${this.url}${this.food}&pageSize=1&api_key=vTP378EthnaqDETiPur5NS4pnEv4tEvfWuiOsTnj`);
  }
}
