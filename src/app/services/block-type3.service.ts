import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BlockType3Service {
 blockType3;
 err;
 id;

 //subscribe
 boxModelChange: Subject<any> = new Subject<any>();
 subscribeErr: Subject<string> = new Subject<string>();

  constructor() { 
   this.blockType3 = {
      type: "blockType3",
      title: {
            key: "TextBox Label",
            value: ""
      },
      description: {
        key: "RadioButton Group Label",
        value: 'rb1',
        options: []
      }
    }
    this.err = '';
   }

  changeBlock() {
      this.boxModelChange.next(this.blockType3);
   }
   
  updateFromComponent(id) {
    let parentEl = document.getElementsByClassName(id)[0];
    const html = parentEl.getElementsByTagName("pre")[0];
    let htmlInner = html.innerHTML;
    this.tryParseJSON(htmlInner);
    console.log(this.blockType3, id);
   }

  addRadioButton() {
    let iterator = this.blockType3.description.options.length;
    iterator++;
    let radioBoxTitle =  `${this.blockType3.title.value} ${iterator} Label`;
    this.blockType3.description.options.push({title: radioBoxTitle, value: `rb${iterator}`});
    this.blockType3.title.value = ''
  }

  tryParseJSON(htmlInner) {
  	   try {
        let o = JSON.parse(htmlInner);
        if (o && typeof o === "object") {
            this.blockType3 = JSON.parse(htmlInner);
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
