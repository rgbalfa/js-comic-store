
app.ComicCollection = Backbone.Firebase.Collection.extend({
  model: app.ComicModel,
  url: new Firebase("https://intense-torch-6548.firebaseio.com/comic"),
  
  topItems: function (attribute, type, n, callback){
    console.log("topItems..");
    app.comicCol.on('sync', function(collection) {
      var list = _.filter(app.comicCol.models, function(data) {
        return data.get("type") == type;
      });
      list = _.sortBy(list , function(data1) {
        return -data1.get(attribute); // - data2.get("score")
      });
      list = list.slice(0,n);
      callback(list);
    });
  },
  indexItems: function (attribute, value, type, n, callback){
    console.log("indexItems..");
    app.comicCol.on('sync', function(collection) {
      var list = _.filter(app.comicCol.models, function(data) {
        return data.get("type") == type;
      });
      list = _.indexBy(list , function(data1) {
        return data1.get(attribute); // - data2.get("score")
      });
      if( n!=0 ){
        list = list.slice(0,n);
      }
      callback(list);
    });
  },
  filterItems: function (attribute, value, type, n, callback){
    console.log("groupItems..");
    app.comicCol.on('sync', function(collection) {
      var list = _.filter(app.comicCol.models, function(data) {
        return data.get("type") == type && 
          ( attribute == null || 
          data.get(attribute) == value);
      });
      list = _.indexBy(list , function(data1) {
        return data1.get(attribute); // - data2.get("score")
      });
      if( n!=0 ){
        list = list.slice(0,n);
      }
      callback(list);
    });
  },
  
});

app.comicCol = new app.ComicCollection();