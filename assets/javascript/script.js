//Variable
var randomTVList = ["snl", "csi" , "ncis" , "doctor who" , "american horror story" , "westworld" , "the it crowd" , "sillicon valley" , "americas got talent"];
var startAnimation = [];
var stopAnimation = [];






//API Call to GIPHY
//function webAPIRetrieval() {

    var keyAPI = "bH52dsMR4iMXvtazjI8kQ4243fgBSwGX";
    var searchText = $(this).attr("data-name");
    var queryAPIURL = "http://api.giphy.com/v1/gifs/search?api_key=" + keyAPI + "&q=" + searchText + "&limit=10";
        
    $.ajax({
        url: queryAPIURL,
        method: "GET"
    }).done(function(response) {

        var results = response.data;

            console.log(response);

        $("#gifOutput").empty;

        for (var i=0; i<results.length; i++) {
            var gifDiv = $("<div>"); 
            gifDiv.addClass("gifDiv");

            //Rating
            var gifRating = $("<p>").text("Rating: " + results[i].rating);
            gifDiv.append(gifRating);
            gifDiv.addClass("gifRating");

            //Images/Animation
            var gifImage = $("<img>");
            gifImage.attr("imageStill", results[i].images.original_still.url);
            gifImage.attr("imageAnimation", results[i].images.original.url);
            gifDiv.append(gifImage);
            gifImage.addClass("gifImage");

            //Display
            $("#gifOutput").prepend(gifDiv);
            }

        });


        
//};

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

  //$(document).on("click", ".newGIPHYButton", webAPIRetrieval);

  renderButtons();