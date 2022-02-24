$(document).ready(function () {

    // Custom JavaScript for the homepage


    // Initiate typed.js text effect (done custom for each typed text effect)
    $(".animated-text-effect").typed({
        // Enter your texts here, these texts are applied to light homepages
        strings: ["NFT's^", "Artists^", "Musicians^", "Creators^", "Influencers^", "Fundraising^"],
        contentType: "text",
        typeSpeed: 30,
        loop: true,
        backDelay: 4000,
        showCursor: false,
        startDelay: 0, // PRELOADER -- comment-out this line if you stop using page preloader
        cursorChar: "|"
    });

});