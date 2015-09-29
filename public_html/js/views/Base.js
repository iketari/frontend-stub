define([
    'backbone'
], function(
    Backbone
){

    return Backbone.View.extend({

        initialize: function (options) {
            this.template = options.template;
            this.setElement(options.el || "#page");
        },

        render: function () {
            this.$el.html(this.template());
        },

        show: function () {
            this.render();
            this.$el.show();
        },

        hide: function () {
            this.$el.hide();
        }

    });
});