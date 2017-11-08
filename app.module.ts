import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from '.app/component';
import {CarComponent} from '.car/component';
import{OrderListComponent} from '.order/order.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [    
    AppComponent,
    CarComponent
    OrderListComponent
    
  ],
  bootstrap: [AppComponent ],
  providers:[]
})
export class AppModule { }
