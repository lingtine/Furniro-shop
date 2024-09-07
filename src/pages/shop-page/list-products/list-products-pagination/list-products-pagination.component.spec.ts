import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsPaginationComponent } from './list-products-pagination.component';

describe('ListProductsPaginationComponent', () => {
  let component: ListProductsPaginationComponent;
  let fixture: ComponentFixture<ListProductsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductsPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
