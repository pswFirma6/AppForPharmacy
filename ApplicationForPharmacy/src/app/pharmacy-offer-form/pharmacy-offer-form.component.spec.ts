import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOfferFormComponent } from './pharmacy-offer-form.component';

describe('PharmacyOfferFormComponent', () => {
  let component: PharmacyOfferFormComponent;
  let fixture: ComponentFixture<PharmacyOfferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyOfferFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
