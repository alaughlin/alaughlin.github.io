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
        'skills':       'skills',
        'contact':      'contact',
        'projects/:id': 'project'
      },

      project: function (id) {
        if (id === null) {
          var id = 1;
        }

        $('.nav-link').removeClass('nav-link-visited');
        var $navLink = $('.nav-link-' + id);
        $navLink.addClass('nav-link-visited');

        $('.dynamic').removeClass('show');
        var $project = $('.project-' + id);
        $project.addClass('show');
      },

      skills: function () {
        $('.nav-link').removeClass('nav-link-visited');
        var $navLink = $('.nav-link-4');
        $navLink.addClass('nav-link-visited');

        $('.dynamic').removeClass('show');
        var $skills = $('.skills');
        $skills.addClass('show');
      },

      contact: function () {
        $('.nav-link').removeClass('nav-link-visited');
        var $navLink = $('.nav-link-5');
        $navLink.addClass('nav-link-visited');

        $('.dynamic').removeClass('show');
        var $contact = $('.contact');
        $contact.addClass('show');
      }
    });

    MySite.router = new MySite.Routers.Router({$el: $('#content')});
    Backbone.history.start();
  }
};

$(document).ready(function () {
  MySite.initialize();
});