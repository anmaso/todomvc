Ext.Loader.setConfig({
		enabled : true
});

Ext.application({
		name : 'todomvc',

		controllers : ['Item','Todo'],
		autoCreateViewport : true,
		launch : function(){
		}

		

});
