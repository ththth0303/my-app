/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    
    $(".open-panel").on("click", function () {
        $(".chat-left-aside").toggleClass("open-pnl");
        $(".open-panel i").toggleClass("ti-angle-left");
    });

});
