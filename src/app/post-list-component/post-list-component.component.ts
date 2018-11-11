import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  loveits = 0;
  poststatus: string;
  created_at: Date;

  @Input() postTitle: string;
  @Input() postContent: string;
  constructor() { }

  ngOnInit() {
  }

  LoveIt() {
    this.loveits++;
    this.created_at = new  Date();
    if (this.loveits > 0) {
      this.poststatus = 'green';
    } else if (this.loveits < 0) {
      this.poststatus = 'red';
    } else {
      this.poststatus = 'white';
           }
  }

  DontLoveIt() {
    this.loveits--;
    this.created_at = new Date();
    if (this.loveits > 0) {
      this.poststatus = 'green';
    } else if (this.loveits < 0) {
      this.poststatus = 'red';
    } else {
      this.poststatus = 'white';
    }
  }
}
