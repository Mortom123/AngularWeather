import { TestBed } from '@angular/core/testing';

import { DebugMessageService } from './debug-message.service';

describe('DebugMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebugMessageService = TestBed.get(DebugMessageService);
    expect(service).toBeTruthy();
  });
});
