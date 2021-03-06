Ext.define('todomvc.view.Main', {
		extend : 'Ext.Panel',
		itemId : 'main',
    layout:'hbox',
		alias : 'widget.main',

    items:[
        {
            flex:1,
            border:false
        },
        {
            title:'~~todo~~',
            width:400,
            layout:{
                type:'vbox',
                align:'stretch'
            },
            items:[
                {  //header
                    layout:'hbox',
                    height:25,
										itemId : 'nuevoTodo',
                    items:[
                        {
                            xtype:'checkbox',
														itemId : 'allItems',
                            value:'@>{allVisibleItemsAreCompleted}',
                            disabled:'@{!completeAllIsDisabled}',
                            width:20
                        },
                        {
                            xtype:'textfield',
                            value:'',
                            cls:'todo-newItemText',
                            emptyText:'something to do?',
														enableKeyEvents : true,
                            width:300
                        }
                    ]
                },
                { //list body
										height : 200,
										itemId : 'listItems',
                    //items:[],
                    bbar:[
                        {
                            xtype:'displayfield',
														itemId : 'itemsLeft',
                            value:'0'
                        },
                        {
                            xtype:'tbspacer'
                        },
                        {
                            xtype:'buttongroup',
                            flex:1,
                            activeItem:'@{filterMode}',
                            items:[
                                {
                                    text:'all',
                                    value:'all'
                                },
                                {
                                    text:'active',
                                    value:'active'
                                },
                                {
                                    text:'completed',
                                    value:'completed'
                                }
                            ]
                        },
                        {
                            xtype:'tbfill'
                        },
                        {
                            text:'Clear completed',
														itemId : 'clearCompleted',
                            hidden: false //'@{!clearCompletedIsVisible}'
                        }
                    ]}

            ] }
        ,
        {
            flex:1,
            border:false
        }
    ]
});
