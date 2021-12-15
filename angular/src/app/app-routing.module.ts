import { RecommandFoodComponent } from './recommand-food/recommand-food.component';
import { UpdateFavouriteComponent } from './update-favourite/update-favourite.component';
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { FavouriteFoodComponent } from './favourite-food/favourite-food.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NutrisionListComponent } from './nutrision-list/nutrision-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'signup',component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'list',component:NutrisionListComponent},
  {path:'favourite',component:FavouriteFoodComponent},
  {path:'add',component:AddFavouriteComponent},
  {path:'update/:id',component:UpdateFavouriteComponent},
  {path:'about',component:RecommandFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
