import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BlockType1Component } from './components/block-type1/block-type1.component';
import { BlockType2Component } from './components/block-type2/block-type2.component';
import { BlockType3Component } from './components/block-type3/block-type3.component';
import { ShadowBlock1Component } from './components/shadow-blocks/shadow-block1/shadow-block1.component'
import { ShadowBlock2Component } from './components/shadow-blocks/shadow-block2/shadow-block2.component'
import { ShadowBlock3Component } from './components/shadow-blocks/shadow-block3/shadow-block3.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
	blocks;
	@ViewChild('visual', {read: ViewContainerRef}) visual;
	@ViewChild('editor', {read: ViewContainerRef}) editor;
	constructor(private resolver: ComponentFactoryResolver) {
		this.blocks = [
			'BlockType1', 
			'BlockType2', 
			'BlockType3'
		]
	}

	addBlock(block) {
		let blockToCreate;
		let shadowToCreate;
		switch(block) {
			case 'BlockType1':
			blockToCreate = BlockType1Component;
			shadowToCreate = ShadowBlock1Component
			break;
			case 'BlockType2':
			blockToCreate = BlockType2Component;
			shadowToCreate = ShadowBlock2Component
			break;
			case 'BlockType3':
			blockToCreate = BlockType3Component;
			shadowToCreate = ShadowBlock3Component
			break;
			default: 
			blockToCreate = null;
			shadowToCreate = null;
		}
		const blockFactory = this.resolver.resolveComponentFactory(blockToCreate);
		const shadowFactory = this.resolver.resolveComponentFactory(shadowToCreate);
		const blockFactoryRef = this.visual.createComponent(blockFactory);
		const shadowFactoryRef = this.editor.createComponent(shadowFactory);
		
		let visual = document.getElementById('visual');
		let iterator = visual.childElementCount - 1;
		// this part fail
		blockFactoryRef.instance.id = `block-${iterator}`;
		shadowFactoryRef.instance.class = `block-${iterator}`;
	}
	
}
