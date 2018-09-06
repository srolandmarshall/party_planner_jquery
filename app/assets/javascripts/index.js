var hosted_parties = []
var upcoming_parties = []
var attended_parties = []
var user = {}

document.addEventListener("turbolinks:load", function() {
  showIndex()
})

function showIndex(){
  setParties()
}

function setParties(){
  $.getJSON("/parties.json",function(data){
    user = data
    hosted_parties = user.hosted_parties
    attended_parties = user.attended_parties
    hostedParties()
  })
}


function hostedParties(){
  if (hosted_parties.length < 1){
    $("#hosted-parties").hide()
  }
  else{
    $("#hosted-parties").show()
  }
}

function upcomingParties(){
  if (upcoming_parties.length < 1){
    $("#upcoming-parties").hide()
  }
  else{
    $("#upcoming-parties").show()
  }
}

function attendedParties(){
  if (attended_parties.length < 1){
    $("#attended-parties").hide()
  }
  else{
    $("#attended-parties").show()
  }
}
