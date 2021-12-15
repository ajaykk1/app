import { NutrionistApiService } from './../nutrionist-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user:any=[];
    user1:any=[];
    user2:any=[];
  constructor(private nutrionistApiService:NutrionistApiService) { 
    this.nutrionistApiService.nutrionistApi().subscribe(data=>{
      console.warn(data);
      this.user=data.foods;
      console.log(this.user);
      this.user1=this.user[0].foodNutrients;
      console.log(this.user1)
      console.log(this.nutrionistApiService.food)
    })
   }

  ngOnInit(): void {
    
  }

}
