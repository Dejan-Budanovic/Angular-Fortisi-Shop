import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShopDashboardDirective } from './shop-dashboard.directive';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { SocialNavBarComponent } from './social-nav-bar/social-nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { IntroArticleComponent } from './intro-article/intro-article.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CartItems } from './in-memory-cart-items';
import { CartService } from './services/cart.service';
import { MessageService } from './services/message.service';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ItemDetailComponent,
    ShopDashboardDirective,
    ShopDashboardComponent,
    MainHeaderComponent,
    MainFooterComponent,
    SocialNavBarComponent,
    AboutUsComponent,
    ContactComponent,
    IntroArticleComponent,
    LoginComponent,
    SignUpComponent,
    ShoppingCartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(CartItems, {dataEncapsulation:false}),
  ],
  providers: [CartService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
