import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturePortfolioComponent } from './miniature-portfolio.component';

describe('MiniaturePortfolioComponent', () => {
  let component: MiniaturePortfolioComponent;
  let fixture: ComponentFixture<MiniaturePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniaturePortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniaturePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
