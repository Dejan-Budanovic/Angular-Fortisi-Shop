import { Component } from '@angular/core';
import firebase  from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCOFhDjzGxrgZ2nY1lDZhnplBB8DrOZn7I",
      authDomain: "angular-2c936.firebaseapp.com"
    });
  }

  title = 'Angular-FortisiShop';
}
