import { TestBed } from '@angular/core/testing';

import { NgRutChileService } from './ng-rut-chile.service';

describe('NgRutChileService', () => {
  let service: NgRutChileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRutChileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
