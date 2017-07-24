import { Component, Input } from '@angular/core';
import { BlockType1Service } from '../../services/block-type1.service'

@Component({
  selector: 'app-block-type1',
  templateUrl: './block-type1.component.html',
  styleUrls: ['./block-type1.component.css'],
})

export class BlockType1Component {
 @Input() id: string;
 shadowblockType1;
 err;
  
 //subscription
 boxModelChange;
 subscribeErr;

  constructor(private service: BlockType1Service) {
    this.subscribeErr = this.service.subscribeErr.subscribe((value) => {
        this.err = this.service.err;
    });
  }

  add() {
    this.service.add()
  }

  changeBlock() {
    this.service.changeBlock();
  }
 
 updateFromComponent() {
    this.service.updateFromComponent(this.id);
  }

 deleteBlock() {
   this.service.deleteBlock(this.id);
  }
}




