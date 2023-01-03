import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  public show: boolean = false;
  public isTyped = false;

  form = new FormGroup({
    password: new FormControl<string>(''),
  });

  switchShowPassword() {
    this.show = !this.show;
  }

  typed() {
    this.isTyped = this.form.value.password ? true : false;
  }

  submit() {
    console.log(this.form.value);
  }
  ngOnInit(): void {}
}
