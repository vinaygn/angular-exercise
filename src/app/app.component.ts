import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-exercise';
  registerForm: FormGroup;
  submitted = false;
  textBoxDisabled = false;
  showDiv: boolean = false;
  nationality = [];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      TITLE_CODE: ['', Validators.required],
      FIRST_NAME: ['', Validators.required],
      MOBILE_NUMBER: ['', [Validators.required, Validators.minLength(10)]],
      NATIONALITY: ['', Validators.required],
      ADDRESS: ['', Validators.required],
      BIRTH_DATE: ['', Validators.required],
      LANGUAGES: ['english'],
      ADDRESS_STAY_DURATION: ['', Validators.required],
      MARTITAL_STATUS: ['', [Validators.required]],
      SPOUSE_NAME: ['', Validators.required]
    });
    this.nationality = this.getNationality();

  }
  getNationality() {
    return [
      { 'id': '1', 'countryname': 'America' },
      { 'id': '2', 'countryname': 'India' },
      { 'id': '3', 'countryname': 'Canada' },
      { 'id': '4', 'countryname': 'Astralia' }

    ];
  }

  setCodeValue(value: string, control_name) {
    this.registerForm.controls[control_name].setValue(value);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  // Form Submit 
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    alert('Please see the console, form result.');
    // display form values on success
    console.log(this.registerForm.value);
  }
  maritalStatustoggle(row: boolean) {
    this.showDiv = row;
    if (row == false) {
      this.registerForm.get('SPOUSE_NAME').disable();
    } else {
      this.registerForm.get('SPOUSE_NAME').enable();

    }

  }

}
