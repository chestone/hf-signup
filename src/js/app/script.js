/*! hf-signup 2014-08-07 */
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

// window.onload = function() {
 //  app.init();
// };

$(document).ready(function() {
  console.log('ready');
  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log($(this));
    console.log($(this).serialize());
    $.post('./', $(this).serialize(), function(data) {
      console.log(data);
      alert('Team ' + data.team.name + ' added and slotted to begin at ' + data.slot.begin);
    });
  });
});
