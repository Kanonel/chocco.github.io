const sections = $('.section');
const display = $(".maincontent");

const perfomTransition = sectionEq => {

    const position = sectionEq * -100;

    sections
        .eq(sectionEq)
        .addClass('active')
        .siblings()
        .removeClass('active');

    display.css({
        transform: `translateY(${position}%)`
    });


}

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next") {
        performTransition(nextSection.index());
    }

    if (direction === "prev") {
        performTransition(prevSection.index());
    }

}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    console.log(deltaY);

    if (deltaY > 0) {
        scrollToSection("next");
        //console.log("next");
    }

    if (deltaY < 0) {
        scrollToSection("prev");
    }
});