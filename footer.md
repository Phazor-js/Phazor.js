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
    if(document.querySelector("title") !== null)
        document.querySelector("title").remove();
    document.querySelector("head").insertAdjacentHTML('beforeend', '<title>' + t_images[image_counter] + '</title>');
    if(t_counter == t_images.length -1)
        t_counter = 0;
    else
        t_counter++;
}, 10000);
    
</script>
