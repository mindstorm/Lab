/*global ng*/

var AppComponent = ng
    .Component({
        selector: 'my-app'
    })
    .View({
        template: '<h1>Angular 2 App</h1>'
    })
    .Class({
        constructor: function () {
            "use strict";
        }
    });

ng.bootstrap(AppComponent);