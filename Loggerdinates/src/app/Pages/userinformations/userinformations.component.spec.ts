import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinformationsComponent } from './userinformations.component';

describe('UserinformationsComponent', () => {
  let component: UserinformationsComponent;
  let fixture: ComponentFixture<UserinformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserinformationsComponent]
    });
    fixture = TestBed.createComponent(UserinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
