import { Component, Input, OnInit } from '@angular/core';
import { BlockType1Service } from '../../../services/block-type1.service'

@Component({
  selector: 'app-shadow-block1',
  // styleUrls: ['./shadow-block1.component.css'],
  template: `
  	<div (keyup)='updateFromComponent()' (focusout)='changeBlock()' [class]='class'>
    	<pre contenteditable="true" [innerHTML]='shadowblockType1 | json'></pre>
   	</div>
  `
})
export class ShadowBlock1Component {
 @Input() class: string;
 shadowblockType1;
 err;
  
 //subscription
 boxModelChange;
 subscribeErr;

  constructor(public service: BlockType1Service) {
    this.shadowblockType1 = this.service.blockType1;
    this.boxModelChange = this.service.boxModelChange.subscribe((value) => { 
        this.shadowblockType1 = value;
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
