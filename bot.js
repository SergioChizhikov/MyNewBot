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
  let links = document.links;
  let keywords = ["Базовые вещи про GIT. Настройка и основные команды.", "вывод произвольных полей wordpress", "Конвертация Notion в Obsidian"];
  let keyword = keywords[getRandom(0, keywords.length)];

  if (button !== undefined) {
    input.value = keyword;
    button.click();
  } else {
    for (let i = 0; i < links.length; i++) {
      if (links[i].href.indexOf("napli.ru") != -1) {
        let link = links[i];
        console.log("Нашел строку" + links[i]);
        link.click();
        break;
      }
    }
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

})();
