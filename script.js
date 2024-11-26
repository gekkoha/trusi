document.getElementById("randomImageButton").addEventListener("click", function() {
    const images = [
        "https://manline.com.ua/image/cache/650-696/data/atlantic/2019/2019_07/mh-1049-white.jpg",
        "https://ae04.alicdn.com/kf/S27ce97a78f2e48f78ff527d0bc824ba9n.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoo9vv2Hbsz3Ad4k9bggnKB6i6jD4ZwJqdOw&s",
        "https://s.alicdn.com/@sc04/kf/Ha97c8a5a8cc649d1a0ee2b1dc271a2d6d.jpg_300x300.jpg",
        "https://funny.klev.club/uploads/posts/2024-03/funny-klev-club-p-smeshnie-kartinki-trusi-muzhskie-3.jpg",
        "https://maximumstyle.ru/images/catalog/productvar_34407.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGM-wJj4bfZrnNGoGpCOeCrN-WTmMALk0xw&s",
        "https://ae-pic-a1.aliexpress-media.com/kf/Scb89c05e0ce147b7ae9fb71d4aea13d1J.jpg",
        "https://images.prom.ua/1764664567_w600_h600_1764664567.jpg",
        "https://m.media-amazon.com/images/I/51e7Cos9kQL._AC_UY1000_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjT1Ic1jCl-FxpeybUEzeAjDPl2iGgKF4lw&s",
        "https://img.klubok.com/img/used/2018/02/09/16160/16160124_2.jpg",
        "https://funny.klev.club/uploads/posts/2024-03/funny-klev-club-p-smeshnie-kartinki-sherstyanie-trusi-28.jpg",
        "https://ae04.alicdn.com/kf/S04deeb3e08eb489698787b1153cf6033U.jpg_480x480.jpg",
        "https://ae04.alicdn.com/kf/S197f4753bd804063a85c466480597309j.jpg_480x480.jpg",
        "https://grizly.club/sec2/uploads/posts/2024-02/grizly-club-p-idei-podarok-dlya-muzhchin-muzhskie-trusi-26.jpg",
        "https://b.itemimg.com/i/263454426.1.jpg",
        "https://maximumstyle.ru/images/catalog/productvar_137842.jpg",
        "https://lh4.googleusercontent.com/proxy/Rkn-laqnImINCiuSc86eTom-7av4q1hjwUWXQyLlg7uw5FyBWFg7xvP82DwpeD4qK7RtH22lIP71siqhnqbgRRmt",

    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.createElement("img");
    imgElement.src = images[randomIndex];
    document.getElementById("imageContainer").appendChild(imgElement);
     // Очистка контейнера перед добавлением нового изображения
     const imageContainer = document.getElementById("imageContainer");
     imageContainer.innerHTML = "";
     imageContainer.appendChild(imgElement);
});
