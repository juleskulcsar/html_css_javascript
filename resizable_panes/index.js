$('.container').on('mouseup', function() {
    $('.container').off('mousemove');
});
$('.container').on('mousedown', function() {
    $('.container').on('mousemove', function(e) {
        let mousePosition = e.pageX;
        mousePosition -= $('.divider').offset().left;
        slide(mousePosition);
        function slide() {
            $('.before').css('width', mousePosition + 'px');
        }
    });
});
