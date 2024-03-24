import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { AccountComponent } from './account/account.component';

import path from "path";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-account-app';
  protected readonly path = path;

  constructor(private router: Router) {

  }

  onSearchInputChange(event: any) {
    const searchQuery = ((event.target as HTMLInputElement).value);
    this.router.navigate( ['accountName', searchQuery]);
  }
}
