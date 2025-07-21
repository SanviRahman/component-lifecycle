import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demoss } from './demoss';

describe('Demoss', () => {
  let component: Demoss;
  let fixture: ComponentFixture<Demoss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demoss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demoss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
