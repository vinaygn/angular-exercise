import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  })

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    expect(component.submitted).toBeFalsy();
    expect(component.textBoxDisabled).toBeFalsy();
    expect(component.showDiv).toBeFalsy();
    expect(component.nationality.length).toEqual(0);
  });

  it(`should have as title 'angular-exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-exercise');
  });

  it('should get nationality ', () => {
    component.ngOnInit();
    expect(component.nationality.length).toEqual(4);
  });

  it('onSubmit should not return undefined', () => {
    spyOn(console, 'log').and.callThrough();
    const expectedValue = { a: 1, b: 2 };
    component.registerForm = { invalid: false, value: expectedValue } as FormGroup;
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith(expectedValue);
  });

  it('onSubmit should return undefined', () => {
    component.registerForm = { invalid: true, value: { a: 1, b: 2 } } as FormGroup;
    const expectedValue = component.onSubmit();
    expect(expectedValue).toBeUndefined();
  });

  it('setCodeValue should update value for input', () => {
    component.ngOnInit();
    const value = 'test';
    const control_name = 'FIRST_NAME';
    component.setCodeValue(value, control_name);
    expect(component.registerForm.get(control_name).value).toBe(value);
  });

  it('maritalStatustoggle should enable SPOUSE_NAME ', () => {
    component.ngOnInit();
    component.maritalStatustoggle(true);

    expect(component.showDiv).toBeTruthy();
    expect(component.registerForm.get('SPOUSE_NAME').enabled).toBeTruthy();
  });

  it('maritalStatustoggle should disable SPOUSE_NAME ', () => {
    component.ngOnInit();
    component.maritalStatustoggle(false);

    expect(component.showDiv).toBeFalsy();
    expect(component.registerForm.get('SPOUSE_NAME').enabled).toBeFalsy();
  });

});
