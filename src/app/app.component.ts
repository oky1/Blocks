import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})

export class AppComponent {
	selectBlocks;
	//pureBlocks;
	blocks: FirebaseListObservable<any[]>
	constructor(
		private db: AngularFireDatabase,
		private appservice: AppService) {
		this.selectBlocks = ['BlockType1', 'BlockType2', 'BlockType3'];
		this.blocks = db.list('/blocks');
		//this.pureBlocks = [];
	}

	ngOnInit() {
	  //this.blocks.subscribe(item => {
	  //	//console.log(item)
	  //	//item.map(bl => {this.pureBlocks.push(bl)})
	  //	item.map(bl => {this.pureBlocks.push(bl.$key)});
	  //	console.log(this.pureBlocks)
	  //})
	  // this data in firebase
	  //console.log(this.pureBlocks)
	  //this.addBlock('BlockType1', 'block-1');
	  //this.addBlock('BlockType2', 'block-2');
	  //this.addBlock('BlockType3', 'block-3');
	}

	addBlock(block) {
		let id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
		this.appservice.toDb(block, id);
		//this.create(block, id)
	}
}
