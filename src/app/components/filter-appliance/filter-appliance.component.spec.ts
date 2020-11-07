import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterApplianceComponent } from './filter-appliance.component';

describe('FilterApplianceComponent', () => {
  let component: FilterApplianceComponent;
  let fixture: ComponentFixture<FilterApplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterApplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
