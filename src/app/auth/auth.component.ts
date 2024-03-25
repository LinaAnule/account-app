import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
constructor(private router: Router) {
}
  onClick( event: any){
    if ((<HTMLInputElement>event.target).value=== 'login'){
this.router.navigate(['/auth/login'])
    }
    else {
      this.router.navigate(['/auth/register'])
    }
  }

}
