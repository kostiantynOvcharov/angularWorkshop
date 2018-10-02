import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    StorageModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error (
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
