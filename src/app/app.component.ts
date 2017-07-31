import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})

export class AppComponent implements OnInit{
	selectBlocks;
	msg: string = '';
	blocks: FirebaseListObservable<any[]>
	constructor(
		private db: AngularFireDatabase,
		private dragula: DragulaService,
		private appservice: AppService) {
		this.selectBlocks = ['BlockType1', 'BlockType2', 'BlockType3'];
		this.blocks = db.list('/blocks');
		this.msg = '';
	}

	ngOnInit() {
	    this.dragula.drag
	      .subscribe(value => {
	        console.log(value)
	      });
	
	    this.dragula.drop
	      .subscribe(value => {
	      	// this.blocks.push(value)
	        console.log(value)
	     });
	}


	addBlock(block) {
		let id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
		this.appservice.toDb(block, id);
	}
}
