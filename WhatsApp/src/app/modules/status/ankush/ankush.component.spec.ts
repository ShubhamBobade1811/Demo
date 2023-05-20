import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkushComponent } from './ankush.component';

describe('AnkushComponent', () => {
  let component: AnkushComponent;
  let fixture: ComponentFixture<AnkushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnkushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
