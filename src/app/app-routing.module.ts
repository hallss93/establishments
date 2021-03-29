import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryDetailsComponent } from './components/delivery-details/delivery-details.component';
import { ViewDetailsComponent } from './components/delivery-details/view-details/view-details.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { ViewListComponent } from './components/delivery-list/view-list/view-list.component';

const routes: Routes = [
  {
    path: 'delivery', component: DeliveryListComponent,
    children: [{ path: '', component: ViewListComponent }]
  },
  { path : '', redirectTo:'/delivery', pathMatch : 'full'},
  {
    path: 'deliverydetails', component: DeliveryDetailsComponent,
    children: [
      { path: 'detalhes/:id',
       component: ViewDetailsComponent
      }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
