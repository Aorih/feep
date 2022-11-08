import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderMaskComponent } from './loader-mask.component';

describe('LoaderMaskComponent', () => {
  let component: LoaderMaskComponent;
  let fixture: ComponentFixture<LoaderMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
