import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteService } from './../favourite.service';
import { Favourite } from './../favourite';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-favourite',
  templateUrl: './update-favourite.component.html',
  styleUrls: ['./update-favourite.component.css']
})
export class UpdateFavouriteComponent implements OnInit {
  id:number=0;
  constructor(private favouriteService:FavouriteService,private router:Router,private router1:ActivatedRoute) { }
  favourite:Favourite=new Favourite();
  ngOnInit(): void {
    this.id=this.router1.snapshot.params['id'];
    console.log(this.id);
    this.favouriteService.getFavouriteId(this.id).subscribe(data=>{
      this.favourite=data;
    });
  }
  submit(favourite:Favourite){
    this.favouriteService.updateFavourite(this.id,favourite).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(['favourite']);
    alert("UPDATED ✅")
  }
}
