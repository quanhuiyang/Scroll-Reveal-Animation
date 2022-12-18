// 捲軸轉場動畫 兩秒完成 轉場效果：重複演示
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.main-title, .section-title', {
    delay: 200,
    origin: "left"
});

ScrollReveal().reveal('.sec-01 .image, .info', {
    delay: 600,
    origin: "bottom"
});

ScrollReveal().reveal('.text-box', { delay: 700, origin: "right" });

ScrollReveal().reveal('.media-icons i', {
    delay: 500,
    origin: "bottom",
    interval: 200,
});

ScrollReveal().reveal('.sec-02 .image, sec-03 .image', {
    delay: 500,
    origin: "left",
});

ScrollReveal().reveal('.media-info li', {
    delay: 500,
    origin: "left",
    interval: 200,
});
