import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { FeedManagerRoutingModule }     from './app-routing.module';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FiltersComponent } from './filters/filters.component';
import { FeedNewComponent } from './feed-new/feed-new.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { HistoryComponent } from './history/history.component';
import { LoadingParametersComponent } from './loading-parameters/loading-parameters.component';
import { RewritingParametersComponent } from './rewriting-parameters/rewriting-parameters.component';
import { AdvancedParametersComponent } from './advanced-parameters/advanced-parameters.component';
import { LoadingResultsComponent } from './loading-results/loading-results.component';
import { FeedHistoryComponent } from './feed-history/feed-history.component';
import { ProductsComponent } from './products/products.component';
import { FeedEditComponent } from './feed-edit/feed-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedsComponent,
    FiltersComponent,
    FeedNewComponent,
    MonitoringComponent,
    HistoryComponent,
    LoadingParametersComponent,
    RewritingParametersComponent,
    AdvancedParametersComponent,
    LoadingResultsComponent,
    FeedHistoryComponent,
    ProductsComponent,
    FeedEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FeedManagerRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
