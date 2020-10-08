$('select').formSelect();

//add click function to search for job type
    $("#jobSubmit").click(function(event){
        event.preventDefault();
        $("#resultsContainer").empty();

        let  jobs = $( "#jobOptions option:selected" ).text();

        var  queryURL = "https://www.themuse.com/api/public/jobs?category=" + jobs + "&page=0";//add ids to 
        $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function(response) { //forEach to create what i need into an object and push that into an array
            var jobListing = response.results
            console.log(jobListing);
            for (i = 0; i < 10; i++){ //need to change 20 to jobListing.length

                //create div for job information
                var jobDiv = $(`<div class = 'col s12 jobDetails' id = 'jobListing${i}'>`);
                
                //create h1 and p for information
                var jobCompany = $("<h4 class = 'jobTitle'>");
                jobCompany.text(jobListing[i].company.name);

                var jobLocation = $("<p class = 'jobLocation'>");
                jobLocation.text(jobListing[i].locations[0].name);

                var jobName = $("<p class = 'jobName'>");
                jobName.text(jobListing[i].name);

                var jobRef = $("<a id='jobURL' target ='_blank'>Apply</a>");
                jobRef.attr("href", (jobListing[i].refs.landing_page));

                //append all that will be created
                jobDiv.append(jobCompany);
                jobDiv.append(jobLocation);
                jobDiv.append(jobName);
                jobDiv.append(jobRef);
                $("#resultsContainer").append(jobDiv);
            }
        })
    })
  
    //add click function to search for weather in a city
$("#citySubmit").click(function(event){
    const apiKey = "&appid=39889f788ff3fd3d6d6270348600fc5b";
        event.preventDefault();
        $(".weatherInfo").empty();

        let  cityName = $("#citySearch").val();
        var  weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial' + apiKey;
        $.ajax({
            url: weatherURL, 
            method: "GET"
        }).then(function(weatherResponse) {
            console.log(weatherResponse);

                //create div for weather information
                var weatherDiv = $(`<div class = 'col s12 weahterDetails' id = 'weatherDiv'>`);
                
                //create h and p for information
                var cityName = $("<h4 class = cityName>");
                cityName.text(weatherResponse.name);

                var weather = $("<p class = 'weatherDescription'>")
                weather.text("Current Condition " + weatherResponse.weather[0].description);

                var wind = $("<p class = 'wind'>");
                wind.text("Wind Speed:" + weatherResponse.wind.speed + " MPH");

                var humidity = $("<p class = 'humidity'>");
                humidity.text("Humidity: " + weatherResponse.main.humidity + "%");

                var temp = $("<p class = 'temp'>");
                temp.text("Temperature: " + weatherResponse.main.temp + " (F)");

                //append all that will be created
                weatherDiv.append(cityName);
                weatherDiv.append(weather);
                weatherDiv.append(wind);
                weatherDiv.append(humidity);
                weatherDiv.append(temp);
                $(".weatherInfo").append(weatherDiv);
        })
})