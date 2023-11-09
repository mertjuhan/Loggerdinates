import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSidebarComponent } from './custom-sidebar.component';

describe('CustomSidebarComponent', () => {
  let component: CustomSidebarComponent;
  let fixture: ComponentFixture<CustomSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomSidebarComponent]
    });
    fixture = TestBed.createComponent(CustomSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
