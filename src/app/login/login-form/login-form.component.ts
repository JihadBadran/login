import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  sentAuth = false;


  emailAuth: FormGroup;
  secondStepLogin: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {

    this.emailAuth = fb.group({
      email: ['', Validators.email],
      remember: [false]
    });

    this.secondStepLogin = fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      validationCode: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  /**
   * method that check if email is already registered or not
   * return boolean
   */
  validateEmail() {
    if (this.emailAuth.valid) {

      // this line goes in the callback of api auth
      this.nextStep();
    }
  }

  nextStep() {
    this.sentAuth = true;
  }

  backStep() {
    this.sentAuth = false;
  }

  loginHandler() {

  }
}
