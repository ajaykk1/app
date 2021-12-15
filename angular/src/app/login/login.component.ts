import { NutrionistApiService } from './../nutrionist-api.service';
import { Member } from './../member';
import { NutrionistService } from './../nutrionist.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private temp:NutrionistService,private router:Router,private api:NutrionistApiService) { }
  title:boolean=false;
  loginName="";
  loginPassword="";
  error=true;
  ngOnInit(): void {
      this.temp.getAll().subscribe(data=>{
        console.log(data);
       
      });
      this.title= this.temp.bool.valueOf();
      
      
      console.log(this.temp.email+" "+this.temp.password);
  }   
    submit(){
      console.log(this.loginName+" "+this.loginPassword);
      if((this.loginName===this.temp.email)&&(this.loginPassword===this.temp.password)){
        console.log("yes same");
        this.router.navigate(['list']);
        this.api._iserror=false;
      }
      else{
        this.error=false;
        this.api._iserror=true;
      }
    }
}
