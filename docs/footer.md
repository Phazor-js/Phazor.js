<p align="center">
  <a href="https://phazor.js.org/">English</a> &nbsp;|&nbsp;
  <a href="https://phazor.js.org/lang/ua">Українська</a> &nbsp;|&nbsp;
  <a href="https://phazor.js.org/lang/pl">Polski</a>
</p><br>
<p align="center">Copyright (c) 2023 Phazor.js</p>
<script>
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

   var t_images = [
                    'Phazor.JS | Free for Ever!',
                    'Phazor.JS | Best of Best!',
                    'Phazor.JS | Use it now!',
                ],
    t_counter = 0; 

setInterval(function() {
    function changePageTitle() {
            newPageTitle = t_images[t_counter];
            document.querySelector('title').textContent
                    = newPageTitle;
        }
    if(t_counter == t_images.length -1)
        t_counter = 0;
    }
    t_counter = t_counter + 1;
}, 10000);
    
</script>
