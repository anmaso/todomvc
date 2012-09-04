Ext.define('todomvc.store.Items', {
		extend : 'Ext.data.Store',
		autoLoad : true,
		model : 'todomvc.model.Item',
		proxy : {
			type : 'memory',
			reader : 'json',
			root : 'items'
		},

		data : {
			 items : [
				 {id : 1, description: 'tarea1', priority : 'high',  lastUpdated : new Date()},
				 {id : 2, description: 'tarea2', priority : 'high',  lastUpdated : new Date()}
				 ]
		}
});
