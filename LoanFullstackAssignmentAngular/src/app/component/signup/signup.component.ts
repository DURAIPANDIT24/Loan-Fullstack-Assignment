import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MustMatch } from './MustMatch';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;

    constructor(private toastr: ToastrService,private loanService: LoanService,private formBuilder: FormBuilder,private router:Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            accno: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
          validator: MustMatch('password', 'confirmPassword')
      });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        this.loanService.saveCustomer(this.registerForm.value).subscribe();
        this.router.navigate(['login']);
        this.toastr.success('Register Successfull');

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
        this.toastr.success('Reset Successfull');

    }
    gotologin(){
      this.router.navigate(['login']);
    }
}
