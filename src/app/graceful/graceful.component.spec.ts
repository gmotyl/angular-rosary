import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GracefulComponent } from './graceful.component';

describe('GracefulComponent', () => {
  let component: GracefulComponent;
  let fixture: ComponentFixture<GracefulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GracefulComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GracefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
