function fetchJobs() {

    //add click function to search for job type
    $("#jobSubmit").click(function(event){
        event.preventDefault();
        $("#resultsContainer").empty();

        let  jobs = $( "#jobOptions option:selected" ).text();
        console.log(jobs);
        var  queryURL = "https://www.themuse.com/api/public/jobs?category=" + jobs + "&page=0";//add ids to 
        $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function(response) { //forEach to create what i need into an object and push that into an array
            var jobListing = response.results
            console.log(jobListing);
            for (i = 0; i < 20; i++){ //need to change 20 to jobListing.length
                console.log(jobListing[i]);

                //create div for job information
                var jobDiv = $(`<div class = 'col s12 jobDetails' id = 'jobListing${i}'>`);
                
                //create h1 and p for information
                var jobCompany = $("<h4 class = jobTitle>");
                jobCompany.text(jobListing[i].company.name);

                var jobLocation = $("<p class = jobLocation>");
                jobLocation.text(jobListing[i].locations[0].name);

                var jobName = $("<p class = jobName>");
                jobName.text(jobListing[i].name);

                var jobRef = $("<button target='_blank'>Link to Job</button>");
                jobRef.attr("href", (jobListing[i].refs.landing_page)); //get working

                //append all that will be created
                jobDiv.append(jobCompany);
                jobDiv.append(jobLocation);
                jobDiv.append(jobName);
                jobDiv.append(jobRef);
                $("#resultsContainer").append(jobDiv);
            }
        })
    })
}

const apiKey = "&appid=39889f788ff3fd3d6d6270348600fc5b";

  
function fetchWeather() {

    //add click function to search for job type
    $("#citySubmit").click(function(event){
        event.preventDefault();
        $("#weatherInfo").empty();

        let  cityName = "Austin";
        // $("#citySearch").val();
        console.log(cityName);
        var  weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + apiKey;
        $.ajax({
            url: weatherURL, 
            method: "GET"
        }).then(function(weatherResponse) {
            // var jobListing = response.results
            console.log(weatherResponse);

                // //create div for weather information
                // var weatherDiv = $(`<div class = 'col s12 weahterDetails' id = 'weatherDiv'>`);
                
                // //create h1 and p for information
                // var jobCompany = $("<h4 class = jobTitle>");
                // jobCompany.text(jobListing[i].company.name);

                // var jobLocation = $("<p class = jobLocation>");
                // jobLocation.text(jobListing[i].locations[0].name);

                // var jobName = $("<p class = jobName>");
                // jobName.text(jobListing[i].name);

                // var jobRef = $("<button target='_blank'>Link to Job</button>");
                // jobRef.attr("href", (jobListing[i].refs.landing_page)); //get working

                // //append all that will be created
                // jobDiv.append(jobCompany);
                // jobDiv.append(jobLocation);
                // jobDiv.append(jobName);
                // jobDiv.append(jobRef);
                // $("#resultsContainer").append(jobDiv);
        })
    })
}
