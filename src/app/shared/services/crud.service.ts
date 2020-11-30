import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  read_Car() {
    return this.firestore.collection('cars').snapshotChanges();
  }

  update_Car(recordID,record){
    this.firestore.doc('cars/' + recordID).update(record);
  }

  delete_Car(record_id) {
    this.firestore.doc('cars/' + record_id).delete();
  }
}
