import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
interface Account {
  id: number;
  name: string;
  balance: number
  imgUrl?: string;
}
@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent {
  accounts: Account[] = [{
    id: 1,
    name: 'Savings account',
    balance: 100,
    imgUrl: 'https://qph.cf2.quoracdn.net/main-qimg-e40e411639bc361d8f4437eb0ad901f7.webp'
  },
    {
      id: 2,
      name: 'Checking account',
      balance: 200,
      imgUrl:'https://static.vecteezy.com/system/resources/previews/021/314/124/original/bank-account-icon-design-free-vector.jpg'
    }]

  accountsToShow: Account[] = this.accounts;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      const searchQuery = (data.get('searchQuery')|| '').toLowerCase()
      console.log(searchQuery);
      this.accountsToShow= this.accounts.filter(account => {return account.name.toLowerCase().startsWith(searchQuery)});
    });
  }
}
