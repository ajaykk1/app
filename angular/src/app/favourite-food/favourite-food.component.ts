import { NutrionistApiService } from './../nutrionist-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Favourite } from '../favourite';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-favourite-food',
  templateUrl: './favourite-food.component.html',
  styleUrls: ['./favourite-food.component.css']
})
export class FavouriteFoodComponent implements OnInit {
  favour:Favourite=new Favourite();
  constructor(private favouriteService:FavouriteService,private router:Router,private api:NutrionistApiService) { }
  favourite:any=[];
  ngOnInit(): void {
    this.favouriteService.getAllFavourite().subscribe(data=>{
      console.log(data);
      this.favourite=data;
      this.api._iserror=false;
    })
  }
  add(){
    this.router.navigate(['add'])
  }
  update(id:number){
    this.router.navigate(['update',id])
    
  }
  delete(id:number){
    this.favouriteService.deleteFavourite(id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['favourite']);
      alert("deleted ❌")
    })
  }
}
