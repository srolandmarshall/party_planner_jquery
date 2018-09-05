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
    // host = getHost(data.host_id)
    dishes = data.dishes //replace with getDishes()
    changeHost(data.host_id)
    $("#edit-party").html(`<a href="./${id}/edit">Edit ${name}</a>`)
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
    appendDish(dishes[i].id)
  }
}

function changeHost(hostID){
  $.getJSON(`/users/${hostID}`,function(data){
      hostName = data.name
      hostURL = `/users/${hostID}`
      $("#host-name").append(`<a href="${hostURL}">${hostName}</a>`)
  })
}

function appendDish(dishID){
  var dishName="test"
  $.getJSON(`/dishes/${dishID}`,function(data){
    $("#dishes-list").append(`<li>${data.food.name} - ${data.user.name}</li>`)
  })
}
$(document).ready(showPage())
