// function fetchCountries() {
//     let countries = [];
//     var queryURL = "https://travelbriefing.org/countries.json";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).done(function(response) {
//         let options = '';
//         $.each(response, function (i, countryInfo) {
//             console.log(i + " " + countryInfo.name);
//             // countries.push(countryInfo.name);
//             options += '<option value="' + countryInfo.url + '">' 
//                 + countryInfo.name + '</option>';
//         });

//         $('select#country').append(options);
//         $('select#country').formSelect();
//     })
//     .fail(function (jqXHR, status) {
//         countries.push("United States");
//     })
//     .always(function () {
//         let option = '';
//     });
// }

//get working again

function fetchCountries() {
    let countries = [];
    var travelURL = "https://travelbriefing.org/Netherlands?format=json";
    $.ajax({
        url: travelURL,
        method: "GET"
    }).then(function(travelInfo) {
        console.log(travelInfo);

    })
}
