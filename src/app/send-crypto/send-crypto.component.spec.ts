import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCryptoComponent } from './send-crypto.component';

describe('SendCryptoComponent', () => {
  let component: SendCryptoComponent;
  let fixture: ComponentFixture<SendCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
