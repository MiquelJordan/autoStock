import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockPageComponent } from './page/stock-page/stock-page.component';
import { OrderPageComponent } from './page/order-page/order-page.component';
import { ReceptionPageComponent } from './page/reception-page/reception-page.component';


// routes
export const appRoutes: Routes = [
    { path: 'reception', component: ReceptionPageComponent },
    { path: 'consumable', component: StockPageComponent },
    { path: 'order', component: OrderPageComponent },
    { path: '', redirectTo: '/consumable', pathMatch: 'full' }
];
