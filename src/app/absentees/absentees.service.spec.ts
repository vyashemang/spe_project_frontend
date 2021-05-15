import { TestBed } from '@angular/core/testing';

import { AbsenteesService } from './absentees.service';

describe('AbsenteesService', () => {
  let service: AbsenteesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsenteesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
