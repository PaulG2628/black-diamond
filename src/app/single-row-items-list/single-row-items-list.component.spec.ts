import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRowItemsListComponent } from './single-row-items-list.component';

describe('SingleRowItemsListComponent', () => {
  let component: SingleRowItemsListComponent;
  let fixture: ComponentFixture<SingleRowItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRowItemsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleRowItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
