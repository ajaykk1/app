import { Member } from './member';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutrionistService {
  bool:boolean=false;
  private url="http://localhost:8080/formdata";
  email="";
  password="";
  constructor(private http:HttpClient) { }
  authentication(email: string,password: string){
    this.email=email;
    this.password=password;
  }
  addAllNutrionist(member:Member):Observable<Object>{
    return this.http.post(`${this.url}`,member);
  }
  getAll():Observable<Member[]>{
    return this.http.get<Member[]>(`${"http://localhost:8080/home"}`);
  }
  // getApi():Observable<Object>{
  //   return this.http.get<Object>(`${"https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=Iga6nbFDouYmGPrvKPZtIc6BZjnPtLAK0RS8X1EF "}`)
  // }
}
