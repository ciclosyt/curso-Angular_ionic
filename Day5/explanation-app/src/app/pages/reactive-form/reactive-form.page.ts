import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNotTemporalEmailValidator } from '../../utils/validators';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

  public form: FormGroup;

  public user: User = {} as User;

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService) {

  }

  public ngOnInit(): void {

    // this.basicFormInitialization();

    this.complexFormInitialization();
  }

  private basicFormInitialization(): void {

    this.form = this.formBuilder.group({
      name: '',
      birthDate: '',
      sex: '',
      phone: '',
      email: ''
    });

    const user = this.userService.getStaticUser();

    this.form.patchValue(user);
  }

  private complexFormInitialization(): void {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', Validators.required],
      sex: '',
      phone: '',
      email: ['', [Validators.required, Validators.email, 
        isNotTemporalEmailValidator]]
    });

    this.userService.getRemoteUser().subscribe((user: User) => {

      this.form.patchValue(user as { [s: string]: any });
    });
  }

  public submitForm(): void {

    this.user = this.form.value;
  }
}
