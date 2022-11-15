$(document).ready(function() {

        // preload the image for each link
        $("#image_list a").each(function() {
                var swappedImage = new Image();
                swappedImage.src = $(this).attr("href");
        });

        // set up the event handlers for each link
        $("#image_list a").click(function(evt) {
                $("#main_image").fadeOut(1000);
                $("#caption").fadeOut(1000);

                var imageURL = $(this).attr("href");
                $("#main_image").attr("src", imageURL);
        
                var caption = $(this).attr("title");
                $("#caption").text(caption);

                $("#main_image").fadeIn(1000);
                $("#caption").fadeIn(1000);

                // cancel the default action of each link
                evt.preventDefault();
        });
    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready