import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { v1 as uuid} from 'uuid';

export interface Material {
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dros';
  private materialsCollection: AngularFirestoreCollection<Material>;
    materials: Observable<Material[]>;
  constructor(db: AngularFirestore) {
    this.materialsCollection = db.collection<Material>('materials');
    this.materials = this.materialsCollection.valueChanges();
    // this.addMaterial({title: 'First material'});
  }
  addMaterial(item: Material) {
    this.materialsCollection.doc(uuid()).set(item);
  }
}
