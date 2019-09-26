$(document).ready(function(){
    $('.tooltipped').tooltip();


    var x = window.matchMedia("(min-width: 993px)")
    myFunction(x)
    function myFunction(x) {
        if (x.matches) {
            $("body").mousemove(function(e) {
                parallaxIt(e, ".html", -50);
                parallaxIt(e, ".js", -30);
                parallaxIt(e, ".css", -80);
                parallaxIt(e, ".php", -60);
                parallaxIt(e, ".mysql", -20);
                parallaxIt(e, ".sass", -30);
                parallaxIt(e, ".angular", -10);
                parallaxIt(e, ".ionic", -60);
                parallaxIt(e, ".express", -30);
                parallaxIt(e, ".laravel", -50);
                parallaxIt(e, ".bootstrap", -10);
                parallaxIt(e, ".xd", -35);
                parallaxIt(e, ".node", -60);
                parallaxIt(e, ".flutter", -20);
                parallaxIt(e, ".git", -40);
                parallaxIt(e, ".materialize", -50);
                parallaxIt(e, ".json", -30);
            });
            function parallaxIt(e, target, movement) {
                var $this = $("body");
                var relX = e.pageX - $this.offset().left;
                var relY = e.pageY - $this.offset().top;
            
                TweenMax.to(target, 1, {
                x: (relX - $this.width() / 4) / $this.width() * movement,
                y: (relY - $this.height() / 4) / $this.height() * movement
                });
            }
        }
    }
});