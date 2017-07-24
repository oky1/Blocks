import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BlockType2Service {
 blockType2;
 err;
 id;

 //subscribe
 boxModelChange: Subject<any> = new Subject<any>();
 subscribeErr: Subject<string> = new Subject<string>();

  constructor() { 
   this.blockType2 = {
      type: "blockType2",
      title: {
            key: "TextBox Label",
            value: ""
      },
      description: {
        key: "Checkbox Group Label",
        options: []
      }
    }
    this.err = '';
   }

  changeBlock() {
      this.boxModelChange.next(this.blockType2);
   }
   
  updateFromComponent(id) {
    let parentEl = document.getElementsByClassName(id)[0];
    const html = parentEl.getElementsByTagName("pre")[0];
    let htmlInner = html.innerHTML;
    this.tryParseJSON(htmlInner);
    console.log(this.blockType2, id);
   }

  addCheckbox() {
    let iterator = this.blockType2.description.options.length;
    iterator++;
    let newCheckBoxTitle =  `${this.blockType2.title.value} ${iterator} Label`;
    this.blockType2.description.options.push({title: newCheckBoxTitle, value: false});
    this.blockType2.title.value = ''
  }

  tryParseJSON(htmlInner) {
  	   try {
        let o = JSON.parse(htmlInner);
        if (o && typeof o === "object") {
            this.blockType2 = JSON.parse(htmlInner);
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
    document.getElementById(id).remove();
    document.getElementsByClassName(id)[0].remove()
  }
}
