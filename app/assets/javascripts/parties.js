var name = ""
var id = null
var test = {}
var attendees = []
var dishes = []
$.getJSON(window.location.href,function(data){
  var i = 0;
  test = data
  id = data.id
  name = data.name
  attendees = data.attendees
  dishes = data.dishes
  // host = $.getJSON(`/users/${data.host_id}`)
  $("#party-name").text(name)
  $("#edit-party").html(`<a href="./${id}/edit">Edit ${name}</a>`)
  for (i = 0; i < attendees.length; i++){
    $("#attendees-list").append(`<li>${attendees[i].name}</li>`)
  }
  for (i = 0; i < dishes.length; i++){
    $("#dishes-list").append(`<li>${dishes[i].id}</li>`)
    // needs food lookup
  }
})
// $(function(){
//   $.get("/parties/"+id+".json", function(data){
//
//   })
//   $("#party-name").text("test")
//
// })
