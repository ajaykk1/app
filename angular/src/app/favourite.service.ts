import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Favourite } from './favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  url:string="http://localhost:8080/get";
  url1:string="http://localhost:8080/addfavourite";
  url3:string="http://localhost:8080/getid";
  url4:string="http://localhost:8080/update";
  url5:string="http://localhost:8080/delete";
  constructor(private http:HttpClient) { }
  getAllFavourite():Observable<Favourite>{
    return this.http.get<Favourite>(this.url);
  }
  addFavourite(favourite:Favourite):Observable<Object>{
    return this.http.post("http://localhost:8080/addfavourite",favourite); 
  }
  getFavouriteId(id:number):Observable<Favourite>{
    return this.http.get<Favourite>(`${this.url3}/${id}`);
  }
  updateFavourite(id:number,favourite:Favourite){
    return this.http.put(`${this.url4}/${id}`,favourite);
  }
  deleteFavourite(id:number){
    return this.http.delete(`${this.url5}/${id}`);
  }
}
