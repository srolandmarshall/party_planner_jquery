document.addEventListener("turbolinks:load", function() {
  if (window.location.href.includes("/parties/")){
    showPartyPage()
    $("#add-dish").click(function(){
      event.preventDefault();
      showDishAdd()
    })
    $("#cancel-dish").click(function(){
      event.preventDefault();
      hideDishAdd()
    })
  }
})

var partyName = ""
var partyID = null
var party_json = {}
var attendees = []
var dishes = []
var hostID = null
var hostName = ""
var i = 0;
var show_html = ""
var show_source = ""
var party_context = {}


function showPartyPage(){
  $.getJSON(window.location.href,function(data){
    party_json = data
    partyID = data.id
    partyName = data.name
    hostName = data.host_name
    // host = getHost(data.host_id)
    dishes = data.dishes //replace with getDishes()
    hostID = data.host_id

    // if party is the host's party
    $("#edit-party").html(`<a href="./${partyID}/edit">Edit ${partyName}</a>`)
    listAttendees();
    renderDishes();//consoldate into getDishes()?
    $("#add-dish").html(`<a href="#" id="add-dish">Add a dish</a>`)
  })
  show_source=document.getElementById("show-party").innerHTML;
  var showTemp = Handlebars.compile(show_source)
  show_html = showTemp(party_context)
  $("#party-info").html(show_html)
}
function showDishAdd(){
  var dish_source = document.getElementById("dish-add-form").innerHTML;
  var dishTemp = Handlebars.compile(dish_source)
  var context = {}
  var add_dish_html = dishTemp(context)
  $("#dish-add").html(add_dish_html)
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

function hideDishAdd(){
  $("#dish-add").hide()
}

function appendDish(dishID){
  var dishName="test"
  $.getJSON(`/dishes/${dishID}`,function(dish){
    $("#dishes-list").append(`<li>${dish.food.name} - ${dish.user.name}</li>`)
  })
}
