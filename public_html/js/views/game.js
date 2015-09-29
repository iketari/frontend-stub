define([
    'backbone',
    'views/Base',
    'tmpl/game'
], function(
    Backbone,
    BaseView,
    tmpl
){

    var View = BaseView.extend({});

    return new View({
        template: tmpl
    });
});