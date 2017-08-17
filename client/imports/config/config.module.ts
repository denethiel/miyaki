import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TabsModule, ModalModule} from 'ngx-bootstrap';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {ConfigComponent} from './config.component';
import {ConfigRoutingModule} from './config-routing.module';

@NgModule({
    imports:[ConfigRoutingModule, TabsModule.forRoot(),ModalModule.forRoot(), CommonModule, ReactiveFormsModule, FormsModule],
    declarations:[ConfigComponent]
})
export class ConfigModule {}
