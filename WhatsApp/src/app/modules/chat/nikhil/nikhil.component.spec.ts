import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikhilComponent } from './nikhil.component';

describe('NikhilComponent', () => {
  let component: NikhilComponent;
  let fixture: ComponentFixture<NikhilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikhilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikhilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
