app = app || {};

app.views.Beer = Backbone.View.extend({
  tagName: 'li',
  attributes: function(){
    return {
      class: 'beer'
    };
  },

  template: _.template($('#been-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

app.views.Beers = Backbone.View.extend({

  el:'#wrapper',
  initialize: function(data){
    this.collection = new app.collections.Beer(data);
    debugger;
    this.render();
  },

  render: function(){
    var self = this;
    $('#listing').empty();
    _.each(this.collection.models, function(beer){
      self.renderBeer(beer);
    }, this);
  },

  renderBeer: function(beer){
    var newbeer = new app.views.Beer({
      model:beer
    });
    $('#listing').append(newbeer.render().el);
  }

});
