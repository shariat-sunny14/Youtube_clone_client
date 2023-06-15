import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public data: any = [];
  public searchResult: any = [];
  public length: any = [];
  public result: any = [];

  constructor(private route: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const url = 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json'
    this.http.get(url).subscribe((res) => {
      this.data = res
      // console.log(this.data)
    })
  }

  searchVideos(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.data.searchProduct(element.value).subscribe((result: string | any[]) => {

        if (result.length > 5) {
          this.result.length = length
        }
        this.searchResult = result;
      })
    }
  }

  hideSearch() {
    this.searchResult = undefined
  }

  submitSearch(val: string) {
    console.warn(val)
    this.route.navigate([`search/${val}`]);
  }

}
