import { Component, OnInit } from '@angular/core';
import { AuthedService } from '../../shared/services/authed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public authedService: AuthedService) { }
  public user;
  async ngOnInit() {
    this.user = await this.authedService.loaduser()
    console.log(this.user)
  }

}
