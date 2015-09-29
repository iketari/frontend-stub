define([
    'backbone',
    'views/game',
    'views/login',
    'views/main'
], function(
    Backbone,
    viewGame,
    viewLogin,
    viewMain
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },

        initialize: function () {
            this.activeView = viewMain;
        },

        showView: function (view) {
            this.activeView.hide();
            view.show()
            this.activeView = view;
        },

        defaultActions: function () {
            this.showView(viewMain);
        },

        scoreboardAction: function () {
            /* pass */
        },

        gameAction: function () {
            this.showView(viewGame);
        },

        loginAction: function () {
            this.showView(viewLogin);
        }
    });

    return new Router();
});