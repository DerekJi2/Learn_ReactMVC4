"use strict";
var $ = require("jquery");
var App = (function () {
    function App() {
    }
    App.prototype.addComment = function () {
        var creatAt = new Date();
        $("#main").append("<div><span>new comment pushed at." + creatAt.toTimeString() + "</span>");
    };
    return App;
}());
exports.App = App;
var app = new App();
//jquery $()
$(function () {
    $("#btn-add").click(app.addComment);
});
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map