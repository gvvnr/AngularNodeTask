import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { DisplayComponent } from './display/display.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {SearchService} from "./search/search.service";
import {QueryApi} from "./commonServices/request/QueryApi";
import {HttpClientModule} from "@angular/common/http";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//import {MdDialogModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'payment', component: PaymentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
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
    HttpClientModule,
    //MatDialog
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
  ],
  exports: [ RouterModule ],
 providers: [SearchService,QueryApi],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
