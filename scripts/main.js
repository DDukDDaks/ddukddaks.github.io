// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })


    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("user_yjLL5xG0A3kkOCH5BGIDh");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + "님의 메시지가 정상적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약하기!");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", false);
        }, function (err) {
            alert("메시지 전송이 실패했습니다. 다시 시도해주세요.");
        });
    })
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});



// gallay more
$(document).ready(function () {
    var images = ['./images/pic18.jpg',
                 './images/pic1.jpg',
                 './images/pic16.jpg',
                './images/pic2.jpg',
                './images/pic7.jpg',
                './images/pic8.jpg',
                './images/pic17.jpg',
                './images/pic12.jpg',
                './images/pic13.jpg',
                './images/pic15.jpg',
                './images/pic9.jpg',
                './images/pic10.jpg',
                './images/pic14.jpg',
                './images/pic20.jpg',
                './images/pic4.jpg' ];
    var currentImageIndex;

    // 이미지 클릭시 팝업 창 열기
    var galleryImages = $('.gallery-image');
    galleryImages.on('click', function () {
        currentImageIndex = galleryImages.index($(this));
        showOverlay(currentImageIndex);
    });

    // 팝업 창 열기
    function showOverlay(index) {
        var overlay = $('.gallery-overlay');
        var image = $('.gallery-overlay-image');
        image.attr('src', images[index]);
        overlay.css('display', 'flex');
    }

    // 다음 이미지로 이동
    var nextButton = $('.gallery-next-button');
    nextButton.on('click', function () {
        currentImageIndex++;
        if (currentImageIndex === images.length) {
            currentImageIndex = 0;
        }
        showOverlay(currentImageIndex);
    });

    // 이전 이미지로 이동
    var prevButton = $('.gallery-prev-button');
    prevButton.on('click', function () {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
        showOverlay(currentImageIndex);
    });

    // 팝업 창 닫기
    var closeButton = $('.gallery-close-button');
    closeButton.on('click', function () {
        var overlay = $('.gallery-overlay');
        overlay.css('display', 'none');
    });
});

// gallay more
// window.onload = function() {
//     var images = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg','./images/pic4.jpg','./images/pic5.jpg','./images/pic6.jpg','./images/pic7.jpg','./images/pic8.jpg','./images/pic9.jpg','./images/pic10.jpg','./images/pic11.jpg','./images/pic12.jpg','./images/pic13.jpg','./images/pic14.jpg','./images/pic15.jpg','./images/pic16.jpg','./images/pic17.jpg','./images/pic18.jpg','./images/pic19.jpg','./images/pic20.jpg' ];
//     var currentImageIndex;

//     // 이미지 클릭시 팝업 창 열기
//     var galleryImages = document.querySelectorAll('.gallery-image');
//     for (var i = 0; i < galleryImages.length; i++) {
//         galleryImages[i].addEventListener('click', function() {
//         currentImageIndex = Array.prototype.indexOf.call(galleryImages, this);
//         showOverlay(currentImageIndex);
//         });
//     }

//     // 팝업 창 열기
//     function showOverlay(index) {
//         var overlay = document.querySelector('.gallery-overlay');
//         var image = document.querySelector('.gallery-overlay-image');
//         image.setAttribute('src', images[index]);
//         overlay.style.display = 'flex';
//     }

//     // 다음 이미지로 이동
//     var nextButton = document.querySelector('.gallery-next-button');
//     nextButton.addEventListener('click', function() {
//         currentImageIndex++;
//         if (currentImageIndex === images.length) {
//         currentImageIndex = 0;
//         }
//         showOverlay(currentImageIndex);
//     });

//     // 이전 이미지로 이동
//     var prevButton = document.querySelector('.gallery-prev-button');
//     prevButton.addEventListener('click', function() {
//         currentImageIndex--;
//         if (currentImageIndex < 0) {
//         currentImageIndex = images.length - 1;
//         }
//         showOverlay(currentImageIndex);
//     });

//     // 팝업 창 닫기
//     var closeButton = document.querySelector('.gallery-close-button');
//     closeButton.addEventListener('click', function() {
//         var overlay = document.querySelector('.gallery-overlay');
//         overlay.style.display = 'none';
//     });
// };

    // 마음을 전하실 곳

    $(document).ready(function() {
        // Groom's side
        const summaryText = $("#summary-text");
        const copySummaryButton = $("#copy-summary-button");
        
        copySummaryButton.click(function() {
            navigator.clipboard.writeText(summaryText.text())
            .then(() => {
                alert("복사되었습니다.");
            })
            .catch(() => {
                alert("복사에 실패하였습니다.");
            });
        });
        
        // Bride's side
        const summaryText2 = $("#summary-text2");
        const copySummaryButton2 = $("#copy-summary-button2");
        
        copySummaryButton2.click(function() {
            navigator.clipboard.writeText(summaryText2.text())
            .then(() => {
                alert("복사되었습니다.");
            })
            .catch(() => {
                alert("복사에 실패하였습니다.");
            });
        });
    });
    
    // window.onload = function() {
    //     // 신랑측
    //     const summaryText = document.getElementById("summary-text");
    //     const copySummaryButton = document.getElementById("copy-summary-button");
            
    //     copySummaryButton.addEventListener("click", () => {
    //         navigator.clipboard.writeText(summaryText.innerText)
    //         .then(() => {
    //         alert("복사되었습니다.");
    //         })
    //         .catch(() => {
    //             alert("복사에 실패하였");
    //         });
    //     });
    //     // 신부측
    //     const summaryText2 = document.getElementById("summary-text2");
    //     const copySummaryButton2 = document.getElementById("copy-summary-button2");
    //     copySummaryButton2.addEventListener("click", () => {
    //         navigator.clipboard.writeText(summaryText2.innerText)
    //         .then(() => {
    //             alert("복사되었습니다.");
    //         })
    //         .catch(() => {
    //             alert("복사에 실패하였");
    //         });
    //     });
    // };
    
