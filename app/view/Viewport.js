Ext.define("todomvc.view.Viewport", {
		extend : 'Ext.container.Viewport',
		requires : 'todomvc.view.Main',
		layout:'fit',
		items : [
			{ xtype : 'main' }
			]
		
});
