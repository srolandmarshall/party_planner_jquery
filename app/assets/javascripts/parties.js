document.addEventListener("turbolinks:load", function() {
  if (window.location.href.includes("/parties/")){
    showPartyPage()
  }
  $("#add-dish").click(function(event){
    event.preventDefault();
    alert("TEST")
  })
  $("#cancel-dish").click(function(event){
    event.preventDefault();
    hideDishAdd()
  })
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

var p = new Party

function showPartyPage(){
  $.getJSON(window.location.href,function(data){
    party_json = data
    p.id = data.id
    p.partyName = data.name
    p.hostName = data.host_name
    p.dishes = data.dishes
    p.hostID = data.host_id
    p.attendees = data.attendees

    show_source=document.getElementById("show-party").innerHTML;
    var showTemp = Handlebars.compile(show_source)
    show_html = showTemp(p)
    $("#party-info").html(show_html)

    // everything below here is being re-written

    // if party is the host's party

    $("#edit-party").html(`<a href="./${p.id}/edit">Edit ${partyName}</a>`)
    // listAttendees();
    // renderDishes();
  })
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

function submitDish(){
  event.preventDefault()
  var values = $(this).serialize();
  debugger
}
