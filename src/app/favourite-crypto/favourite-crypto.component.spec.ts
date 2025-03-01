import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCryptoComponent } from './favourite-crypto.component';

describe('FavouriteCryptoComponent', () => {
  let component: FavouriteCryptoComponent;
  let fixture: ComponentFixture<FavouriteCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouriteCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
