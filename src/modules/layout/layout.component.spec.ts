import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutComponent } from './layout.component';

describe('[Modules][Layout] Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(LayoutComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
