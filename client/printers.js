Template.Printers.events({
	"submit #printform": function(event){
		
		event.preventDefault();
		

		var Hall = $("#Hall").val();
		var printer = $("#Printer").val();
		var Price = $("#Price").val();
		var duplex = $("#duplex").val();
		var color = $("#color").val();
		
		$("#Hall").val("");
		$("#Printer").val("");
		$("#Price").val("");
		$("#duplex").val("");
		$("#color").val("");

		var profile = Meteor.user().profile;
		
		var printer = 
		  	{
				ownerId:Meteor.userId(),  
				owner:profile.firstName+" "+profile.lastName,
				Hall:Hall,
				Printer:printer,
				Price:Price,
				color:color,
				duplex:duplex,
				when: new Date()
			};
			
		console.dir(printer);
		
		Printers.insert(printer);
	}
});

Template.Printers.helpers({
	printers: function(){
		return Printers.find({},{limit:10, sort:{when:-1}});
	},
	numprinters: function(){
		return Printers.find().count();
	}
});