let Index = 1;
ShowThiSlides(Index);

function ShowThiSlides(x) {
    let i;
    let slides = document.getElementsByClassName("fullslide");
    let picIndex = document.getElementsByClassName("smallpic");
    let captionText = document.getElementById("caption");
    if (x > slides.length) {
        Index = 1;
    }
    if (x < 1) {
        Index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < picIndex.length; i++) {
        picIndex[i].className = picIndex[i].className.replace(" active", "");
    }
    slides[Index - 1].style.display = "block";
    picIndex[Index - 1].className += " active";
    captionText.innerHTML = picIndex[Index - 1].alt;
}

// כפתורים
function moveSlide(BackOrFoforth) {
    ShowThiSlides((Index += BackOrFoforth));
}

// תמונות קטנות
function GoToThiSlide(numOfSlide) {
    ShowThiSlides((Index = numOfSlide));
}
