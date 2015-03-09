/**
 * Created by chanwook on 2015. 2. 26..
 */
(function(){
    "use strict";

    /* Template */
    getTemplate('nav', 'nav');
    getTemplate('creator', 'creator');

    function getTemplate(templateName, url) {
        //TODO grunt...
        $.ajax({
            url: 'http://glass-chocobo.appspot.com/ui/template/' + url + '.hbs',
            dataType: 'text',
            success: function (res) {
                console.log("Template Load: " + res);
                Ember.TEMPLATES[templateName] = Ember.Handlebars.compile(res);
            }
        });
    }

})();