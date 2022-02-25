import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>, component: AppComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatCheckboxModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Actions App'`, () => {
    expect(component.title).toEqual('Actions App');
  });

  it('should render three toDoItems', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.toDoItems.length).toEqual(3);
  });
});
