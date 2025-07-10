import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalScience } from './physical-science';

describe('PhysicalScience', () => {
  let component: PhysicalScience;
  let fixture: ComponentFixture<PhysicalScience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalScience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalScience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
