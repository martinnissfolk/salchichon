var Salchichon;
(function (Salchichon) {
    var Color = (function () {
        function Color(r, g, b) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            this.r = r;
            this.g = g;
            this.b = b;
        }
        Color.prototype.toString = function () {
            return "rgb(" + [this.r, this.b, this.g].join() + ")";
        };
        return Color;
    }());
    Salchichon.Color = Color;
})(Salchichon || (Salchichon = {}));
//# sourceMappingURL=Color.js.map