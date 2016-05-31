//名字云
$(function() {
    setInterval(function() {
        $('#aaaa,#navbar ul li a').each(function(i) {
            var r = parseInt(Math.random() * 255);
            var g = parseInt(Math.random() * 255);
            var b = parseInt(Math.random() * 255);
            $(this).css({
                color: 'rgb(' + r + ',' + g + ',' + b + ')'
            });
        });
    }, 500)
});
