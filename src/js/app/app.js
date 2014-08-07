var app = {
    teams : {},
    views : {},
    models : {},
    collections : {},
    content : null,
    init: function() {
      console.log('App Init()');
      return this;
  }
};

app.models.team = Backbone.Model.extend({
  defaults: {
    name: 'HackTeam',
    active: false,
    points: 0,
    players: {}
  }
});

app.models.player = Backbone.Model.extend({
  defaults: {
    name: 'Player',
    type: 'gamer',
    active: false
  }
});

app.collections.teams = Backbone.Collection.extend({
  initialize: function() {},
  model: app.models.team,
  active: function(status, idx) {
    this.models[idx].set('active', status);
  }

});

var createTmpl = $('<div class="createPlayer"></div>');

app.views.create = Backbone.View.extend({
  template: _.template(createTmpl.html()),
});
