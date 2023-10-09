import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: "./registration.component.html"
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  token: any;
  authSubscription: Subscription | undefined;

    constructor(private fb:FormBuilder, 
                 private authService: AuthService, 
                private location: Location,
                private _snackBar: MatSnackBar
                 ) {

        this.form = this.fb.group({
            name: ['',Validators.required],
            email: ['',Validators.required],
            password: ['',Validators.required],
            address: ['',Validators.required]
        });
    }
  
  ngOnInit(): void {
  }
  
  register() {
    const val = this.form.value;
    this.authSubscription = this.authService.register(val.email, val.name, val.address, val.password).subscribe((data) => {
      this.token = data;
      if (this.token.success) {
        localStorage.setItem("token", this.token.token);
      } else {
        // this._snackBar.open('Registration error. Try again to register.', 'Ok', { duration: 3000 });
      }
    }); 
    if (localStorage.getItem("token") && this.token) {
      this._snackBar.open('Succesfully register.', 'Ok', { duration: 3000 });
      this.location.back();
    } else {
      // this._snackBar.open('Registration error. Try again to register', 'Ok', { duration: 3000 });
    }
  }
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }


}
