// firebase start
var database = firebase.database();
var info = {
  firstName: $("#fname").val(),
  lastName: $("#lname").val(),
  dob: $("#datepicker").val()
}


<<<<<<< HEAD
	
//firebase end

database.ref().child("/User").once("value", function(snapshot) {
  var userData = snapshot.val();
  var keys = Object.keys(userData);
  console.log(keys);

for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var first = userData[k].firstName;
		var last = userData[k].lastName;
		var bday = userData[k].dob;
		console.log(first, last, bday);
	}
=======

$("#submitBtn").on("click", function(){

  database.ref("/User").push(
    info = {
      firstName: $("#fname").val(),
      lastName: $("#lname").val(),
      dob: $("#datepicker").val()
  })
});

database.ref().child("/User").once("value", function(snapshot) {
  var userData = snapshot.val();
  console.log(userData);
  var keys = Object.keys(userData);
  console.log(keys);

  for (var i = 0; i < keys.length; i++){
    var k = keys[i];
    var first = userData[k].firstName;
    var last = userData[k].lastName;
    var bday = userData[k].dob;

    $('.fc-day').each(function() {
      var date = $(this).data('date');
      $(this).val(date);
      //the last was a test --- need to figure out how to make date input yyyy-mm-dd
      if("2017-"+bday === date){
      $(this).text("It is " + first + "'s birthday! Click to send message")
  }
})
}
>>>>>>> b1219e72f11b8ecf870faf9bb04ce8f3bd2a1dd2
});
//firebase end

<<<<<<< HEAD





  //datePicker function
  $( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
  } );


=======
jQuery(function($){
   $("#datepicker").mask("99-99",{placeholder:"mm-dd"});
 });

  //
  // $( function() {
  //   $( "#datepicker" ).datepicker({
  //     showOtherMonths: true,
  //     selectOtherMonths: true
  //   });
  // } );
>>>>>>> b1219e72f11b8ecf870faf9bb04ce8f3bd2a1dd2
