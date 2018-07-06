import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTestComponent } from './lib-test.component';

describe('LibTestComponent', () => {
  let component: LibTestComponent;
  let fixture: ComponentFixture<LibTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
