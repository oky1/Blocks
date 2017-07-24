import { Component, Input } from '@angular/core';
import { BlockType3Service } from '../../services/block-type3.service'

@Component({
  selector: 'app-block-type3',
  templateUrl: './block-type3.component.html',
  styleUrls: ['./block-type3.component.css'],
  //providers: [BlockType3Service]
})

export class BlockType3Component {
 @Input() id: string;
 shadowblockType3;
 blockType3;
 boxModel;
 err;
 
 //subscription
 boxModelChange;
 subscribeErr;

  constructor(private service: BlockType3Service) {
    this.blockType3 = this.service.blockType3
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
    this.service.updateFromComponent(this.id);
    this.blockType3 = this.service.blockType3;
  }

  addRadioButton() {
    this.service.addRadioButton();
  }

  deleteBlock() {
   this.service.deleteBlock(this.id);
  }
  

}
