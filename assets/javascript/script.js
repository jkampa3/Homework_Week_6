$( document ).ready(function() {


//Variable
var randomTVList = ["snl", "csi" , "ncis" , "doctor who" , "american horror story" , "westworld" , "the it crowd" , "sillicon valley" , "americas got talent"];
var startAnimation = [];
var stopAnimation = [];






//API Call to GIPHY
function webAPIRetrieval() {

    var keyAPI = "bH52dsMR4iMXvtazjI8kQ4243fgBSwGX";
    var searchText = $(this).attr("data-name");
    var queryAPIURL = "http://api.giphy.com/v1/gifs/search?api_key=" + keyAPI + "&q=" + searchText + "&limit=10";
        
    $.ajax({
        url: queryAPIURL,
        method: "GET"
    }).done(function(response) {

        var results = response.data;

            console.log(response);

        $("#gifOutput").empty();

        for (var i=0; i<results.length; i++) {
            var gifDiv = $("<div>"); 
            gifDiv.addClass("gifDiv");

            //Rating
            var gifRating = $("<p>").text("Rating: " + results[i].rating);
            gifDiv.addClass("gifRating");

            //Images/Animation
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.original_still.url);
            gifImage.attr("imageStill", results[i].images.original_still.url);
            //console.log(results[i].images.fixed_height_still.url);
            gifImage.attr("imageAnimation", results[i].images.original.url);
            //console.log(results[i].images.fixed_height.url);
            gifImage.addClass("gifImage");

            //Display
            gifDiv.append(gifRating);
            gifDiv.append(gifImage);
            $("#gifOutput").prepend(gifDiv);
            }

        });
        
};

//Button Creation Function
function renderButtons() {

    $("#buttonOutput").empty();
        for (var i = 0; i < randomTVList.length; i++) {
        var tvButtons = $("<button>");
        tvButtons.addClass("newGIPHYButton");
        tvButtons.attr("data-name", randomTVList[i]);
        tvButtons.text(randomTVList[i]);
        $("#buttonOutput").append(tvButtons);
    }
  };

//Click Event to Add Button
//function clickSearch() {
    
  $("#searchButton").on("click", function(event) {
        event.preventDefault();
        var searchInput = $("#searchText").val().trim();
        randomTVList.push(searchInput);
        renderButtons();
  });
//};

  //stop animation


  //start animation




  //Page Load Events

  $(document).on("click", ".newGIPHYButton", webAPIRetrieval);

  $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  renderButtons();

});