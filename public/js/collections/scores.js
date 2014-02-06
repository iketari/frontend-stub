define([
    'backbone',
    'models/score'
], function(
    Backbone,
    Model
){

    var Collection = Backbone.Collection.extend({
        model: Model,
        initialize: function(){
            this.add([
                // TODO
            ]);
        }
    });

    return new Collection();
});