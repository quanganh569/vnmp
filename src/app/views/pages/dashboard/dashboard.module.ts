// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DashboardComponent } from './dashboard.component';
import { AccountLeakedComponent } from './account-leaked/account-leaked.component';
import { AccountLeakedByDomainComponent } from './account-leaked-by-domain/account-leaked-by-domain.component';
import { BotnetByLocationComponent } from './botnet-by-location/botnet-by-location.component';
import { BotnetByOrgComponent } from './botnet-by-org/botnet-by-org.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DomainComponent } from './domain/domain.component';
import { IpsComponent } from './ips/ips.component';
import { WebboxComponent } from './webbox/webbox.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartPieComponent } from './botnet-by-org/chart-pie/chart-pie.component';
import { TableOrgComponent } from './botnet-by-org/table-org/table-org.component';
import { CompileMetadataResolver } from '@angular/compiler';
import {MatSortModule} from '@angular/material';
@NgModule({
	imports: [
		MatSortModule,
		ReactiveFormsModule,
		NgxPaginationModule,
		Ng2SearchPipeModule,
		FormsModule,
		CommonModule,
		PartialsModule,
		CoreModule,
		NgbModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
		]),
	],
	providers: [],
	declarations: [
		DashboardComponent,
		AccountLeakedComponent,
		AccountLeakedByDomainComponent,
		BotnetByLocationComponent,
		BotnetByOrgComponent,
		ContactsComponent,
		DomainComponent,
		IpsComponent,
		WebboxComponent,
		ChartPieComponent,
		TableOrgComponent,
	]
})
export class DashboardModule {
}
