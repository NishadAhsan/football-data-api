import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootballDataService } from './football-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FootballDataModule { 
	static forRoot(getConfig: Function): ModuleWithProviders{
		return {
			ngModule: FootballDataModule,
			providers: [
				{ provide: 'config', useFactory: getConfig },	
				FootballDataService
			]
		}
	}
}

export * from './football-data.service';
