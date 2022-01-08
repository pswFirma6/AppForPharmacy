import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOfferComponent } from './pharmacy-offer.component';

describe('PharmacyOfferComponent', () => {
  let component: PharmacyOfferComponent;
  let fixture: ComponentFixture<PharmacyOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
