import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paises: any[] = []
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://restcountries.eu/rest/v2/all').subscribe((pais: any) => {
      console.log(pais);
      this.paises = pais;
    });
  }

  ngOnInit() {
  }

}
