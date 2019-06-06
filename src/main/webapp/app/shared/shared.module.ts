import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Netsuivi05024SharedLibsModule, Netsuivi05024SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Netsuivi05024SharedLibsModule, Netsuivi05024SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Netsuivi05024SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Netsuivi05024SharedModule {
  static forRoot() {
    return {
      ngModule: Netsuivi05024SharedModule
    };
  }
}
