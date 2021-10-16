import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosaryComponent } from './rosary.component';

describe('RosaryComponent', () => {
  let component: RosaryComponent;
  let fixture: ComponentFixture<RosaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
