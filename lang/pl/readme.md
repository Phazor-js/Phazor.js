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
      src="https://img.shields.io/badge/License-Custom%202.0-blue.svg"
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
  <a href="#docs">Dokumenty</a> &nbsp;|&nbsp;
  <a href="https://github.com/Phazor-js/Phazor.js/blob/main/docs/pjs/public.js">Brać w czymś udział</a> &nbsp;|&nbsp;
  <a href="https://github.com/Phazor-js/Phazor.js/blob/main/SECURITY.md">Bezpieczeństwo</a> &nbsp;|&nbsp;
</p>
<a href="https://github.com/Phazor-js/Phazor.js/blob/main/docs/lang/pl/readme.md">Uwaga! Ta strona jest w 84% przetłumaczona <small>[Pomoc]</small></a>
<h2 id="docs">Co to jest phazor.JS?</h2>
Phazor.JS to framework firmy Plugin, który udostępnia funkcje podobne do jquery.<br>
Nie jest oparty na jquery, cały kod jest napisany przez PlurrYT (pythoniaweb).<br>
<br>

## Jak to działa?
Dokumentację znajdziesz na dole.

## Czy to jest płatne?
Nie. Phazor.JS jest darmowym frameworkiem, który nie wymaga żadnych opłat, aby uzyskać dostęp do jakiejkolwiek funkcji. Darowizny są jednak opcjonalne.<br>

## Jak mogę go użyć?
**Ostrzeżenie: ten framework zachowuje się inaczej na urządzeniach mobilnych i komputerach. Pamiętaj o tym podczas tworzenia aplikacji/gier, ponieważ może to spowodować ogromne problemy z renderowaniem.**
Załaduj instalator Phazor.js bez pobierania:
```HTML
<script id="phazorJS" src="https://phazor.js.org/pjs/stable.js"></script>
```
Lub zalecane
```HTML
<script>
var importpjs = document.createElement('script'); // tworzenie znacznika skryptu
importpjs.src = "https://phazor.js.org/pjs/stable.js"; // Adres URL wersji
importpjs.onload = function () {
   // Twój skrypt będzie tutaj
}; // Gdy skrypt jest w pełni załadowany, działa
document.head.appendChild(importpjs); // automatyczne wklejanie do nagłówka
</script>
```



<br>

## Najlepszy samouczek dotyczący obsługi
### Właściwości globalne
 1. `pjs("selector")` -> Zwraca przeanalizowany element PhazorElement.
 2. `pjs.parseElement(dom_element)` -> Zwraca pojedynczy przeanalizowany element PhazorElement.
 3. `pjs.parse(dom_elements)` -> Zwraca tablicę przeanalizowanych elementów PhazorElements lub zwraca pojedynczą, jeśli jest tylko jedna.
 4. `pjs.alert("text")` -> Pokazuje alert natywny.
 5. `pjs.prompt("text")` -> Monituje użytkownika o wprowadzenie danych, a następnie zwraca dane wprowadzone przez użytkownika.
 6. `pjs.get("https://url/", function() { [callback] })` -> Wykonuje żądanie HTTP GET i zwraca wartość za pomocą wywołania zwrotnego.
 7. `pjs.post("https://url/", {"post": "data"}, function() { [callback] })` -> Wykonuje żądanie HTTP POST z podanymi danymi i zwraca wartość za pomocą wywołania zwrotnego.
 8. `pjs.refresh()` -> Ponownie ładuje stronę.
 9. `pjs.open("https://url/")` -> Otwiera nowe okno z podanym adresem URL.
 10. `pjs.replace("https://url/")` -> Zastępuje bieżące okno podanym adresem URL.
 11. `pjs.random(min, max)` -> Zwraca losową liczbę między dwiema podanymi liczbami.
 13. `pjs.confirm("text")` -> Zwraca losową liczbę między dwiema podanymi liczbami.
 14. `pjs.setcookie("cookieone = value", "cookie expires in days (1)", "cookie path (/)")` -> Set cookie.
 15. `pjs.getcookie("cookie")` -> Returns a cookie value.
 16. `pjs.allcookies()` -> Zwraca wszystkie pliki cookie (KODOWANE). (CookieName=zakodowana wartość)
 17. `pjs.version()` -> Zwraca wersję Phazor.JS. (v1)
 18. `pjs.info()` -> Zwraca informacje o phazor. (Właściciel i witryna phazor.js).
 19. `pjs.noscript("text")` -> Utwórz element noscript z tekstem (jeśli nie obsługuje skryptów w przeglądarce (nie js))
 20. `pjs.favicon("url")` -> Zmień favicon na podany adres URL.
 21. `pjs.favicontext("text")` -> Zmień favicon na tekst (możesz wpisać emoji!).
 22. `pjs.clog("text")` -> Jak dziennik konsoli, ale tylko łatwa wersja.
 23. `pjs.cwarn("text")` -> Jak ostrzeżenie konsoli, ale tylko łatwa wersja.
 24. `pjs.cerror("text")` -> Jak błąd konsoli, ale tylko łatwa wersja.
 25. `pjs.terror("text")` -> Jak wyrzuć nowy błąd, ale tylko łatwą wersję.
 26. `pjs.cstime("text")` -> Start console timer.
 27. `pjs.cetime("text")` -> End console timer.

### Właściwości PhazorElement
TIP: `pjs("selector")` -> Zwraca przeanalizowany element PhazorElement.
1. `Element.dom` -> Zwraca element DOM elementu PhazorElement.
2. `Element.click(function() { [callback] })` -> Uruchamia wprowadzoną funkcję po kliknięciu elementu.
3. `Element.html("<some>html here</some>")` -> Przepisuje innerHTML elementu PhazorElement.
4. `Element.setcss("some: css;")` -> Ponownie zapisuje atrybut stylu elementu PhazorElement.
5. `Element.getcss("some")` -> Zwraca wartość CSS podanej nazwy atrybutu.
6. `Element.css("some", "css")` -> Modyfikuje atrybut stylu elementu PhazorElement, zachowując stare atrybuty.
7. `Element.setX(number)` -> Sets the value of the X axis of the PhazorElement based on viewport width.
8. `Element.setY(number)` -> Sets the value of the Y axis of the PhazorElement based on viewport width.
9. `Element.moveX(number)` -> Modifies the value of the X axis of the PhazorElement based on viewport width.
10. `Element.moveY(number)` -> Modifies the value of the Y axis of the PhazorElement based on viewport width.
11. `Element.fixW(number)` -> Sets the width of the PhazorElement based on viewport width.
12. `Element.fixH(number)` -> Sets the height of the PhazorElement based on viewport width.
13. `Element.fixW(number)` -> Modifies the width of the PhazorElement based on viewport width.
14. `Element.fixH(number)` -> Modifies the height of the PhazorElement based on viewport width.
15. `Element.set(x, y)` -> Sets the value of the X and Y axis of the PhazorElement based on viewport width.
16. `Element.move(x, y)` -> Modifies the value of the X and Y axis of the PhazorElement based on viewport width.
17. `Element.fix(w, h)` -> Sets the width and height of the PhazorElement based on viewport width.
18. `Element.fixS(w, h)` -> Modifies the width and height of the PhazorElement based on viewport width.
19. `Element.add(PhazorElement)` -> Adds a PhazorElement to the current PhazorElement.
20. `Element.src("url")` -> Adds or changes src.
21. `Element.href("url")` -> Adds or changes href.

# Andy'ego!
