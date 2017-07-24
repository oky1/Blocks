import { Component, Input } from '@angular/core';
import { BlockType3Service } from '../../../services/block-type3.service'

@Component({
  selector: 'app-shadow-block3',
  // styleUrls: ['./shadow-block1.component.css'],
  template: `
  	<div (keyup)='updateFromComponent()' (focusout)='changeBlock()' [class]='class'>
    	<pre contenteditable="true" [innerHTML]='shadowblockType3 | json'></pre>
    </div>
  `
})
export class ShadowBlock3Component {
 @Input() class: string;
 shadowblockType3;
 err;
  
 //subscription
 boxModelChange;
 subscribeErr;

  constructor(public service: BlockType3Service) {
    this.shadowblockType3 = this.service.blockType3;
    this.boxModelChange = this.service.boxModelChange.subscribe((value) => { 
        this.shadowblockType3 = value;
    });
    this.subscribeErr = this.service.subscribeErr.subscribe((value) => {
        this.err = this.service.err;
    });
  }

 changeBlock() {
     this.service.changeBlock();
  }
 
 updateFromComponent() {
    this.service.updateFromComponent(this.class);
   }
}
