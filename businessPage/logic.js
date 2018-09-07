

$(document).ready(function(){
    var app = document.getElementById('heading');

    var typewriter = new Typewriter(app, {
        loop: true
    });
    
    typewriter.typeString('Hello World!')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Strings can be removed')
        .pauseFor(2500)
        .deleteChars(7)
        .typeString('altered!')
        .start();

/*
    $(document).on("scroll", function(){
        $("#navbar").css({
            backgroundColor: "black"
        })

    })

*/

}); //closes document ready

