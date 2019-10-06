// ==UserScript==
// @name         MicroScatter Cheater Script
// @namespace    http://qsysmine.tk/
// @version      0.1
// @description  Press C on microscatter to win
// @author       qsysmine
// @match        https://quizlet.com/*/microscatter
// @grant        none
// ==/UserScript==

(function() {
    var cheatTime = 0;
    window.setCheatTime = function(mils) {
        cheatTime = mils;
    };
    
    var $ = window.jQuery;
    var cheat = function() {
        var ids = [];
        var checkhasid = function(id) {
            for(var i in ids) {
                if(ids[i] == id) {
                    return true;
                }
            }
            return false;
        };
        setTimeout(function() {
        $('.cell').each(function(index){

            if(checkhasid($(this).attr("data-id"))) $('[data-id="' + $(this).attr("data-id") + '"]').trigger("click")
            if(!checkhasid($(this).attr("data-id"))) ids.push($(this).attr("data-id"));

        });
        }, cheatTime);
    };
    window.startWithTime = function(mils) {
        setCheatTime(mils);
        $('#start').trigger("click");
        cheat();
    };
    var z = 0;
    $('*').keyup(function(e) {
        if(e.keyCode == 67 && z == 0 && $('#cells').hasClass("started")) {z = 1; cheat();}
    });
})();
