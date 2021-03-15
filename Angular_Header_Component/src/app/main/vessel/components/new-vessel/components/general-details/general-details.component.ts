import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// select interface
interface Nationality {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss']
})
export class GeneralDetailsComponent implements OnInit {
  // select
  nationalities: Nationality[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];

  // form
  testForm: FormGroup;

  isChecked = true;
  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.initialTestForm();
  }

  ngOnInit(): void {
  }

  private initialTestForm() {
    this.testForm = this._formBuilder.group({
      'test': ['', [Validators.required]],
      'test_one': ['', [Validators.required]],
      'test_two': ['', [Validators.required]],
      'test_three': ['', [Validators.required]],
      'test_four': ['', [Validators.required]],
      'test_five': ['', [Validators.required]],
      'is_checked_cangerous': [''],
      'is_checked_immigration': [true]
    });
  }

  public get formControl() {
    return this.testForm.controls;
  }

  public submit() {
    console.log(this.testForm.value);
  }
}
