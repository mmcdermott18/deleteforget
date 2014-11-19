<script>
            (function makeDiv(){
                var divsizeX = ((Math.random()*1000)).toFixed();
                var divsizeY = ((Math.random()*500)).toFixed();
                var imgNum = (Math.ceil(Math.random()*16));
                $newdiv = $('<div/>').css({
                    'width': divsizeX+ 'px',
                    'height': divsizeY+ 'px',
                    'opacity': '.75',
                    'background-image': 'url("img/'+imgNum+'.png")',
                });
                var posx = (Math.random() * ($(document).width() - divsizeX)).toFixed();
                var posy = (Math.random() * ($(document).height() - divsizeY)).toFixed();
                $newdiv.css({
                    'position':'absolute',
                    'left':posx+'px',
                    'top':posy+'px',
                    'display':'none',
                    'z-index':'-1'
                }).appendTo( 'body' ).fadeIn(1000).delay(4000).fadeOut(1000, function(){
                        $(this).remove();
                        makeDiv(); 
                    }); 
            })();
        </script>
        <script>
            (function makeDiv(){
                var divsizeX = ((Math.random()*1000)).toFixed();
                var divsizeY = ((Math.random()*500)).toFixed();
                var imgNum = (Math.ceil(Math.random()*16));
                $newdiv = $('<div/>').css({
                    'width': divsizeX+ 'px',
                    'height': divsizeY+ 'px',
                    'opacity': '.75',
                    'background': 'url("img/'+imgNum+'.png") no-repeat center',
                });
                var posx = (Math.random() * ($(document).width() - divsizeX)).toFixed();
                var posy = (Math.random() * ($(document).height() - divsizeY)).toFixed();
                $newdiv.css({
                    'position':'absolute',
                    'left':posx+'px',
                    'top':posy+'px',
                    'display':'none',
                    'z-index':'-1'
                }).appendTo( 'body' ).fadeIn(500).delay(2000).fadeOut(500, function(){
                        $(this).remove();
                        makeDiv(); 
                    }); 
            })();
        </script>
         <script>
            (function makeDiv(){
                var divsizeX = ((Math.random()*1000)).toFixed();
                var divsizeY = ((Math.random()*500)).toFixed();
                var imgNum = (Math.ceil(Math.random()*16));
                $newdiv = $('<div/>').css({
                    'width': divsizeX+ 'px',
                    'height': divsizeY+ 'px',
                    'opacity': '.75',
                    'background-image': 'url("img/'+imgNum+'.png")',
                });
                var posx = (Math.random() * ($(document).width() - divsizeX)).toFixed();
                var posy = (Math.random() * ($(document).height() - divsizeY)).toFixed();
                $newdiv.css({
                    'position':'absolute',
                    'left':posx+'px',
                    'top':posy+'px',
                    'display':'none',
                    'z-index':'-1'
                }).appendTo( 'body' ).fadeIn(250).delay(1000).fadeOut(250, function(){
                        $(this).remove();
                        makeDiv(); 
                    }); 
            })();
        </script> 