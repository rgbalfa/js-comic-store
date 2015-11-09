app.Routers = Backbone.Router.extend({
  
  routes: {
    ''                    : 'home',
    'home'                : 'home',
    'indexBy/:attribute/:value'     : 'indexby',
    'node/:id'            : 'node',
  },
  
  home : function (){ 
    console.log("router home ");
    this.sidebar();
    },
  
  sidebar: function(){
    app.comicCol.topItems("score", "comic",3, function(list){
      var comicQuickListView = new app.ComicQuickListView({ collection: list});
      $("#top-score").html(comicQuickListView.render().el);
    });
    app.comicCol.topItems("searches","comic",3, function(list){
      var comicQuickListView = new app.ComicQuickListView({ collection: list});
      $("#top-search").html(comicQuickListView.render().el);
    });
    app.comicCol.topItems("recommendations","comic",3, function(list){
      var comicQuickListView = new app.ComicQuickListView({ collection: list});
      $("#top-recommended").html(comicQuickListView.render().el);
    });
  },
  
  nodeDetail: function (id){
    console.log("node."+id);
    /*
    $('#sidebar_content').removeClass('hidden');
    $('header').removeClass('hidden');
    app.comic_view.renderComicDetail(id);
    app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    app.footer_view.render();    
    */
  },  
  
  indexBy: function (attribute,value)  {
    console.log("indexby _ "+ attribute);
    /*
    app.comicCol.indexItems(attribute,value, "comic",0, function(list){      
      var comicQuickListView = new app.ComicQuickListView({ collection: list});
      $("#main-content").html(comicQuickListView.render().el);
    });
    */
    /*var login = app.session_collection.check_login();
    if (login){
      $('#sidebar_content').removeClass('hidden');
      $('header').removeClass('hidden');
      app.comic_view.renderList();
      app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
        app.footer_view.render();
    }
    */
    //alert("genres");
    
  },
  
  
});


app.router = new app.Routers();
Backbone.history.start(); 
