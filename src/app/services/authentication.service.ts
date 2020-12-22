import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token:string;

  constructor(private router : Router) { }

  registerUser(email:string, password:string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          console.log("User registration successful"),
          this.router.navigate(['/login'])
        }
      )
      .catch( 
        (greska) => console.log(greska)
      )
  }

  loginUser(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      (response) => {
        this.router.navigate(['/shop'])
        firebase.auth().currentUser.getIdToken()
        .then(
          (token:string) => this.token = token
        )
        console.log("User login successful")
      }
    )
    .catch( 
      (greska) => console.log(greska)
    )
  }
  
  logOut(){
    firebase.auth().signOut()
    .then(
      (response) => this.router.navigate(['/login'])
    )
    
  }

  registeredUser(){
    return this.token != null;
  }

}
