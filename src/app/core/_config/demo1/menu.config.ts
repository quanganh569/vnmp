export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},

		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon-buildings',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',

				},

				{
					title: 'News',
					root: true,
					icon: 'flaticon-list',
					page: '/news/cb-tuan',
					translate: 'News',

				},


			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
