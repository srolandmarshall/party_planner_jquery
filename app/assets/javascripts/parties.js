var name = ""
var id = null
var test = {}
$.getJSON(window.location.href,function(data){
  test = data
  $("#party-name").text(data.name)
})
// $(function(){
//   $.get("/parties/"+id+".json", function(data){
//
//   })
//   $("#party-name").text("test")
//
// })
