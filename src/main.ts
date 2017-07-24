import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BlockType1Service } from './app/services/block-type1.service'
import { BlockType2Service } from './app/services/block-type2.service'
import { BlockType3Service } from './app/services/block-type3.service'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [BlockType1Service, BlockType2Service, BlockType3Service]);
