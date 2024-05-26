import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { AdminComponent } from './admin/admin.component';
import { StoreModule } from "./store/store.module";

@NgModule({
    declarations: [
        AppComponent,
        ModelComponent,
        AdminComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule
    ]
})
export class AppModule { }
