$(document).ready(function() {

        // preload the image for each link
        $("#image_list li").click(
                function() 
                {
                        $(this).toggleClass("minus");
                        $(this).next().slideToggle(1000);
                }
        );

        // set up the event handlers for each link

    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


    // move the focus to the first link

}); // end ready