import { Component, Input, HostBinding } from '@angular/core';
import { BlockType2Service } from '../../services/block-type2.service'

@Component({
  selector: 'app-block-type2',
  templateUrl: './block-type2.component.html',
  styleUrls: ['./block-type2.component.css'],
 // providers: [BlockType2Service]
})

export class BlockType2Component {
 @Input() id: string ;
 blockType2;
 err;
 
 //subscription
 boxModelChangeFromJson
 subscribeErr;

  constructor(private service: BlockType2Service) {
    this.blockType2 = this.service.blockType2;
    this.boxModelChangeFromJson = this.service.boxModelChangeFromJson.subscribe((value) => {
        this.blockType2 = value;
    });
    this.subscribeErr = this.service.subscribeErr.subscribe((value) => {
        this.err = value;
    });
  }

  changeBlock() {
     this.service.changeBlock();
  }
 
 updateFromComponent() {
    this.service.updateFromComponent(this.id);
  }

  addCheckbox() {
    this.service.addCheckbox();
  }

  deleteBlock() {
   this.service.deleteBlock(this.id);
  }
}






