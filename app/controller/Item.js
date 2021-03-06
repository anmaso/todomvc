Ext.define('todomvc.controller.Item', {
		extend : 'Ext.app.Controller',

		refs : [
		],

		init : function(){
			this.control({
					'todoitem checkbox' : {
						change : this.changeChecked
					},
					'todoitem button' : {
						click : this.clickDelete
					}
			});

			this.application.on('addItem', this.newItem, this);
		},

		getId : function(cmp){
			var id=cmp;
			if (typeof cmp!='string'){
				var panel=cmp;
				if (!cmp.el.hasCls('todoitem')){
					cmp = cmp.up('panel');
				}
				id = cmp.down('[name="id"]').getValue();
			}
			return id;
		},

		getItem : function(cmp){
			var id = this.getId(cmp);
			return Ext.ComponentQuery.query('todoitem [value="'+id+'"]')[0].up('panel');
		},

		deleteItem : function(id){
			var item = this.getItem(id);

			var store = this.getStore('Items');
			var model = store.find("id", id);
			if (model){
				store.remove(model);
			}
			item.ownerCt.remove(item);
		},

		clickDelete : function(cmp){
			var id = this.getId(cmp);
			this.deleteItem(id);
		},

		overItem : function(ev){
			var panelId=ev.target.id;
			if (!Ext.get(ev.target).hasCls('todoitem')){
				panelId=Ext.get(ev.target).up('.todoitem').id;
			}
			Ext.getCmp(panelId).down('button').show();
		},

		leaveItem : function(ev){
			var panelId=ev.target.id;
			if (!Ext.get(ev.target).hasCls('todoitem')){
				panelId=Ext.get(ev.target).up('.todoitem').id;
			}
			Ext.getCmp(panelId).down('button').hide();
		},

		newItem : function(record){
			var itemCmp = Ext.widget('todoitem');
			var value = record.getData();
			itemCmp.down('displayfield').setValue(value.description);
			itemCmp.down('textfield').setValue(value.description);
			itemCmp.down('[name="id"]').setValue(value.id);
			itemCmp.down('[name="lastUpdate"]').setValue(value.lastUpdate);
			itemCmp.down('[name="priority"]').setValue(value.priority);

			record.on('donemodified', this.changeDone, this);

			//hasta que no sea visible no se puede hacer el handler del mouseover
			itemCmp.on('render', function(){
				itemCmp.el.on('mouseover', this.overItem, this);
				itemCmp.el.on('mouseleave', this.leaveItem, this);
			}, this);
			return itemCmp;
		},

		changeDone : function(record,done,c,d){
			var item = this.getItem(record.get('id'));
			this.setItemActive(item, done);
		},

		changeChecked : function(cmp){
			var done = cmp.getValue();
			var store=this.getStore('Items');
			var item = store.findRecord("id", this.getId(cmp));
			if (item){
				item.commit(false);  //necesario porque al cambiar antes se queda como dirty y si volvemos  a cambiar y dejamos el valor original es como si no hubiera cambiado nunca
				item.set("done", done);
			}

		},

		setItemActive : function(cmp,done){
			if (done){
				cmp.down('displayfield').addCls('done');
			}else{
				cmp.down('displayfield').removeCls('done');
			}
			cmp.down('checkbox').setValue(done);
		}



});
