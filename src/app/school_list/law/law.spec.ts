import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Law } from './law';

describe('Law', () => {
  let component: Law;
  let fixture: ComponentFixture<Law>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Law]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Law);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
