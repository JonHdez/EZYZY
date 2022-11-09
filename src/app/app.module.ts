import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginClienteComponent } from './cliente/login-cliente/login-cliente.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTabsModule
  ],
  exports:[FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
