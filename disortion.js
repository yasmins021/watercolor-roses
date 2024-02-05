window.onload = function() {
    var c = document.getElementById('canv');
    var $ = c.getContext('2d');
    var ms = false;
    var w = 0, h = 0;
  
    var img = new Image();
    img.src = 'Images/events-2.jpg'; // Set the image source
  
    var set = function() {
      var run, _h, _w, dx, a;
      w = img.width;
      h = img.height;
      c.width = w + 5;
      c.height = h;
      $.translate(5, 0);
      a = 25;
      dx = 0;
      _w = w + 50;
      _h = h + 50;
      return (run = function() {
        var inc, i, j;
        $.clearRect(-a, -a, _w, _h);
        inc = ms === true ? 0.5 : 0.18;
        for (j = 0; j <= h; j++) {
          dx = ~~(inc * (Math.random() - 0.5) * a);
          $.drawImage(img, 0, j, w, 1, dx, j, w, 1);
        }
        window.requestAnimationFrame(run);
      })();
    };
  
    img.onload = function() {
      return set();
    };
    };