/**
 * @author Frederic Tedesco
 */
Ext.define('dcodeGenForm.model.dcodegenform', {
    extend: 'SenchaCouch.Model',
    fields: [
      {name: 'name',type: 'string'},
      {name: 'email',type: 'string'},
      {name: 'phone',type: 'string'},
      {name: 'message',type: 'string'}
      ],
    proxy: {
      type: 'couchdb',
      databaseUrl: '/',
      databaseName: 'noel',
      designName: 'genformdcodecouch',
      viewName: 'people'
    }
  });