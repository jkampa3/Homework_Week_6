//Variable
var randomList = ["britney spears", "beyonce" , "hristina aguilera" , "metallica" , "blink 182"];

//API Call to GIPHY
//function webAPIRetrieval() {

    var keyAPI = "bH52dsMR4iMXvtazjI8kQ4243fgBSwGX";
    var searchText = $(this).attr("data-name");
    var queryAPIURL = "http://api.giphy.com/v1/gifs/search?api_key=" + keyAPI + "&q=" + searchText + "&limit=10";
        
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
        a.addClass("newGIPHYButton");
        a.attr("data-name", randomList[i]);
        a.text(randomList[i]);
        $("#buttonOutput").append(a);
    }
  };

//Click Event to Add Button
function clickSearch() {
    
  $("#searchButton").on("click", function(event) {
        event.preventDefault();
        var searchInput = $("#searchText").val().trim();
        randomList.push(searchInput);
        renderButtons();
  });
};

  //stop animation


  //start animation




  //Page Load Events

  //$(document).on("click", ".newGIPHYButton", webAPIRetrieval);

  renderButtons();