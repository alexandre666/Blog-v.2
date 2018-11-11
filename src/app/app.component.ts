import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Voici un post pour parler de la pluie et du beau temps!',
      loveIts: 6,
      created_At: Date
    },
    {
      title: 'Mon second post',
      content: 'je ne suis pas un héros!',
      loveIts: -5,
      created_At: Date
    },
    {
      title: 'Encore un post',
      content: 'tu me colles à la peaux!',
      loveIts: 2,
      created_At: Date
    }
  ];

}
