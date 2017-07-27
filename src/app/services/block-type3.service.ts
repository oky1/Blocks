import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { blockType3 } from './all-blocks-model';

@Injectable()
export class BlockType3Service {
 blockType3;
 err;
 id;

 //subscribe
 boxModelChangeFromJson: Subject<any> = new Subject<any>();
 boxModelChange: Subject<any> = new Subject<any>();
 subscribeErr: Subject<string> = new Subject<string>();

 //firebase
 blocks: FirebaseObjectObservable<any[]>;

  constructor(private db: AngularFireDatabase) { 
   this.blockType3 = blockType3
    this.err = '';
   }

  changeBlock() {
      this.boxModelChange.next(this.blockType3);
   }
   
  updateFromComponent(id) {
    let parentEl = document.getElementsByClassName(id)[0];
    const html = parentEl.getElementsByTagName("pre")[0];
    let htmlInner = html.innerHTML;
    this.tryParseJSON(htmlInner, id);
    
   }

  addRadioButton() {
    let iterator = this.blockType3.description.options.length;
    iterator++;
    let radioBoxTitle =  `${this.blockType3.title.value} ${iterator} Label`;
    this.blockType3.description.options.push({title: radioBoxTitle, value: `rb${iterator}`});
    this.blockType3.title.value = ''
  }

  tryParseJSON(htmlInner, id) {
  	   try {
        let o = JSON.parse(htmlInner);
        if (o && typeof o === "object") {
           const toDb = this.db.object(`/blocks/${id}`);
           toDb.set(JSON.parse(htmlInner));
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
