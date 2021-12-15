import { FavouriteService } from './../favourite.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NutrionistApiService } from '../nutrionist-api.service';
import { Favourite } from '../favourite';


@Component({
  selector: 'app-nutrision-list',
  templateUrl: './nutrision-list.component.html',
  styleUrls: ['./nutrision-list.component.css']
})
export class NutrisionListComponent implements OnInit {
  search:any="food";
  favourite:Favourite=new Favourite();
  constructor(public nutrionistApiService:NutrionistApiService,private router:Router,private favouriteService:FavouriteService) {
   
   }

  ngOnInit(): void {
    this.nutrionistApiService._iserror=false;
  }
  sendData(event:any){
    console.log(event.target.value)
    this.search=event.target.value;
    this.nutrionistApiService.food=event.target.value;
  }
  submit(){
    this.router.navigate(['home'])
  }
  save(data:string){
    this.favourite.favouriteFood=data;
    this.favouriteService.addFavourite(this.favourite).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(['favourite'])
  }
}
