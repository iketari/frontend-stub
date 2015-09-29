define([
    'backbone',
    'views/Base',
    'tmpl/login'
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