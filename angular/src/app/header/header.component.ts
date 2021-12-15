import { Router } from '@angular/router';
import { NutrionistApiService } from './../nutrionist-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 //check:any;
  constructor(public nutrionistApi:NutrionistApiService,private router:Router) { }

  ngOnInit(): void {
   //this.check=this.nutrionistApi._iserror;
   
  }
  submit(){
    this.router.navigate(['list']);
  }
}
