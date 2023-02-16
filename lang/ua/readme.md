<p align="center">
  <br/>
  <img
    alt="logo"
    src="https://raw.githubusercontent.com/Phazor-js/Phazor.js/gh-pages/favicon.png"
    height="150px" 
  />
</p>
<h1 align="center"><b>Phazor.js</b></h1>
<p align="center">
  <a
    href="https://github.com/Phazor-js/Phazor.js/blob/main/LICENSE"
    ><img
      alt="License"
      src="https://img.shields.io/badge/License-MIT%202.0-blue.svg"
  /></a>
  <a href="https://js.org/"
    ><img
      alt="JavaScript"
      src="https://img.shields.io/badge/%3C%2F%3E-JavaScript-%230074c1.svg"
  /></a>
  <a href="#"
    ><img
      alt="CodeQL"
      src="https://github.com/Phazor-js/Phazor.js/actions/workflows/codeql-analysis.yml/badge.svg"
  /></a>
  <a href="https://www.codefactor.io/repository/github/pythoniaweb/phazor.js/overview/main"><img src="https://www.codefactor.io/repository/github/pythoniaweb/phazor.js/badge/main" alt="CodeFactor" /></a>
</p>
<br />

<p align="center">
  <a href="#docs">Документація</a> &nbsp;|&nbsp;
  <a href="https://github.com/Phazor-js/Phazor.js/blob/main/docs/pjs/public.js">Сприяти</a> &nbsp;|&nbsp;
  <a href="https://github.com/Phazor-js/Phazor.js/blob/main/SECURITY.md">Безпека</a> &nbsp;|&nbsp;
</p>
<a>Увага! Ця сторінка переведена на 99%</a>
<h2 id="docs">Що таке phazor.JS?</h2>
Phazor.JS це фрейм ворк від PlurrYT яктий надає зхожі функцій з jquery.<br>
Це  не базовано на jquery, весь код був написаний PlurrYT (pythoniaweb).<br>
<br>

## Як це працює?
Ти можеш найти документацію знизу.

## Це платно?
Ні. Phazor.JS це безкоштовний для використання framework без оплатно, кожному потрібен доступ до будь-яої функції. Ви можете підтримати проект на нашій сторінці в github.<br>

## як я можу цим користуватися?
**Warning: This framework behaves differently on mobile and PC. Please note this while making your apps/games as this may cause huge rendering problems.**
Load Phazor.js Installer without any downloads:<br>
```HTML
<script id="phazorJS" src="https://phazor.js.org/pjs/stable.js"></script>
```
Or recommended
```HTML
<script>
var importpjs = document.createElement('script'); // робими скріпт тег
importpjs.src = "https://phazor.js.org/pjs/stable.js"; // урл версії
importpjs.onload = function () {
   // Тут буде ваш код
}; // Коли код повністю загрузиться
document.head.appendChild(importpjs); // авто вставка в header
</script>
```



<br>

## Простий туторіал як використовувати
### Глобальні Значення
 1. `pjs("selector")` -> Виводить parsed Phazor Елемент.
 2. `pjs.parseElement(dom_element)` -> Виводить одиночний parsed Phazor Елемент.
 3. `pjs.parse(dom_elements)` -> Повертає масив проаналізованих PhazorElements або повертає один, якщо є лише один.
 4. `pjs.alert("text")` -> Shows a native alert.
 5. `pjs.prompt("text")` -> Запитує користувача на введення, а потім повертає введене користувачем.
 6. `pjs.get("https://url/", function() { [callback] })` -> Виконує запит HTTP GET і повертає значення за допомогою зворотного виклику.
 7. `pjs.post("https://url/", {"post": "data"}, function() { [callback] })` -> Виконує запит HTTP POST із заданими даними та повертає значення за допомогою зворотного виклику.
 8. `pjs.refresh()` -> Перезавантажує сторінку.
 9. `pjs.open("https://url/")` -> Відкриває нове вікно з указаною URL-адресою.
 10. `pjs.replace("https://url/")` -> Замінює поточне вікно вказаною URL-адресою.
 11. `pjs.random(min, max)` -> Повертає випадкове число між двома заданими числами.
 13. `pjs.confirm("text")` -> Повертає випадкове число між двома заданими числами.
 14. `pjs.setcookie("cookieone = значення", "cookie закінчується через днів (1)", "cookie патч (/)")` -> встановити cookie.
 15. `pjs.getcookie("cookie")` -> Повертає значення cookie.
 16. `pjs.allcookies()` -> Повертає всі файли cookie (CODED). (CookieName=coded value)
 17. `pjs.version()` -> Повернення Phazor.JS Версію. (v1)
 18. `pjs.info()` -> Повертає інформацію про phazor. (Власник і сайт phazor.js.)
 19. `pjs.noscript("text")` -> Створіть елемент noscript з текстом (Хуйня якась просто не використовуйте від Plurrarrab)
 20. `pjs.favicon("url")` -> Змінити фавікон на введену URL-адресу.
 21. `pjs.favicontext("text")` -> Змінити значок фавіка на текст (можна ввести емодзі!).
 22. `pjs.clog("text")` -> Як журнал консолі, але просто проста версія.
 23. `pjs.cwarn("text")` -> Як консольне попередження, але просто проста версія.
 24. `pjs.cerror("text")` -> Як консольна помилка, але просто проста версія.
 25. `pjs.terror("text")` -> Як створити нову помилку, але просто легку версію.
 26. `pjs.cstime("text")` -> Запустити таймер консолі.
 27. `pjs.cetime("text")` -> Завершити таймер консолі.

### PhazorElement значення
TIP: `pjs("selector")` -> Повертає проаналізований PhazorElement.
1. `Element.dom` -> повертає  DOM елемент з PhazorElement.
2. `Element.click(function() { [callback] })` -> Запускає введену функцію, якщо клацнути елемент.
3. `Element.html("<some>html here</some>")` -> Переписує innerHTML з PhazorElement.
4. `Element.setcss("some: css;")` -> переписує стиль атрибут з PhazorElement.
5. `Element.getcss("some")` -> повертає  CSS значення  з даного ім'я атрибута.
6. `Element.css("some", "css")` -> модифікації стиля  з PhazorElement, стежит за старимм атоибутами.
7. `Element.setX(number)` -> виставляє значення з X вісью з PhazorElement базовано на  порту ширини.
8. `Element.setY(number)` -> виставляє значення з Y вісью з PhazorElement базовано на  порту ширини.
9. `Element.moveX(number)` -> змінює значення з X віссю з PhazorElement базовано на  порту ширини.
10. `Element.moveY(number)` -> змінює значення Y віссю з PhazorElement базовано на  порту ширини.
11. `Element.fixW(number)` -> виставляє ширину з PhazorElement базовано на  порту ширини.
12. `Element.fixH(number)` -> виставляє висоту з PhazorElement базовано на порту ширини.
13. `Element.fixW(number)` -> Змінює ширину з PhazorElement базовано на  порту ширини.
14. `Element.fixH(number)` -> Змінює довжин  з PhazorElement базовано на  порту ширини.
15. `Element.set(x, y)` -> Виставляє значення з X та Y axis з PhazorElement базовано на  порту ширини.
16. `Element.move(x, y)` -> змінює значення з X та Y вісь з PhazorElement базовано на  порту ширини.
17. `Element.fix(w, h)` -> Виставляє висоту та довжину  з PhazorElement базовано на  порту ширини.
18. `Element.fixS(w, h)` -> змінює ширину та висоту з PhazorElement базовано на  порту ширини.
19. `Element.add(PhazorElement)` -> додає PhazorElement до поточного PhazorElement.
20. `Element.src("url")` -> додає або вибирає src.
21. `Element.href("url")` -> додає або вибирає href.

# Насолоджуйтесь!
