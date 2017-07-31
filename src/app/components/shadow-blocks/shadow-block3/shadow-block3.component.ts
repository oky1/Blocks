import { Component, Input } from '@angular/core';
import { BlockTypeService } from '../../../services/block-type.service';

@Component({
  selector: 'app-shadow-block3',
  template: `
    <div (keyup)='updateFromShadow()' (focusout)='updateShadowBlock()' [class]='class'>
      <pre contenteditable="true" [innerHtml]='block | objReverse | json' ></pre>
    </div>
  `
})
export class ShadowBlock3Component {
 @Input() class: string;
 @Input() block: Object;
 err;
  
 subscribeErr;
 toShadow;
 switchId;

  constructor(public service: BlockTypeService) {
    this.switchId =  this.service.switchId.subscribe((value) => {
      this.switchId = value
    });
    this.toShadow = this.service.toShadow.subscribe((value) => { 
        if(this.class === this.switchId) { 
          this.block = value;
          this.switchId = "";
        } 
    });
    this.subscribeErr = this.service.subscribeErr.subscribe((value) => {
        this.err = this.service.err;
    });
  }

 updateShadowBlock() {
     this.service.updateShadowBlock(this.class);
  }
 
 updateFromShadow() {
    this.service.updateFromShadow(this.class);
   }
}
