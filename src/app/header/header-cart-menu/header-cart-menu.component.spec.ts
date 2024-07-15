import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCartMenuComponent } from './header-cart-menu.component';

describe('HeaderCartMenuComponent', () => {
  let component: HeaderCartMenuComponent;
  let fixture: ComponentFixture<HeaderCartMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCartMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
