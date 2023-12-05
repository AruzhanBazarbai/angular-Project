import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
  form: UntypedFormGroup;
  token: any;
  authSubscription: Subscription | undefined;

    constructor(private fb:UntypedFormBuilder, 
                 private authService: AuthService, 
                private location: Location,
                private _snackBar: MatSnackBar
                 ) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }
  
  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    if (this.token) {
      console.log("user authorized")
    }
  }
  
  login() {
    const val = this.form.value;
    this.authSubscription =  this.authService.login(val.email, val.password).subscribe((data) => {
      this.token = data;
      if (this.token.success) {
        localStorage.setItem("token", this.token.token);
      } else {
        // this._snackBar.open('Authorization error. Try again to login or register if you don\'t have an account', 'Ok', { duration: 3000 });
      }
    }); 
    if (localStorage.getItem("token") && this.token) {
      this._snackBar.open('Succesfully login.', 'Ok', { duration: 3000 });
      this.location.back();
    } else {
      // this._snackBar.open('Authorization error. Try again to login or register if you don\'t have an account', 'Ok', { duration: 3000 });
    }
  }
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
