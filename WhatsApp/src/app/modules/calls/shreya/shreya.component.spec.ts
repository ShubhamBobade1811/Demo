import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreyaComponent } from './shreya.component';

describe('ShreyaComponent', () => {
  let component: ShreyaComponent;
  let fixture: ComponentFixture<ShreyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShreyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShreyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
