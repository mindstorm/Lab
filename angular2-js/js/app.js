/* global document, ng */
(function () {

    // my-app component
    var AppComponent = ng
        .Component({
            selector: 'my-app'
        })
        .View({
            template: '<h1>Hello {{ name }}</h1>'
        })
        .Class({
            constructor: function () {
                this.name = "World";
            }
        });

    // bootstrap angular
    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(AppComponent);
    });

})();