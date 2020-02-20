import { TestBed, async, inject } from '@angular/core/testing';

import { MedicalGuard } from './medical.guard';

describe('MedicalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalGuard]
    });
  });

  it('should ...', inject([MedicalGuard], (guard: MedicalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
