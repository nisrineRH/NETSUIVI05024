import { NgModule } from '@angular/core';

import { Netsuivi05024SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Netsuivi05024SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Netsuivi05024SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Netsuivi05024SharedCommonModule {}
