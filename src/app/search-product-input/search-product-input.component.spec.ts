import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductInputComponent } from './search-product-input.component';

describe('SearchProductInputComponent', () => {
  let component: SearchProductInputComponent;
  let fixture: ComponentFixture<SearchProductInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProductInputComponent]
    });
    fixture = TestBed.createComponent(SearchProductInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
