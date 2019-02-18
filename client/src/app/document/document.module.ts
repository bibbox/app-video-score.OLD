import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromDocument from './document.state';
import { DocumentApiEffects } from './document-api.effects';
import { DocumentDisplayComponent } from './documen-display/document-display.component';

// MATERIAL
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

// TASKS
@NgModule({
  declarations: [
  DocumentDisplayComponent],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    EffectsModule.forFeature([DocumentApiEffects]),
    StoreModule.forFeature('document', fromDocument.documentreducers)
    ],

    exports: [ MatTableModule ],
})


export class DocumentModule {
}
