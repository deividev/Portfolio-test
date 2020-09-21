import { Component, OnInit} from '@angular/core';
import { MenuItem } from '../../../models/menu-item';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem;

  checked = true;

  constructor(public router: HttpClient) { }

  ngOnInit(): void {

    this.router.get(`${environment.apiUrl}menu-items`).subscribe((Items:MenuItem) => {
      this.menuItems= Items;
      console.log(this.menuItems);
    })
  }
}
