// login.component.ts
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule, AlertModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // router
  router = inject(Router);
  route = inject(ActivatedRoute);

  /// auth.service
  authService = inject(AuthService);

  // init form
  fb = inject(NonNullableFormBuilder);
  username = this.fb.control('');
  password = this.fb.control('');

  fg = this.fb.group({
    username: this.username,
    password: this.password
  });

  // error
  error?: any;

  onLogin() {
    this.authService.login(this.fg.getRawValue()).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.router.navigate([returnUrl]);
      },
      error: (error) => (this.error = error)
    });
  }
}
