import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss'],
})
export class EscolasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('escolas')
  }


  NavToNewSchool() {
    this.router.navigate(['escola', { relativeTo: Router }])
  }


}
