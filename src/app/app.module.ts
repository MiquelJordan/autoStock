import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'

import { StockService } from './service/stockService/stock.service'
import { AppComponent } from './app.component';
import { StockEditComponent } from './component/stock-edit/stock-edit.component';
import { StockPageComponent } from './page/stock-page/stock-page.component';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app.route'
import { OrderPageComponent } from './page/order-page/order-page.component';
import { OrderEditComponent } from './component/order-edit/order-edit.component';
import { ReceptionEditComponent } from './component/reception-edit/reception-edit.component';
import { ReceptionPageComponent } from './page/reception-page/reception-page.component'
import { MaterialModule } from './material.module'


@NgModule({
  declarations: [
    AppComponent,
    StockEditComponent,
    StockPageComponent,
    OrderPageComponent,
    OrderEditComponent,
    ReceptionEditComponent,
    ReceptionPageComponent,


  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
