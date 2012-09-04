Ext.define('todomvc.model.Item',{
		extend  :'Ext.data.Model',
    fields:[
        {
            name:'id',
            type:'string'
        },{
            name:'description',
            type:'string'
        },{
            name:'priority',
            type:'string',
            oneOf : ['high','medium','low']
        },{
            name:'lastUpdated',
            type:'date'
        },{
            name:'done',
            type:'boolean'
        }
    ],

	 	afterEdit: function() {
        var me = this;
        Ext.Object.each(me.modified, function(key, oldValue, self) {
					if(oldValue!==me.get(key)) {    
                me.fireEvent(key+'modified', me, me.get(key), oldValue);
            }
        });
        this.callParent(arguments);
    }  
});

