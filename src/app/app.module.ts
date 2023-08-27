import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule-ni import qiling
import { FormsModule } from '@angular/forms'; // FormsModule-ni import qiling
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // HttpClientModule-ni imports ichiga qo'shing
    FormsModule, // FormsModule-ni imports ichiga qo'shing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
