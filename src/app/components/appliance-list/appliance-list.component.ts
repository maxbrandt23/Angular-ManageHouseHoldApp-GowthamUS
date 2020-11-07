import { ManageapplianceService } from './../../service/manageappliance.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appliance-list',
  templateUrl: './appliance-list.component.html',
  styleUrls: ['./appliance-list.component.css']
})
export class ApplianceListComponent implements OnInit {

  listofappliances: any = [];

  editApplianceObj: any = {};

  newSubmit = false;

  constructor(private manageapplianceService: ManageapplianceService, private router: Router) { }

  ngOnInit(): void {
    this.listofappliances = [];

    this.manageapplianceService.currentFilterData.subscribe(
      data => {
        this.listofappliances = data;
      },
      error => {
        console.log(error);
      }
    );
    if (this.listofappliances || this.listofappliances.length == 0) {
      this.refreshAll();
    }

  }

  retrieveAllAppliances() {
    this.listofappliances = [];
    this.manageapplianceService.getAll().subscribe(
      data => {
        this.listofappliances = data;
      },
      error => {
        console.log(error);
      }
    )

  }

  refreshAll() {
    this.retrieveAllAppliances();
  }

  updateAppliance(id) {
    this.manageapplianceService.get(id).subscribe(
      data => {
        this.editApplianceObj = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  deleteAppliance(id) {
    this.manageapplianceService.delete(id)
      .subscribe(
        response => {
          this.router.navigate(['/appliance']);
        },
        error => {
          console.log(error);
        });
  }




}
