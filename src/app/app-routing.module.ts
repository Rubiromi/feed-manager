import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedNewComponent } from './feed-new/feed-new.component';
import { FeedEditComponent } from './feed-edit/feed-edit.component';
import { LoginComponent } from './login/login.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { HistoryComponent } from './history/history.component';
import { FeedHistoryComponent } from './feed-history/feed-history.component';
import { LoadingParametersComponent } from './loading-parameters/loading-parameters.component';
import { RewritingParametersComponent } from './rewriting-parameters/rewriting-parameters.component';
import { AdvancedParametersComponent } from './advanced-parameters/advanced-parameters.component';
import { FiltersComponent } from './filters/filters.component';
import { LoadingResultsComponent } from './loading-results/loading-results.component';
import { ProductsComponent } from './products/products.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '', canActivate: [AuthGuard], children: [
  { path: '', children: [
    { path: '', redirectTo: '/feeds', pathMatch: 'full' },
    { path: 'feeds', component: FeedsComponent },
    { path: 'feeds/:id', component: FeedsComponent },
    { path: 'feeds/:id/new', component: FeedNewComponent },
    { path: 'feeds/:id/edit', component: FeedEditComponent },
    { path: 'monitoring', component: MonitoringComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'feed-history', component: FeedHistoryComponent },
    { path: 'loading-parameters', component: LoadingParametersComponent },
    { path: 'rewriting-parameters', component: RewritingParametersComponent },
    { path: 'advanced-parameters', component: AdvancedParametersComponent },
    { path: 'filters', component: FiltersComponent },
    { path: 'loading-results', component: LoadingResultsComponent },
    { path: 'products', component: ProductsComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeedManegerRoutingModule { }