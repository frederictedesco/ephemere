/**
 * @author Frederic Tedesco
 */
var myModel= null;
Ext.define('dcodeGenForm.controller.dcodegenform', {
    extend: 'Ext.app.Controller',
    refs: [
        {ref: 'personalForm',selector: '#personalForm'},
        {ref:'dcodegenformresults',selector:'#dcodegenformresults'}
    ],
     init: function() {
         console.log("launch controller");
         this.control({
             '#submit': {
                 click: this.submit
             }
         });
     },
     submit: function(b,e,o) {
        var step = this.getPersonalForm().items.indexOf(this.getPersonalForm().layout.activeItem);
        switch (step){
            case 0 :
                myModel.set(Ext.getCmp('step1').getForm().getValues());
                Ext.getCmp('step2').getForm().loadRecord(myModel);
                break;
            case 1 :
                myModel.set(Ext.getCmp('step2').getForm().getValues());
                break;        
        };
        myModel.save();
        //myStore.reload();
        this.getDcodegenformresults().getStore().reload();
        this.getPersonalForm().getLayout().setActiveItem(step + 1); 
            
     } 
});

