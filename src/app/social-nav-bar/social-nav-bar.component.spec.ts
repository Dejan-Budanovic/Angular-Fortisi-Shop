import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNavBarComponent } from './social-nav-bar.component';

describe('SocialNavBarComponent', () => {
  let component: SocialNavBarComponent;
  let fixture: ComponentFixture<SocialNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
