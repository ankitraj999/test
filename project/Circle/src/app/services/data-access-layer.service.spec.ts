import { TestBed } from '@angular/core/testing';

import { DataAccessLayerService } from './data-access-layer.service';

describe('DataAccessLayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAccessLayerService = TestBed.get(DataAccessLayerService);
    expect(service).toBeTruthy();
  });
});
