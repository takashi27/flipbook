import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  public increase = firebase.default.firestore.FieldValue.increment(1);

  constructor(private afs: AngularFirestore) { 
    
  }

  public enviarVisita(){
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    let format =hoy.toDateString();
    
    this.afs.collection('visitas').doc(format).get().subscribe(resp=>{
      if(resp.exists){
        this.afs.collection('visitas').doc(format).update({visitas:this.increase});
      }else{
        this.afs.collection('visitas').doc(format).set({visitas:this.increase});
      }
    });
    
    // if(){

    // }
    // else{
      
    // }
  }

  
}
