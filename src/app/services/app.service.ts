import { Injectable } from '@angular/core';
//firebase
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as blockTypes from './all-blocks-model';

const { blockType1, blockType2, blockType3 } = blockTypes; 

@Injectable()
export class AppService {
  	blocks: FirebaseObjectObservable<any[]>;
  	
	constructor(private db: AngularFireDatabase) { 
		this.blocks = db.object('/blocks');
	}

	toDb(block, id) {
		let blockToDatabase;
		switch(block) {
			case 'BlockType1':
			blockToDatabase = blockType1;
			break;
			case 'BlockType2':
			blockToDatabase = blockType2;
			break;
			case 'BlockType3':
			blockToDatabase = blockType3;
			break;
		}
		const toSend = this.db.object(`/blocks/${id}`);
	    toSend.set(blockToDatabase);
	}
}
