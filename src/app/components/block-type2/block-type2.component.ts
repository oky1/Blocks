import { Component, Input } from '@angular/core';
import { BlockTypeService } from '../../services/block-type.service'

@Component({
  selector: 'app-block-type2',
  templateUrl: './block-type2.component.html',
  styleUrls: ['./block-type2.component.css'],
})

export class BlockType2Component {
 @Input() id: string ;
 @Input() block: Object;
 err;
 
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

  addType(event) {
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





