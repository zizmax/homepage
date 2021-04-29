$(".slides").sortable({
     placeholder: 'slide-placeholder',
    axis: "y",
    revert: 150,
    start: function(e, ui){
        
        placeholderHeight = ui.item.outerHeight();
        ui.placeholder.height(placeholderHeight + 15);
        $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
    
    },
    change: function(event, ui) {
        
        ui.placeholder.stop().height(0).animate({
            height: ui.item.outerHeight() + 15
        }, 300);
        
        placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));
        
        $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
            height: 0
        }, 300, function() {
            $(this).remove();
            placeholderHeight = ui.item.outerHeight();
            $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
        });
        
    },
    stop: function(e, ui) {
        
        $(".slide-placeholder-animator").remove();
        
    },
});

var set = false;
var md = "## Wow markdown!"
function run() {
  var text = document.getElementById('md').value,
      target = document.getElementById('mdout'),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);

    md = text;

    target.innerHTML = html;
    set = true;
}


document.addEventListener("DOMContentLoaded", function(event) {
    var something = document.getElementById('mdout');
    // Your code to run since DOM is loaded and ready
    something.onclick = function() {
        if (set) {
            something.innerHTML = "<textarea id='md' onblur='run()'>" + md + "</textarea>";
            set = false;
        }
    };

    var smth = document.getElementById('quoteblock');
    let quotes = ["We're going to pivot.", "DOGE is a real investment", "SPX only goes up."];
    smth.onclick = function() {
        var item = quotes[Math.floor(Math.random() * quotes.length)];
        smth.innerHTML = item;
    };

    $('#slides').sortable({
            group: 'list',
    animation: 200,
    ghostClass: 'ghost',
    });
    $('#slides2').sortable({
            group: 'list',
    animation: 200,
    ghostClass: 'ghost',
    });
    window.mySwipe = $('#slider').Swipe().data('Swipe');
    console.log(window.mySwipe.getNumSlides());
});

