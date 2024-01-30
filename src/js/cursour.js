var cursour = document.getElementById('main-cursour');
var limitedCursour = document.getElementById('limited-cursour');
var footerElement = document.getElementById('footer');

let delay = 0;

document.addEventListener('mousemove', (e) => {

    var footerElementPosition = footerElement.getBoundingClientRect();

    let footerStartPoint = footerElementPosition.top;
    let footerEndPoint = footerElementPosition.bottom;
    let footerHeight = footerEndPoint - footerStartPoint;

    let footerWidthStartPoint = footerElementPosition.left;
    let footerWidthEndPoint = footerElementPosition.right;
    let footerWidth = footerWidthEndPoint - footerWidthStartPoint;

    footerStartPoint = footerStartPoint + footerHeight * 0.0;
    footerEndPoint = footerEndPoint - footerHeight * 0.0;

    footerWidthStartPoint = footerWidthStartPoint + footerWidth * 0.12;
    footerWidthEndPoint = footerWidthEndPoint - footerWidth * 0.12;
    
    if(e.clientY >= footerStartPoint && e.clientY <= footerEndPoint) {
        let heightPercentage = (e.clientY - footerStartPoint) / (footerEndPoint - footerStartPoint);
        let widthPercentage = (e.clientX - footerWidthStartPoint) / (footerWidthEndPoint - footerWidthStartPoint);

        heightPercentage = Math.min(Math.max(heightPercentage, 0.0), 1.0);
        widthPercentage = Math.min(Math.max(widthPercentage, 0.12), 0.88);

        let heightInPixels = (footerEndPoint - footerStartPoint) * heightPercentage;
        let widthInPixels = (footerWidthEndPoint - footerWidthStartPoint) * widthPercentage;

        

        //delay 1.5s
        if(delay == 0) {
            delay = 1;
            setTimeout(function() {
                limitedCursour.style.left = widthPercentage * 100 + '%';
                limitedCursour.style.top = heightPercentage * 100 + '%';
                delay = 0;
            }, 100);
        }
    } else {
        limitedCursour.style.left = '50%';
        limitedCursour.style.top = '50%';
    }

    cursour.style.transform = 'translate3d(' + e.clientX + 'px, ' + e.clientY + 'px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    cursour.style.willChange = 'transform';
    cursour.style.transformStyle = 'preserve-3d';
});