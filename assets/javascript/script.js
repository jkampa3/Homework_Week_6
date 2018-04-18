//Variable
var randomList = [];

//API Call to GIPHY
//function webAPIRetrieval() {

    var keyAPI = "bH52dsMR4iMXvtazjI8kQ4243fgBSwGX";
    var movie = $(this).attr("data-name");
    var queryAPIURL = "http://api.giphy.com/v1/gifs/search?api_key=" + keyAPI + "&q=" + movie + "&limit=10";
        
    $.ajax({
        url: queryAPIURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);

        });

//};

//Button Creation Function
function renderButtons() {

    $("#buttonOutput").empty();
        for (var i = 0; i < randomList.length; i++) {
        var a = $("<button>");
        a.addClass("movie-btn");
        a.attr("data-name", randomList[i]);
        a.text(randomList[i]);
        $("#buttonOutput").append(a);
    }
  };

//Click Event to Add Button
  $("#searchButton").on("click", function(event) {
        event.preventDefault();
        var movie = $("#searchText").val().trim();
        randomList.push(movie);
        renderButtons();
  });