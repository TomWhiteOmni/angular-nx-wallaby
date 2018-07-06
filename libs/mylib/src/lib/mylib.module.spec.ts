import { async, TestBed } from '@angular/core/testing';
import { MylibModule } from './mylib.module';

describe('MylibModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MylibModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(MylibModule).toBeDefined();
  });
});
