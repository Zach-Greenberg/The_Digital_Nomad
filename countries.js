function fetchCountries() {
    let countries = [];
    var travelURL = "https://travelbriefing.org/" + "Netherlands" + "?format=json";
    $.ajax({
        url: travelURL,
        method: "GET"
    }).then(function(reply) {
        console.log(reply);

    })
}





        // let options = '';
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