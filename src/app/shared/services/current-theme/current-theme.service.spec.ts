import { TestBed } from '@angular/core/testing';

import { CurrentThemeService } from './current-theme.service';

describe('CurrentThemeService', () => {
  let service: CurrentThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
