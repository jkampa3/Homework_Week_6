$( document ).ready(function() {

//Variable
var randomTVList = ["snl", "csi" , "ncis" , "doctor who" , "american horror story" , "westworld" , "the it crowd" , "sillicon valley" , "americas got talent" , "jersey shore"];

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
            gifImage.attr("src", results[i].images.fixed_height_small_still.url);
            gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
            //console.log(results[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
            //console.log(results[i].images.fixed_height.url);
            gifImage.attr("data-state", "still");
            gifImage.addClass("gifImage");

            //Display
            
            gifDiv.append(gifImage);
            gifDiv.append(gifRating);
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
    
  $("#searchButton").on("click", function(event) {
        event.preventDefault();
        var searchInput = $("#searchText").val().trim();
        randomTVList.push(searchInput);
        renderButtons();
  });


//Button Click Events

  $(document).on("click", ".newGIPHYButton", webAPIRetrieval);

  $(document).on("click", ".gifImage", function(){
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});

  //Page Load Events

  renderButtons();

});