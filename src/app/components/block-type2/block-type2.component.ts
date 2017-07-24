import { Component, Input } from '@angular/core';
import { BlockType2Service } from '../../services/block-type2.service'

@Component({
  selector: 'app-block-type2',
  templateUrl: './block-type2.component.html',
  styleUrls: ['./block-type2.component.css'],
 // providers: [BlockType2Service]
})

export class BlockType2Component {
 @Input() id: string;
 // shadowblockType2;
 // blockType2;
 // boxModel;
 err;
 
 //subscription
 boxModelChange;
 subscribeErr;

  constructor(private service: BlockType2Service) {
    //this.blockType2 = this.service.blockType2
    //this.shadowblockType2 = this.service.blockType2;
    //this.boxModelChange = this.service.boxModelChange.subscribe((value) => { 
    //    this.shadowblockType2 = value;
    //});
    this.subscribeErr = this.service.subscribeErr.subscribe((value) => {
        this.err = this.service.err;
    });
  }

  changeBlock() {
     this.service.changeBlock();
  }
 
 updateFromComponent() {
    this.service.updateFromComponent(this.id);
    // this.blockType2 = this.service.blockType2;
  }

  addCheckbox() {
    this.service.addCheckbox();
  }

  deleteBlock() {
   this.service.deleteBlock(this.id);
  }
}






