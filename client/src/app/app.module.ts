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
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CdkTableModule } from '@angular/cdk/table';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatListModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatNativeDateModule, MatIconModule, MatSelectModule, MatOptionModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//import {MdDialogModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';
import { ItemsCostPipe } from './items-cost.pipe';
import { TotalItemsPipe } from './total-items.pipe';
import { ListOfItemsPipe } from './list-of-items.pipe';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/previousOrders', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'previousOrders', component: PreviousOrdersComponent },
  { path:'specificOrderDetails',component:OrderDetailsComponent},
  { path:'**',component: PreviousOrdersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
    DisplayComponent,
    PreviousOrdersComponent,
    ItemsCostPipe,
    TotalItemsPipe,
    ListOfItemsPipe,
    OrderDetailsComponent,
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
    NgxPaginationModule,
    CdkTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    NgFlashMessagesModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  exports: [ RouterModule],
 providers: [SearchService,QueryApi],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
