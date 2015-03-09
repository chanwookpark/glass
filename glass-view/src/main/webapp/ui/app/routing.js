/**
 * Created by chanwook on 2015. 2. 26..
 */
(function(){
    "use strict";

    App.Router.map(function() {
        this.resource('creator', {path: "/creator"});
    });

    App.IndexRoute = Ember.Route.extend({
        redirect: function() {
            this.transitionTo('creator');
        }
    });
})();