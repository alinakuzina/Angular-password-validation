import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public show: boolean = false;
  public isTyped: boolean = false;
  public strength: string = '';
  public isValidPassword: boolean = false;
  public isCheckClicked: boolean = false;

  form = new FormGroup({
    password: new FormControl<string>(''),
  });

  switchShowPassword() {
    this.show = !this.show;
  }

  validatePassword() {
    this.isTyped = this.form.value.password ? true : false;
    this.isCheckClicked = false;
    if (!this.form.value.password) {
      this.strength = '';
      this.isValidPassword = false;
    } else if (this.form.value.password.length < 8) {
      this.strength = 'short';
      this.isValidPassword = false;
    } else if (
      /^[0-9]+$/.test(this.form.value.password) ||
      /^[a-z]+$/i.test(this.form.value.password) ||
      /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/i.test(this.form.value.password)
    ) {
      this.strength = 'easy';
      this.isValidPassword = false;
    } else if (
      /^[A-Z0-9]*$/i.test(this.form.value.password) ||
      /^[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/i.test(
        this.form.value.password
      ) ||
      /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(
        this.form.value.password
      )
    ) {
      this.isValidPassword = false;
      this.strength = 'medium';
    } else if (
      /^[A-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/i.test(
        this.form.value.password
      )
    ) {
      this.isValidPassword = true;
      this.strength = 'strong';
    }
  }

  submit() {
    this.isCheckClicked = true;
  }

  newCheck() {
    this.isTyped = this.form.value.password ? true : false;
    this.isCheckClicked = false;
    this.strength = '';
    this.isValidPassword = false;
    this.form.reset();
  }
  ngOnInit(): void {}
}
