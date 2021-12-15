import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UserDataService } from 'src/app/shared/services/user-data.service';
import { isNotTemporalDomain } from 'src/app/shared/validators/email.validator';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  userForm: FormGroup;
  user: User | null = null;
  state: 'loading' | 'loaded' | 'error' = 'loading';
  stateUpdate: 'loading' | 'loaded' | 'error' = 'loaded';

  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', [Validators.required]],
      sex: [''],
      phone: [''],
      email: ['', [Validators.required, Validators.email, isNotTemporalDomain]],
    });

    this.getUser();
  }

  submitForm(): void {
    this.user = this.userForm.value;
    this.updateUser();
  }

  resetForm(): void {
    this.userForm.reset();
  }

  getUser(): void {
    this.state = 'loading';
    this.userDataService.getUser().subscribe(
      (user: User) => {
        this.user = user;
        this.userForm.patchValue({ ...this.user });
        this.state = 'loaded';
      },
      (error) => {
        this.state = 'error';
      }
    );
  }

  updateUser(): void {
    this.stateUpdate = 'loading';
    this.userForm.disable();
    this.userDataService.updateUser(this.user).subscribe(
      () => {
        this.stateUpdate = 'loaded';
        this.userForm.enable();
      },
      (error) => {
        this.stateUpdate = 'error';
        this.userForm.enable();
      }
    );
  }
}
