import { Component, Input } from '@angular/core';
import { BlockType2Service } from '../../../services/block-type2.service'

@Component({
  selector: 'app-shadow-block2',
  // styleUrls: ['./shadow-block1.component.css'],
  template: `
  	<div (keyup)='updateFromComponent()' (focusout)='changeBlock()' [class]='class'>
    	<pre contenteditable="true" [innerHTML]='shadowblockType2 | json'></pre>
    </div>
  `
})
export class ShadowBlock2Component {
 @Input() class: string;
 shadowblockType2;
 err;
  
 //subscription
 boxModelChange;
 subscribeErr;

  constructor(public service: BlockType2Service) {
    this.shadowblockType2 = this.service.blockType2;
    this.boxModelChange = this.service.boxModelChange.subscribe((value) => { 
        this.shadowblockType2 = value;
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
