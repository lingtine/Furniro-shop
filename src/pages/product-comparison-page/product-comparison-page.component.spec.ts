import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparisonPageComponent } from './product-comparison-page.component';

describe('ProductComparisonPageComponent', () => {
  let component: ProductComparisonPageComponent;
  let fixture: ComponentFixture<ProductComparisonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComparisonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductComparisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
