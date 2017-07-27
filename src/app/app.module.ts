// here inputs modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//enviroment
import { environment } from '../environments/environment';

//components
import { AppComponent } from './app.component';
import { BlockType1Service } from './services/block-type1.service';
import { BlockType2Service } from './services/block-type2.service';
import { BlockType3Service } from './services/block-type3.service'
import { BlockType1Component } from './components/block-type1/block-type1.component';
import { BlockType2Component } from './components/block-type2/block-type2.component';
import { BlockType3Component } from './components/block-type3/block-type3.component';
import { ShadowBlock1Component } from './components/shadow-blocks/shadow-block1/shadow-block1.component';
import { ShadowBlock2Component } from './components/shadow-blocks/shadow-block2/shadow-block2.component';
import { ShadowBlock3Component } from './components/shadow-blocks/shadow-block3/shadow-block3.component';

@NgModule({
  declarations: [
  	AppComponent, 
  	BlockType1Component, 
  	BlockType2Component, 
  	BlockType3Component, 
  	ShadowBlock1Component, 
  	ShadowBlock2Component, 
  	ShadowBlock3Component
  ], // Components
  entryComponents: [
    BlockType1Component,
    BlockType2Component, 
    BlockType3Component, 
    ShadowBlock1Component, 
    ShadowBlock2Component, 
    ShadowBlock3Component
  ], // Dynamic created components
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule 
  ], // Modules
  providers: [BlockType1Service,  BlockType2Service, BlockType3Service], // service
  bootstrap: [AppComponent]
})
export class AppModule { }
