document.addEventListener("turbolinks:load", function() {
  showPage()
})

var partyName = ""
var partyID = null
var party_json = {}
var attendees = []
var dishes = []
var hostID = null
var i = 0;

function showPage(){
  $.getJSON(window.location.href,function(data){
    party_json = data
    partyID = data.id
    partyName = data.name
    // host = getHost(data.host_id)
    dishes = data.dishes //replace with getDishes()
    hostID = data.host_id
    changeHost(hostID)
    // if party is the host's party
    $("#edit-party").html(`<a href="./${partyID}/edit">Edit ${partyName}</a>`)
    listAttendees();
    renderDishes();//consoldate into getDishes()?
    $("#add-dish").html(`<a href="./${partyID}/dishes/new">Add a dish</a>`)
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
  $.getJSON(`/dishes/${dishID}`,function(dish){
    $("#dishes-list").append(`<li>${dish.food.name} - ${dish.user.name}</li>`)
  })
}
