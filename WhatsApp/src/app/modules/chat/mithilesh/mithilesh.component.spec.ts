import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MithileshComponent } from './mithilesh.component';

describe('MithileshComponent', () => {
  let component: MithileshComponent;
  let fixture: ComponentFixture<MithileshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MithileshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MithileshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
