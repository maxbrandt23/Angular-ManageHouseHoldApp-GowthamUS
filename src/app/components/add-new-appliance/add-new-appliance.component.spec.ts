import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewApplianceComponent } from './add-new-appliance.component';

describe('AddNewApplianceComponent', () => {
  let component: AddNewApplianceComponent;
  let fixture: ComponentFixture<AddNewApplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewApplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
