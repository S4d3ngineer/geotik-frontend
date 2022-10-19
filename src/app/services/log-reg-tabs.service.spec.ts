import { TestBed } from '@angular/core/testing';

import { LogRegTabsService } from './log-reg-tabs.service';

describe('LogRegTabsService', () => {
  let service: LogRegTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogRegTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
