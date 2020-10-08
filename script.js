$(document).ready(function () {
    $('select').formSelect();

    // Dynamically populate the countries.
    // fetchCountries();
    fetchJobs();

    $("#country").change(function(event) {
        const country = $( "#country option:selected").text();
        console.log(country  + " " + this.value);
    })
});