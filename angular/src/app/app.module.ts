import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NutrisionListComponent } from './nutrision-list/nutrision-list.component';
import { HeaderComponent } from './header/header.component';
import { FavouriteFoodComponent } from './favourite-food/favourite-food.component';
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { UpdateFavouriteComponent } from './update-favourite/update-favourite.component';
import { RecommandFoodComponent } from './recommand-food/recommand-food.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    HomeComponent,
    NutrisionListComponent,
    HeaderComponent,
    FavouriteFoodComponent,
    AddFavouriteComponent,
    UpdateFavouriteComponent,
    RecommandFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
