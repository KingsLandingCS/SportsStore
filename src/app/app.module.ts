import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { AdminComponent } from './admin/admin.component';
import { StoreModule } from "./store/store.module";
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    AdminComponent
  ],
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "**", redirectTo: "/store" }
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
