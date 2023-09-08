import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/components/layouts/header/header.component';
import { MainComponent } from 'src/components/layouts/main/main.component';
import { FooterComponent } from 'src/components/layouts/footer/footer.component';
import { MatCardModule} from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from '@angular/material/icon'
import { CorreoModule } from 'src/correo/correo.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
