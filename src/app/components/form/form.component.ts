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
    const onlyNumberRegExp: RegExp = /^[0-9]+$/;
    const onlyLetterRegExp: RegExp = /^[a-z]+$/i;
    const onlySymbolRegExp: RegExp =
      /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/i;
    const LetterNumberRegExp: RegExp = /^[A-Z0-9]*$/i;
    const LetterSymbolRegExp: RegExp =
      /^[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/i;
    const NumberSymbolRegExp: RegExp =
      /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    const NumberLetterSymbolRegExp: RegExp =
      /^[A-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/i;

    this.isTyped = this.form.value.password ? true : false;
    this.isCheckClicked = false;
    if (!this.form.value.password) {
      this.strength = '';
      this.isValidPassword = false;
    } else if (this.form.value.password.length < 8) {
      this.strength = 'short';
      this.isValidPassword = false;
    } else if (
      onlyNumberRegExp.test(this.form.value.password) ||
      onlyLetterRegExp.test(this.form.value.password) ||
      onlySymbolRegExp.test(this.form.value.password)
    ) {
      this.strength = 'easy';
      this.isValidPassword = false;
    } else if (
      LetterNumberRegExp.test(this.form.value.password) ||
      LetterSymbolRegExp.test(this.form.value.password) ||
      NumberSymbolRegExp.test(this.form.value.password)
    ) {
      this.isValidPassword = false;
      this.strength = 'medium';
    } else if (NumberLetterSymbolRegExp.test(this.form.value.password)) {
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
