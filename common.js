document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.goods4img-slider');
    const innerSlider = document.querySelector('.goods4img-inner');
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        startX = e.pageX - innerSlider.offsetLeft;
        scrollLeft = innerSlider.offsetLeft;
    });

    slider.addEventListener('click', (e) => {
        const clickX = e.pageX - slider.offsetLeft;
        const sliderWidth = slider.clientWidth;
        const imageWidth = sliderWidth / 3; // 3개의 이미지가 보이도록 설정

        if (clickX > sliderWidth / 2) {
            // 오른쪽 클릭: 다음 이미지를 보여줌
            const nextPosition = scrollLeft - imageWidth;
            innerSlider.style.left = `${Math.max(nextPosition, -(innerSlider.scrollWidth - sliderWidth))}px`;
        } else {
            // 왼쪽 클릭: 이전 이미지를 보여줌
            const prevPosition = scrollLeft + imageWidth;
            innerSlider.style.left = `${Math.min(prevPosition, 0)}px`;
        }
    });
});

