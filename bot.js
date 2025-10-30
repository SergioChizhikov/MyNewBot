// ==UserScript==
// @name         My New Bot
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       Sergey Chizhikov
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let input = document.getElementsByName("q")[0];
  let button = document.getElementsByName("btnK")[0];
  let links = document.links

  if (button !== undefined) {
    input.value = "вывод произвольных полей wordpress";
    button.click();
  } else {
    for (let i = 0; i < links.length; i++) {
      if (links[i].href.indexOf("napli.ru") != -1) {
        console.log("Нашел строку" + links[i]);
      }
    }
  }


})();


