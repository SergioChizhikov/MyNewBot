// ==UserScript==
// @name         My New Bot
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       Sergey Chizhikov
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @match        https://kiteuniverse.ru/*
// @match        https://motoreforma.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let input = document.getElementsByName("q")[0];
  let button = document.getElementsByName("btnK")[0];
  let links = document.links;
  let sites = {
    "napli.ru": [
      "Базовые вещи про GIT. Настройка и основные команды.",
      "вывод произвольных полей wordpress",
      "Конвертация Notion в Obsidian", "10 самых популярных шрифтов от Google",
      "Как правильно задавать вопросы",
    ],
    "kiteuniverse.ru": ["Красота. Грация. Интеллект", "Kite Universe", "Мастер классы Kite Universe"],
    "motoreforma.com": ["Мотореформа", "тюнинг maverick X3", "прошивки для CAN_AM"],
  }
  let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
  let keywords = sites[site];

  let keyword = keywords[getRandom(0, keywords.length)];

  if (button !== undefined) {
    document.cookie = `site=${site}`;
  } else if (location.hostname == "www.google.com") {
    site = getCookie("site");
  } else {
    site = location.hostname;
  }



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
  } else if (location.hostname == site) {
    console.log("Мы на целевом сайте");

    setInterval(() => {
      let index = getRandom(0, links.length);
      let link = links[index];

      if (getRandom(0, 101) >= 80) {
        location.href = "https://www.google.com/";
      }

      if (link.href.includes(site)) {
        link.click();
      }

    }, getRandom(2000, 4000))
  } else {
    //Работаем на странице выдачи
    let nextPage = true;

    for (let i = 0; i < links.length; i++) {
      if (links[i].href.indexOf(site) != -1) {
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
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
     return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  })();
