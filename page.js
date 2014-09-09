window.MySite = {
  // Models: {},
  // Collections: {},
  // Views: {},
  Routers: {},
  initialize: function () {
    MySite.Routers.Router = Backbone.Router.extend({
      initialize: function (options) {
        this.$el = options.$el;
      },

      routes: {
        '':             'project',
        'projects/:id': 'project'
      },

      project: function (id) {
        if (id === null) {
          var id = 1;
        }
        $('.nav-link').removeClass('nav-link-visited');
        $navLink = $('.nav-link-' + id);
        $navLink.addClass('nav-link-visited');

        // show the correct content
        $('.project').removeClass('project-show');
        $project = $('.project-' + id);
        $project.addClass('project-show');
      }
    });

    MySite.router = new MySite.Routers.Router({$el: $('#content')});
    Backbone.history.start();
  }
};

$(document).ready(function () {
  MySite.initialize();
});