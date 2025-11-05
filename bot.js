// ==UserScript==
// @name         My New Bot
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       Sergey Chizhikov
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let input = document.getElementsByName("q")[0];
  let button = document.getElementsByName("btnK")[0];
  let links = document.links;
  let keywords = [
    "Базовые вещи про GIT. Настройка и основные команды.",
    "вывод произвольных полей wordpress",
    "Конвертация Notion в Obsidian", "10 самых популярных шрифтов от Google",
    "Как правильно задавать вопросы",
  ];
  
  let keyword = "Как правильно задавать вопросы";
  if (button !== undefined) {
    let i = 0;
    let timerId = setInterval(() => {
      input.value += keyword[i];
      i++;
      if (i == keyword.length) {
        clearInterval(timerId);
        button.click();
      }
    }, 200);
  } else if (location.hostname == "napli.ru") {
    console.log("Мы на целевом сайте");
  } else {
    //Работаем на странице выдачи
    let nextPage = true;

    for (let i = 0; i < links.length; i++) {
      if (links[i].href.indexOf("napli.ru") != -1) {
        let link = links[i];
        console.log("Нашел строку" + links[i]);
        setTimeout(() => {
          link.click();
        }, getRandom(3000, 5000));
        nextPage = false;
        break;
      }
    }
    if (nextPage) {
      setTimeout(() => {
        document.getElementById("pnnext").click();
      }, getRandom(6000, 7000));
    }

    if (document.querySelector(".YyVfkd").innerText == "4") {
      nextPage = false;
      location.href = "https://www.google.com/";
    }
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
})();
