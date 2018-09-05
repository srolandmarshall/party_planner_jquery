var name = ""
var id = null
var party_json = {}
var attendees = []
var dishes = []
function showPage(){
  $.getJSON(window.location.href,function(data){
    var i = 0;
    party_json = data
    id = data.id
    name = data.name
    attendees = data.attendees
    dishes = data.dishes //replace with getDishes()
    host = data.host_id //replace with getHost()
    $("#party-name").text(name)
    $("#edit-party").html(`<a href="./${id}/edit">Edit ${name}</a>`)
    $("#host-name").append(host)
    listAttendees();
    renderDishes();//consoldate into getDishes()?
    $("#add-dish").html(`<a href="./${id}/dishes/new">Add a dish</a>`)
  })
}

function listAttendees(){
  attendees = party_json.attendees
  for (i = 0; i < attendees.length; i++){
    $("#attendees-list").append(`<li>${attendees[i].name}</li>`)
  }
}

function renderDishes(){
  dishes = party_json.dishes
  for (i = 0; i < dishes.length; i++){
    $("#dishes-list").append(`<li>${dishes[i].id}</li>`)
    // needs food lookup
  }
}
$(document).ready(showPage())
