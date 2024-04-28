import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSectionComponent } from './latest-section.component';

describe('LatestSectionComponent', () => {
  let component: LatestSectionComponent;
  let fixture: ComponentFixture<LatestSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
