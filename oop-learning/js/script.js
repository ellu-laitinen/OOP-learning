function getRandomInt(min, max) {
    min =Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1)) + min;
}


function makeBird() {
    return {
        birdId: null,
        birdSize: null,
        addBird: function() {
            var _newBird = document.createElement('img');
            _newBird.src = 'asset/img/img2.png';
            _newBird.className = 'bird';
            _newBird.id = this.birdId;
            _newBird.style.width= this.birdSize;

            document.body.appendChild(_newBird);
        },
        init: function(){
            this.birdId = 'bird_' + getRandomInt(0, 12345);
            this.birdSize = getRandomInt(50, 500) + 'px';
            this.addBird();
        }
    };
}

var bird1 = makeBird();
bird2 = makeBird();
bird3 = makeBird();



bird1.init();
bird2.init();



$(window).scroll(function(event){
    var offset = $(window).scrollTop();

    var imgX = offset/50;
    var img2 = offset/20;
    var pipeX = offset /5;

    console.log(imgX);
    $('#background').css('background-position', imgX + 'px 0px');
    $('#pipe').css('left', pipeX);
    $('#bird').css("left", img2);

   /*  setInterval(function() {
        $('#img2').animate({ 'top': '-=100px'}, '500');
        $('#img2').css('transform', 'rotate (' + 45 + 'deg)');
        $('#img2').animate({ 'top': '+=100px'}, '500');

    }, 1100); */

    $(document).on('click', flyUp);

    function flyDown() {
        $('#bird'). attr('style', 'transform: rotate(-45deg)');
        $('#bird').animate({'top': '+=100px'}, 500 );

    }

    function flyUp() {
        $('#bird').animate({ 'top': '-=100px'}, 500);
        flyDown();
    }
    
});