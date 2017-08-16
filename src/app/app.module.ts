// here inputs modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//enviroment
import { environment } from '../environments/environment';

//components
import { AppComponent } from './app.component';
import { BlockTypeService } from './services/block-type.service';
import { BlockType1Component } from './components/block-type1/block-type1.component';
import { BlockType2Component } from './components/block-type2/block-type2.component';
import { BlockType3Component } from './components/block-type3/block-type3.component';
import { ShadowBlock1Component } from './components/shadow-blocks/shadow-block1/shadow-block1.component';
import { ShadowBlock2Component } from './components/shadow-blocks/shadow-block2/shadow-block2.component';
import { ShadowBlock3Component } from './components/shadow-blocks/shadow-block3/shadow-block3.component';
import { ObjReversePipe } from './filters/obj-reverse.pipe';

@NgModule({
  declarations: [
  	AppComponent, 
  	BlockType1Component, 
  	BlockType2Component, 
  	BlockType3Component, 
  	ShadowBlock1Component, 
  	ShadowBlock2Component, 
  	ShadowBlock3Component, 
    ObjReversePipe
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
    DragulaModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule 
  ], // Modules
  providers: [BlockTypeService], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
