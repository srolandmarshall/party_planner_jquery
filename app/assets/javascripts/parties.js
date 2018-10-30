document.addEventListener("turbolinks:load", function() {
  if (window.location.href.includes("/parties/")){
    showPartyPage()
  }
  $("#cancel-dish").click(function(event){
    event.preventDefault();
    hideDishAdd()
  })
})

var i = 0;
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

    time = new Date(data.time)
    p.date = time.toDateString() + " at " + time.toLocaleTimeString()

    show_source=document.getElementById("show-party").innerHTML;
    var showTemp = Handlebars.compile(show_source)
    show_html = showTemp(p)
    $("#party-info").html(show_html)

    // everything below here is being re-written

    // if party is the host's party
    $("#edit-party").html(`${p.partyEditLink()}`)
    // listAttendees();
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
  var attendees = p.attendees
  for (i = 0; i < attendees.length; i++){
    $("#attendees-list").append(`<li>${attendees[i].name}</li>`)
  }
}

function hideDishAdd(){
  $("#dish-add").hide()
}

function submitDish(){
  $("#add-dish-form").submit(function(event){
    event.preventDefault()
    var values = $(this).serialize();
    var posting = $.post(`dishes/new`,values)
    posting.done(function(data){
      var dish = data
      $("#dishes-list").append(`<li>${dish.name} - ${dish.user.name}`)
    })
  })
}
