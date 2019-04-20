import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { DisplayComponent } from './display/display.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {SearchService} from "./search/search.service";
import {QueryApi} from "./commonServices/request/QueryApi";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'payment', component: PaymentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayItemsComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterPipeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  exports: [ RouterModule ],
 providers: [SearchService,QueryApi],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
