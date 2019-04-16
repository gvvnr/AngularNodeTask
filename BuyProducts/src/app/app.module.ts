import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
//import {FilterPipeModule} from "ngx-filter-pipe";
//import { FilterPipeModule } from 'ngx-filter-pipe'; // <-- Import

const routes: Routes = [
  { path: 'search', component: SearchComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FilterPipeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
