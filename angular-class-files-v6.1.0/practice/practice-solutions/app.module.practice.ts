import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { NavModule } from './nav/nav.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';

import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, HeaderModule, NavModule, MainModule, FooterModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
