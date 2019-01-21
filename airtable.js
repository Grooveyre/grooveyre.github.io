const DATABASE_URL = "https://api.airtable.com/v0/appnmJ4kX95S45tEM/"
const API_KEY = "keyb0Dx3zRgfrZ0hx"

var airtable_headers = {'authorization': 'Bearer ' + API_KEY, 'content-type': 'application/json'}

var airtable = {
  get: function (table, record_id, operation=console.log, extra_context=false) {
    var url = DATABASE_URL + table + '/' + record_id
    $.ajax({url: url, type: 'GET', headers: airtable_headers}).done(function(response){
      operation(response, extra_context)
    }).fail(function(response){
      console.error(
        "AirTable GET request has failed!" +
        "\n Url: " + url +
        "\n Status: " + response.status +
        "\n Response: " + response.responseText)
    })
  },
  update: function(table, record_id, data) {
    $('body').addClass("show-updating")
    var url = DATABASE_URL + table + '/' + record_id
    data = {'fields': data}
    data = JSON.stringify(data)
    $.ajax({url: url, type: 'PATCH', headers: airtable_headers, data: data}).done(function(response){
      $('body').removeClass("show-updating")
    }).fail(function(response){
      console.error(
        "AirTable UPDATE has failed!" +
        "\n Url: " + url +
        "\n Data: " + data +
        "\n Status: " + response.status +
        "\n Response: " + response.responseText)
    })
  },
  list: function (table, operation=console.log, params="") {
    var url = DATABASE_URL + table + '/' + params
    $.ajax({url: url, type: 'GET', headers: airtable_headers}).done(function(response){
      operation(response)
    }).fail(function(response){
      console.error(
        "AirTable LIST has failed!" +
        "\n URL: " + url +
        "\n Status: " + response.status +
        "\n Response: " + response.responseText)
    })
  }
}