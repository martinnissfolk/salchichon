"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Salchichon;
(function (Salchichon) {
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            var element = document.createElement('div');
            element.appendChild(document.createTextNode('Remember - you can´t beam through a force field. So, don´t try it.'));
            document.body.appendChild(element);
            console.log('Hello World');
            var color = new Color_1.Color(0, 255, 0);
            document.body.style.backgroundColor = color.toString();
        };
        return Startup;
    }());
    Salchichon.Startup = Startup;
})(Salchichon || (Salchichon = {}));
Salchichon.Startup.main();
//Startup.main(); 
//# sourceMappingURL=helloworld.js.map