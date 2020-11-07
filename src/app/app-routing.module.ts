import { AddNewApplianceComponent } from './components/add-new-appliance/add-new-appliance.component';
import { ApplianceDetailComponent } from './components/appliance-detail/appliance-detail.component';
import { ApplianceListComponent } from './components/appliance-list/appliance-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'appliance', pathMatch: 'full' },
  { path: 'appliance', component: ApplianceListComponent },
  { path: 'appliance/:id', component: ApplianceDetailComponent },
  { path: 'appliance/new', component: AddNewApplianceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
