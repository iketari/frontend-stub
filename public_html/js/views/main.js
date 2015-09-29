define([
    'backbone',
    'views/Base',
    'tmpl/main'
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