import { Component, AfterViewInit, ViewChild, OnInit, ElementRef } from '@angular/core';
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
	@ViewChild('codeEditor') codeEditor: ElementRef; 
	selectBlocks: any;
	blocks: any;
	rows: any[];

	// firebase	
	pureBlocks: FirebaseListObservable<any[]>;

	constructor(
		private db: AngularFireDatabase,
		private dragula: DragulaService,
		private appservice: AppService) {
		this.selectBlocks = ['BlockType1', 'BlockType2', 'BlockType3'];
		this.blocks = [];
		this.pureBlocks = db.list('/blocks')
	}

    ngOnInit() {
    	this.pureBlocks.subscribe(snapshot => {
    		this.blocks = [];
    		snapshot.forEach(snapshot => { 
	 			this.blocks.push(snapshot)
	 		})
	  	});
	  	this.setRowCounter() 
	}

    setRowCounter() {
    	this.rows = [];
    	let codeEditorHeight = this.codeEditor.nativeElement.offsetHeight;
		let fontSize = 13;
		let num = Math.ceil(codeEditorHeight/fontSize);
		this.rows = Array(num).fill(0).map((x,i)=>i);
		//console.log(codeEditorHeight);
	}


	addBlock(block) {
		let id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
		this.appservice.toDb(block, id);
		this.setRowCounter()
	}
}
