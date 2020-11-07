import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const baseUrl = 'https://codeassignment.gowtham.com';
const applianceUrl = baseUrl + "/appliance";
const fileUrl = baseUrl + "/file";

@Injectable({
  providedIn: 'root'
})
export class ManageapplianceService {

  appliance = {
    id: '',
    userId: '',
    serialNumber: '',
    productName: '',
    productDesc: '',
    brand: '',
    model: '',
    status: '',
    dateBought: ''
  };

  private dataSource = new BehaviorSubject(this.appliance);

  currentFilterData = this.dataSource.asObservable();

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get(applianceUrl);
  }

  get(id) {
    return this.http.get(`${applianceUrl}/${id}`);
  }

  create(data) {
    return this.http.post(`${applianceUrl}/new`, data);
  }

  update(id, data) {
    return this.http.put(`${applianceUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${applianceUrl}/${id}`);
  }


  findByCriteria(data) {
    return this.http.post(`${applianceUrl}/filter`, data);
  }

  search(text) {

    const data = {
      userId: "1",
      serialNumber: text,
      brand: text,
      model: text
    };

    return this.http.post(`${applianceUrl}/search`, data);
  }

  changeFilterData(data: any) {
    this.dataSource.next(data);
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${fileUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  downloadFile(id): Observable<any> {
    return this.http.get(`${fileUrl}/download/${id}`);
  }

}
