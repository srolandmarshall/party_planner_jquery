var hosted_parties = []
var upcoming_parties = []
var past_parties = []
var user = {}

document.addEventListener("turbolinks:load", function() {
  showIndex()
})

function showIndex(){

  hostedParties();
  upcomingParties();

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
