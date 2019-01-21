//	"https://cdn.contentful.com/spaces/9anjgb8uaow7/entries?content_type=page&order=-fields.importance&access_token=d58efc31e918032547e317714c2ad771b2279bfd18d5260573d3372915f549aa"

const SPACE_ID = "zeqntiurfmai"
const ACCESS_TOKEN = "7e7bb339931ae9488651709bf9dca29691073b8f5b9327a1c0f59b3011015b7b"

var contentful_headers = {'content-type': 'application/json'}

var contentful = {
  list: function (operation=console.log, params="") {
    var url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&${params}`
    $.ajax({url: url, type: 'GET', headers: contentful_headers}).done(function(response){
      operation(response)
    }).fail(function(response){
      console.error(
        "Contentful LIST has failed!" +
        "\n URL: " + url +
        "\n Status: " + response.status +
        "\n Response: " + response.responseText)
    })
  }
}