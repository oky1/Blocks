import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class BlockTypeService {
 changeCheckShadow: boolean = false;
 err: string = '';
 id: string;

 //subscribe
 subscribeErr: Subject<string> = new Subject<string>();
 toShadow: Subject<any> = new Subject<any>();
 toBlock: Subject<any> = new Subject<any>();
 switchId: Subject<any> = new Subject<any>();


  constructor(private db: AngularFireDatabase) {}

  updateFromBlock(data, id) {
    this.switchId.next(id);
    this.toShadow.next(data);
  }
  
  updateShadowBlock(id) {
      this.switchId.next(id);
      this.changeCheckShadow = true;
      this.updateFromShadow(id);
  }

  updateFromShadow(id) {
    this.switchId.next(id);
    let parentEl = document.getElementsByClassName(id)[0];
    const html = parentEl.getElementsByTagName("pre")[0];
    let htmlInner = html.innerHTML;
    this.tryParseJSON(htmlInner, id);
  }

  save(data, id) {
    const toDb = this.db.object(`/blocks/${id}`);
    toDb.set(data);
  }

  deleteBlock(id) {
    let items = this.db.object(`blocks/${id}`);
    items.remove();
  }

  addType(block, id) {
    this.switchId.next(id);
    if(block.description.hasOwnProperty('options')) {
      let iterator = block.description.options.length;
      iterator++;
      let newTitle = `${block.title.value} ${iterator} Label`;
      switch(block.type) {
        case 'blockType2':
        block.description.options.push({title: newTitle, value: false });
        break;
        case 'blockType3':
        block.description.options.push({title: newTitle, value: `rb${iterator}` });
        break;
      }
      block.title.value = '';
    } 
    else {
      let options;
      switch(block.type) {
        case 'blockType2':
        options = {
          'key': "Checkbox Group Label",
          'options': [{title: `${block.title.value} 1 Label`, value: false}]
        };
        break; 
        case 'blockType3':
        options = {
          'key': "RadioButton Group Label",
          'value' : 'rb1',
          'options': [{title: `${block.title.value} 1 Label`, value: 'rb1' }]
        }; 
        break;
      }
      const toDb = this.db.object(`/blocks/${id}/description`)
      toDb.set(options)
    }
  }

  tryParseJSON(htmlInner, id) {
    try {
        let o = JSON.parse(htmlInner);
        if (o && typeof o === "object") {
            let pureData = JSON.parse(htmlInner);
            this.toBlock.next(pureData);
            if(this.changeCheckShadow === true) {
              this.save(pureData, id);
              this.changeCheckShadow = false;
            }
            this.err = '';
            this.subscribeErr.next(this.err);
       }
    }
    catch (e) { 
      this.err = e;  
      this.subscribeErr.next(this.err); 
      }  return false;
  };
}
