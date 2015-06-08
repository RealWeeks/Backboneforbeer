app = app || {};

app.views.Beer = Backbone.View.extend({
  tagName: 'li',
  attributes: function(){
    return {
      class: 'beer'
    };
  },

  events: {
    'click .list-header': 'showDetails'
  },

  template: _.template($('#beer-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  showDetails: function(e){
    $(e.target).toggleClass('active');
    $(e.target).siblings('.details').slideToggle('fast');
  }

});

app.views.Beers = Backbone.View.extend({

  el:'#wrapper',
  initialize: function(data){
    this.collection = new app.collections.Beers(data);
    // debugger;
    this.render();
    this.on('change:searchFilter', this.filterBySearch, this);
  },

  events: {
    'keyup #searchBox': 'searchFilter'
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
  },

  searchFilter: function(e){
    this.searchFilter = e.target.value;
    this.trigger('change:searchFilter');
  },

  filterBySearch:function(){
    this.collection.reset(directoryData), {silent: true};
  }

});
