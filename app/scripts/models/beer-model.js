'use strict';
app = app || {};

app.models.Beer = Backbone.Model.extend({
  defaults: {
    'id': '',
    'brewery_id': '',
    'name': '',
    'cat_id': '',
    'style_id': '',
    'abv': '',
    'ibu': '',
    'srm': '',
    'upc': '',
    'filepath': '',
    'description': '',
    'last_mod': ''
  }
  // initialize: function(){
  //   var self = this;
  // }
});

app.collections.Beers = Backbone.Collection.extend({
  model: app.models.Beer,

  comparator: function(beer){
    return beer.get('name');
  }
});
