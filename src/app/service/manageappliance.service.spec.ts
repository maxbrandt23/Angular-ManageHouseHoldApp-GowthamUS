import { TestBed } from '@angular/core/testing';

import { ManageapplianceService } from './manageappliance.service';

describe('ManageapplianceService', () => {
  let service: ManageapplianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageapplianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
