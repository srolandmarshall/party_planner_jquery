var hosted_parties = []
var upcoming_parties = []
var attended_parties = []
var index_data = {}
var index_template = $("#index-template").innerHTML

document.addEventListener("turbolinks:load", function() {
  setParties()
})


function setParties(){
  $.getJSON("/parties.json",function(data){
    index_data = data
    hosted_parties = index_data.hosted_parties
    attended_parties = index_data.attended_parties
    upcoming_parties = index_data.upcoming_parties
    hostedParties()
    attendedParties()
    upcomingParties()
  })
}


function hostedParties(){
  if (hosted_parties.length < 1){
    $("#hosted-parties").hide()
  }
  else{
    $("#hosted-parties").show()
    hosted_parties.forEach(function(party){
      $("#hosted-party-list").append(`<li><a href="/parties/${party.id}">${party.name}</a></li>`)
    })

  }
}

function upcomingParties(){
  if (upcoming_parties.length < 1){
    $("#upcoming-parties").hide()
  }
  else{
    $("#upcoming-parties").show()
    upcoming_parties.forEach(function(party){
      $("#upcoming-party-list").append(`<li><a href="/parties/${party.id}">${party.name}</a></li>`)
    })
  }
}

function attendedParties(){
  if (attended_parties.length < 1){
    $("#attended-parties").hide()
  }
  else{
    $("#attended-parties").show()
    attended_parties.forEach(function(party){
      $("#attended-party-list").append(`<li><a href="/parties/${party.id}">${party.name}</a></li>`)
    })
  }
}
