import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class BlockType1Service {
 blockType1;
 err;
 id;

 //subscribe
 boxModelChange: Subject<any> = new Subject<any>();
 subscribeErr: Subject<string> = new Subject<string>();

  constructor(private db: AngularFireDatabase) { 
   this.blockType1 = {
      type: "blockType1",
      title: {
            key: "TextBox Label",
            value: ""
      },
      description: {
        key: "TextArea Label",
        value: ""
      }
    }
    this.err = '';
  }

  //fake
  add() {
    this.blockType1.title.value = '';
    this.blockType1.description.value = '';
  }

  changeBlock() {
      this.boxModelChange.next(this.blockType1);
   }
   
  updateFromComponent(id) {
    let parentEl = document.getElementsByClassName(id)[0];
    const html = parentEl.getElementsByTagName("pre")[0];
    let htmlInner = html.innerHTML;
    this.tryParseJSON(htmlInner);
    console.log(this.blockType1, id);
   }

  tryParseJSON(htmlInner) {
  	   try {
        let o = JSON.parse(htmlInner);
        if (o && typeof o === "object") {
            this.blockType1 = JSON.parse(htmlInner);
            this.err = '';
            this.subscribeErr.next(this.err);
       }
    }
    catch (e) { 
      this.err = e;  
      this.subscribeErr.next(this.err); 
      }  return false;
   };

  deleteBlock(id) {
    let items = this.db.object(`blocks/${id}`);
    items.remove();
  }
}
