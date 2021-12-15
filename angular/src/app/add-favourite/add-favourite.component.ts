import { Router } from '@angular/router';
import { FavouriteService } from './../favourite.service';
import { Favourite } from './../favourite';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {
  public favourite:Favourite=new Favourite();
  constructor(private favouriteService:FavouriteService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(favourite:Favourite){
    this.favouriteService.addFavourite(favourite).subscribe(data=>{
      console.log(data);
      this.router.navigate(['favourite'])
    });
  }
}
