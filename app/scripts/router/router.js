var app = {
  models: {},
  views: {},
  collections: {},
  routers: {},
  init: function(){
    directory = new app.views.Beers(directoryData);
  }

};
