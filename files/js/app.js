/**
 * @author Frederic Tedesco
 */
Ext.application({
    name: 'dcodeGenForm',
    models:[
        'dcodegenform'
    ],
    controllers: [
        'dcodegenform'
    ],

    launch: function() {
      console.log("app launch");
      Ext.QuickTips.init();
      //Work Arround for the tooltips display in Chrome
      delete Ext.tip.Tip.prototype.minWidth;
        //Initialize model
     }
});