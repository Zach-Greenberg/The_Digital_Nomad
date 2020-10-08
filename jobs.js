var THEMUSE_key="f2c4cefd923645dde166a1740a861046cb505a483466c2d34450aca5116d7571"

function fetchJobs() {
    let  jobs = [];
    var  queryURL = "https://www.themuse.com/api/public/jobs?category=Finance&page=0";
    $.ajax({
        url: queryURL, 
        method: "GET"
    }).then(function(response) {
        var jobListing = response.results
        console.log(jobListing);
        for (i = 0; i < 20; i++){ //need to change 20 to jobListing.length

            //create div for job information
            var jobDiv = $(`<div class = 'col s12 jobDetails' id = 'jobListing${i}'>`);
            
            //create h1 and p for information
            var jobCompany = $("<h4 class = jobTitle>");
            jobCompany.text(jobListing[i].company.name);

            var jobLocation = $("<p class = jobLocation>");
            jobLocation.text(jobListing[i].locations.name);

            var jobName = $("<p class = jobName>");
            jobName.text(jobListing[i].name);

            var jobRef = $("<a class = jobRef href = ''>");
            jobRef.attr("href", (jobListing[i].refs.landing_page));

            //append all that will be created
            jobDiv.append(jobCompany);
            jobDiv.append(jobLocation);
            jobDiv.append(jobName);
            jobDiv.append(jobRef);
            $("#resultsContainer").append(jobDiv);
        }

        //$.each(response, function (i ))
    })
}



// work on adding jobDeatils