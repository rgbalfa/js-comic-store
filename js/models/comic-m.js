app.ComicModel = Backbone.Model.extend({
  defaults: {
    id:0,
    type: 'comic',
    title: '',
    artist_writer:'',
    artist_graphic:'',
    artist_ink:'',
    edition: '', 
    cover: '', 
    detail: '',
    genre:'',
    recommendations:0,
    searches:0,
    score:0,
    inventory:0,
    inventory_available:0,
    date_publication:0,
  }
});
