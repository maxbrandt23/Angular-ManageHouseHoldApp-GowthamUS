import { ManageapplianceService } from './../../service/manageappliance.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-new-appliance',
  templateUrl: './add-new-appliance.component.html',
  styleUrls: ['./add-new-appliance.component.css']
})
export class AddNewApplianceComponent implements OnInit {

  @Input() userId: string = "";
  @Input() newSubmit: boolean = false;
  @Input() updateData: any = {};

  appliance = {
    id: '',
    userId: '',
    serialNumber: '',
    productName: '',
    productDesc: '',
    imageId: '',
    brand: '',
    model: '',
    status: '',
    dateBought: ''
  };
  submitted = false;


  selectedFiles: FileList;
  currentFile: File;
  message = '';

  fileInfos: Observable<any>;

  constructor(private manageapplianceService: ManageapplianceService, private router: Router) { }

  ngOnInit(): void {
    this.submitted = this.newSubmit;
  }

  saveAppliance() {
    const data = {
      userId: this.userId || "0",
      serialNumber: this.appliance.serialNumber,
      productName: this.appliance.productName,
      productDesc: this.appliance.productDesc,
      imageId: this.appliance.imageId,
      brand: this.appliance.brand,
      model: this.appliance.model,
      status: this.appliance.status,
      dateBought: this.appliance.dateBought
    };

    this.manageapplianceService.create(data)
      .subscribe(
        response => {
          this.submitted = true;
          this.resetForm(this.submitted);
          this.router.navigate(['/appliance']);
        },
        error => {
          console.log(error);
        });

  }

  updateAppliance() {
    const data = {
      id: this.appliance.id,
      userId: this.appliance.userId || "0",
      serialNumber: this.appliance.serialNumber,
      productName: this.appliance.productName,
      productDesc: this.appliance.productDesc,
      imageId: this.appliance.imageId,
      brand: this.appliance.brand,
      model: this.appliance.model,
      status: this.appliance.status,
      dateBought: this.appliance.dateBought
    };

    this.manageapplianceService.update(data.id, data)
      .subscribe(
        response => {
          this.submitted = true;
          this.resetForm(this.submitted);
          this.router.navigate(['/appliance']);
        },
        error => {
          console.log(error);
        });

  }

  resetForm(submittedStatus) {
    this.appliance = {
      id: '',
      userId: this.userId || "0",
      serialNumber: '',
      productName: '',
      productDesc: '',
      imageId: '',
      brand: '',
      model: '',
      status: '',
      dateBought: ''
    };
    this.submitted = submittedStatus || this.newSubmit;
  }


  ngDoCheck() {
    if (this.updateData && Object.keys(this.updateData).length != 0) {
      this.appliance = {
        id: this.updateData.id,
        userId: this.updateData.userId || "0",
        serialNumber: this.updateData.serialNumber,
        productName: this.updateData.productName,
        productDesc: this.updateData.productDesc,
        imageId: this.updateData.imageId,
        brand: this.updateData.brand,
        model: this.updateData.model,
        status: this.updateData.status,
        dateBought: this.updateData.dateBought
      };
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.manageapplianceService.upload(this.currentFile).subscribe(
      event => {
        console.log(event);
        if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.appliance.imageId = event.body.id;
          // this.fileInfos = this.manageapplianceService.getFiles();
        }
      },
      err => {
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }


}
