import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-videos-playing',
  templateUrl: './videos-playing.component.html',
  styleUrls: ['./videos-playing.component.scss']
})
export class VideosPlayingComponent implements OnInit {

  public data: any = []

  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const url = 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json'
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
  }

}
