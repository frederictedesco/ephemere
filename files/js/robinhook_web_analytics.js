  //'GTM-N6N4856' -- for testing on the DCode account
var dataLayer = [];
var ROBINHOOK = ROBINHOOK || (function(){
    var _robinhookLayer = {};
    var _robinhookUrl = '';
    var _withGoogle = false;

    return {
        init : function() {
          _robinhookLayer['robinhook.startpage.time'] = new Date().getTime();
          _robinhookUrl = 'https://acc.robinhook.dcode.eu/unsubscribe';
          _withGoogle = false;
          console.log(JSON.stringify(_robinhookLayer));
        },
        initWithGoogle : function(googleID){
          this.init();
          _robinhookLayer['googleID'] = googleID;
          _withGoogle = true;
          console.log(JSON.stringify(_robinhookLayer));
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer',googleID);
        },
        push : function(dataObject) {
          if (_withGoogle){
            dataLayer.push(dataObject);
          };
          var dataRobinhook = this.initEvent();
          for (var attrname in _robinhookLayer) { dataRobinhook[attrname] = _robinhookLayer[attrname]; }
          for (var attrname in dataObject) { dataRobinhook[attrname] = dataObject[attrname]; }
          xmlDoc = new XMLHttpRequest();
          xmlDoc.open('POST',_robinhookUrl,true);
          xmlDoc.setRequestHeader("Content-type", "application/json");
          xmlDoc.send(JSON.stringify(dataRobinhook));
        },
        initEvent : function() {
          var data = {};
          data["robinhook.event.time"] = new Date().getTime();
          data["robinhook.event.delay"] = data["robinhook.event.time"] - this.getStartPage();
          return data;
        },
        getStartPage : function(){
          return _robinhookLayer['robinhook.startpage'];
        }

    };
}());