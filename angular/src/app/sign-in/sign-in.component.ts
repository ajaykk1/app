import { NutrionistService } from './../nutrionist.service';

import { Member } from './../member';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email="";
  password="";
  constructor(private nutrionistService: NutrionistService,private router:Router) { }
  member:Member=new Member();
  ngOnInit(): void {
    
  }
    public bool:boolean=false;
    addNutrionist(){
      this.nutrionistService.addAllNutrionist(this.member).subscribe(data=>{
        console.log(data);
      });
    }

    save(){
      console.log(this.member);
     this.addNutrionist();
     this.router.navigate(['login'])
      this.nutrionistService.authentication(this.member.email,this.member.password);
      this.nutrionistService.bool=true;
    }
}
