// ==UserScript==
// @name         Cars_on_Route
// @namespace    http://www.leitstellenspiel.de
// @version      0.1
// @author       x_Freya_x
// @include      https://www.leitstellenspiel.de/missions/*
// @require      https://code.jquery.com/jquery-3.3.1.js
// ==/UserScript==

(() => {
    'use strict';

    let tptr = $('#mission_vehicle_driving');
    let tbptr = tptr.find('tbody');
    console.log(tbptr);
})();
