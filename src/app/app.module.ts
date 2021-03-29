import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { DeliveryDetailsComponent } from './components/delivery-details/delivery-details.component';
import { ViewDetailsComponent } from './components/delivery-details/view-details/view-details.component';
import { ViewListComponent } from './components/delivery-list/view-list/view-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DeliveryListComponent,
    DeliveryDetailsComponent,
    ViewDetailsComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
    dropSpecialCharacters: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
