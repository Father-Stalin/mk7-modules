import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SSLsplitComponent } from './components/SSLsplit.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: SSLsplitComponent }
];

@NgModule({
    declarations: [SSLsplitComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [SSLsplitComponent]
})
export class SSLsplitModule { }
