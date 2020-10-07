var THEMUSE_key="f2c4cefd923645dde166a1740a861046cb505a483466c2d34450aca5116d7571"

function fetchJobs() {
    let  jobs = [];
    var  queryURL = "https://www.themuse.com/api/public/jobs?api_key="+THEMUSE_key+"&page=1";
    $.ajax({
        url: queryURL, 
        method: "GET"
    }).done(function(response) {
        console.log(response.results[0])
        var job=response.results[0]
        var jobLocation=job.locations[0].name
        let jobName =job.name;
        let jobURL =job.refs.landing_page;

        let $jobDetails = $('ul#jobDetails');
        $jobDetails.find("#jobName").text(jobName);
        $jobDetails.find("#jobLocation").text(jobLocation);
        $jobDetails.find("#jobURL").attr("href", jobURL);


        //$.each(response, function (i ))
    })
}