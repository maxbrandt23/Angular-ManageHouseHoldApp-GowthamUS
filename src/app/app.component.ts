import { Component } from '@angular/core';
import { ManageapplianceService } from './service/manageappliance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manage HouseHold Application';
  userId = 1;
  newSubmit = false;
  searchtext = "";

  constructor(private manageapplianceService: ManageapplianceService) { }

  ngOnInit() {

  }

  search() {
    this.manageapplianceService.search(this.searchtext).subscribe(
      data => {
        this.manageapplianceService.changeFilterData(data);
      },
      error => {
        console.log(error);
      }
    );
    this.searchtext = "";
  }

}
