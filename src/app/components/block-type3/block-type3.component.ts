import { Component, Input } from '@angular/core';
import { BlockTypeService } from '../../services/block-type.service'

@Component({
  selector: 'app-block-type3',
  templateUrl: './block-type3.component.html',
  styleUrls: ['./block-type3.component.css'],
})

export class BlockType3Component {
 @Input() id: string;
 @Input() block: Object;
 err: string;
 
 //subscription
 subscribeErr;
 toBlock;
 switchId;

  constructor(private service: BlockTypeService) {
    this.switchId =  this.service.switchId.subscribe((value) => {
      this.switchId = value
    });
    this.toBlock = this.service.toBlock.subscribe((value) => {
        if(this.id === this.switchId) {
          this.block = value;
        } this.switchId = "";
    })
    this.subscribeErr = this.service.subscribeErr.subscribe((value) => {
        this.err = this.service.err;
    });
  }

  addType() {
    event.preventDefault();
    this.service.addType(this.block, this.id);
  }
 
  updateFromBlock() {
    this.service.updateFromBlock(this.block, this.id)
  }

  save() {
    this.service.save(this.block, this.id)
  }

  deleteBlock() {
    this.service.deleteBlock(this.id);
  }
}







