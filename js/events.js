function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt(){
  $('img').on('load', function() {
   $('img').addClass('tasty')
 })
}

function pressIt(){
  $('#typing').on('keydown', function(e){
    if(e.which === 71){
      alert('G was pressed.')
    }
  })
}

function submitIt(){
  $('submit').on('submit', function(e){
    alert('Your form is going to be submitted now.')
})
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
});
