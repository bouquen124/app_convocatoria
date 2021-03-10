import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from  '@angular/fire/auth'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit() {}

  
  async logout(): Promise<void> {

    try{
    
      await this.afAuth.signOut();
    
    }
    
    catch(error){
    
      console.log('Error->', error);
    }
    
    
      }
}
