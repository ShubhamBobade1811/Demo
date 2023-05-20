import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayeemComponent } from './nayeem.component';

describe('NayeemComponent', () => {
  let component: NayeemComponent;
  let fixture: ComponentFixture<NayeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NayeemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NayeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
