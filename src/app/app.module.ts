import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { CinamonComponent } from './cinamon/cinamon.component';
import { PepperComponent } from './pepper/pepper.component';
import { CloveComponent } from './clove/clove.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutUsComponent } from './about-us/about-us.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    CinamonComponent,
    PepperComponent,
    CloveComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NgImageSliderModule,
    SlickCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  


}
