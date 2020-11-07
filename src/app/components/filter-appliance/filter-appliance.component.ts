import { Component, Input, OnInit } from '@angular/core';
import { ManageapplianceService } from './../../service/manageappliance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-appliance',
  templateUrl: './filter-appliance.component.html',
  styleUrls: ['./filter-appliance.component.css']
})
export class FilterApplianceComponent implements OnInit {

  @Input() userId: string = "";

  filters = {
    filterserialno: '',
    userId: '',
    filterbrand: '',
    filtermodel: '',
    filterstatus: '',
    filterdatebought: ''
  };

  constructor(private manageapplianceService: ManageapplianceService, private router: Router) { }

  ngOnInit(): void {
  }

  filterappliances() {
    const data = {
      userId: "1",
      serialNumber: this.filters.filterserialno,
      brand: this.filters.filterbrand,
      model: this.filters.filtermodel,
      status: this.filters.filterstatus,
      dateBought: this.filters.filterdatebought
    };

    this.manageapplianceService.findByCriteria(data)
      .subscribe(
        response => {
          this.manageapplianceService.changeFilterData(response);
          //this.router.navigate(['/appliance']);
        },
        error => {
          this.manageapplianceService.changeFilterData([]);
        });
  }

  resetFilter() {

    this.manageapplianceService.getAll().subscribe(
      data => {
        this.manageapplianceService.changeFilterData(data);
        this.router.navigate(['/appliance']);
      },
      error => {
        console.log(error);
      }
    );


    //this.manageapplianceService.changeFilterData([]);


    this.filters = {
      filterserialno: '',
      userId: this.userId || "0",
      filterbrand: '',
      filtermodel: '',
      filterstatus: '',
      filterdatebought: ''
    };
  }

}
