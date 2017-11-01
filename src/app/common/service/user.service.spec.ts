import { TestBed, inject } from '@angular/core/testing';

import { User.Service.TsService } from './user.service.ts.service';

describe('User.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User.Service.TsService]
    });
  });

  it('should be created', inject([User.Service.TsService], (service: User.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
