// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { NewsComponent } from './news.component';
import { CbTuanComponent } from './cb-tuan/cb-tuan.component';
import { CbDotxuatComponent } from './cb-dotxuat/cb-dotxuat.component';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailCbTuanComponent } from './detail-cb-tuan/detail-cb-tuan.component';

@NgModule({
	imports: [
		Ng2SearchPipeModule,
		NgxPaginationModule,
		FormsModule,
		CommonModule,
		PartialsModule,
		CoreModule,
		NgbModule,
		RouterModule.forChild([
			{
				path: '',
				component: NewsComponent,
				children: [
					{ path: 'cb-tuan', component: CbTuanComponent },
					{ path: 'cb-dotxuat', component: CbDotxuatComponent },
					{ path: ':id', component: DetailCbTuanComponent }
				]
			},
		]),
	],
	providers: [],
	declarations: [
		NewsComponent,
		CbTuanComponent,
		CbDotxuatComponent,
		DetailCbTuanComponent,
	]
})
export class NewsModule {
}
