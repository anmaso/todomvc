Ext.define('todomvc.view.Item', {
		extend : 'Ext.panel.Panel',
		alias : 'widget.todoitem',
		//itemId : 'item',
		layout : 'hbox',
		cls : 'todoitem',
		border : false,
		height : 30,
		items : [
			{ xtype : 'hidden' , name : 'id'},
			{ xtype : 'hidden' , name : 'lastUpdate'},
			{ xtype : 'hidden' , name : 'priority'},
			{ xtype : 'checkbox' },
			{ xtype : 'displayfield', invalidCls : 'done' },
			{ xtype : 'textfield', hidden:true },
			{ flex : 1, border:false},
			{ xtype : 'button', text:'borrar', hidden:true }
			]
});
