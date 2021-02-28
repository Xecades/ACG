var total = 278;
var masonry = document.getElementById("masonry");
var prefix = "https://cdn.jsdelivr.net/gh/Xecades/ACG/image/";

(() => {
    for (var i = 1; i < total; i++) {
        masonry.innerHTML += `<div data-fancybox='gallery' class='post-item col-xs-6 col-sm-4 col-md-3 col-lg-2' data-src='${prefix}${i}.webp'><img class='post-item-img lazy' data-original='${prefix}${i}.webp'></div>`;
    }

    // fancybox3
    $(function () {
        $('[data-fancybox="gallery"]').fancybox({
            toolbar: true,
            loop: false,
            smallBtn: false,
            buttons: ["zoom", "fullScreen", "download", "thumbs", "close"],
            iframe: {
                preload: false,
            },
        });
    });

    // lazyload
    $(function () {
        $("img.lazy").lazyload({
            placeholder: "/lazy.gif",
            effect: "fadeIn",
            load: function (ele) {
                var $container = $("#masonry");
                $container.imagesLoaded(function () {
                    $container.masonry({
                        itemSelector: ".post-item",
                        gutter: 0,
                        isAnimated: true,
                    });
                });
            },
        });
    });
})();
