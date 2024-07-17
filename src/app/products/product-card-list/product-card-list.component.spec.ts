import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutComponent } from './product-card-list.component';

describe('CardLayoutComponent', () => {
  let component: CardLayoutComponent;
  let fixture: ComponentFixture<CardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
