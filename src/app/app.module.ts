import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplianceListComponent } from './components/appliance-list/appliance-list.component';
import { ApplianceDetailComponent } from './components/appliance-detail/appliance-detail.component';
import { AddNewApplianceComponent } from './components/add-new-appliance/add-new-appliance.component';
import { FilterApplianceComponent } from './components/filter-appliance/filter-appliance.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplianceListComponent,
    ApplianceDetailComponent,
    AddNewApplianceComponent,
    FilterApplianceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
