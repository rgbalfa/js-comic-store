/*
app.comicView = Backbone.View.extend({
  
  el: '#comic-view',
  
  initialize: function(){
  },
  
  renderList: function (){
    var list_view;
    list_view = new app.comicListView({ collection: app.comic_collection });
    list_view.render();
  },
  
  
});

app.comicListView = Backbone.View.extend({
  
  el:'#comic-view',
  template: $('#list_comics').html(),
//
  render: function ()
  {
    $('#comic-view').addClass('col-md-9');
    var tpl = _.template(this.template,{ jsonComics: this.collection.toJSON()});
    this.$el.html( tpl );
    return this;
  }
});
*/
app.ComicQuickListItemView = Backbone.View.extend({
  tagName:'li',
  template: $('#tpl-comic-quick-list-item').html(),
  render: function (){
    this.template = $('#tpl-comic-quick-list-item').html();
    var tpl = _.template(this.template, { data: this.model.toJSON() });
    this.$el.html( tpl );
    return this;
  },
});
app.ComicQuickListView = Backbone.View.extend({
  tagName:'ul',
  render: function() {
    for( var i  = 0; i < this.collection.length; i++ ){
      var item = this.collection[i];
      this.addItem(item);
    }
    return this;
  },
  addItem: function(item) {
    var v = new app.ComicQuickListItemView ({ model: item });
    this.$el.append(v.render().el);
  }
});
//app.comicQuickListView = new app.ComicQuickListView();


