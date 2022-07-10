<html> 

<head>
    <title>BoomHost - Phazor.JS</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="/favicon.png">
    <link rel="stylesheet" href="https://unpkg.com/jquery.terminal/css/jquery.terminal.min.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://unpkg.com/jquery.terminal/js/jquery.terminal.min.js"></script>
	<script src="https://unpkg.com/showdown/dist/showdown.min.js"></script>
    <script class="phazorJS" src="http://api.boomhost.ml/pjs.js"></script>
</head>

<body>
<div style="text-align: center; width: 100%;">
<img href="" style="" src="/favicon.png"></img>
<br><br><br><br><br><br><br><br>
</div>
	<my-element>By BoomHost API | Made by PlurrYT</my-element>
    <hr>
    <div script="epjsinfo()"></div>
	<div id="readme">
	</div>
	<br><br>

    <script>
        
		setTimeout(function(){
			let converter = new showdown.Converter();
    		pjs.get('/readme.md', function(text) {
				let html = converter.makeHtml(text);
				pjs("#readme").html(html);
			});
            
			pjs("img").set(22, -5)
			setInterval(function(){
				pjs("img").moveX(-10)
					setTimeout(function() { 
					pjs("img").moveX(10)
				}, 250)
			}, 500)
		},200);
        
    </script>
   
</body>

</html>
