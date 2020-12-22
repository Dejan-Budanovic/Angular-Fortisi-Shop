import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroArticleComponent } from './intro-article.component';

describe('IntroArticleComponent', () => {
  let component: IntroArticleComponent;
  let fixture: ComponentFixture<IntroArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
