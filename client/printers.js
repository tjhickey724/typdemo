Template.Printers.events({
	"submit #printform": function(event){
		
		event.preventDefault();
		

		var Hall = $("#Hall").val();
		
		var printer = $("#Printer").val();
		
		var prices = $("#Price").val();
		
		
		$("#Hall").val("");
		$("#Printer").val("");
		$("#Price").val("");

		var profile = Meteor.user().profile;
		
		var printline = 
		  	{
				uid:Meteor.userId(),  
				who:profile.firstName+" "+profile.lastName,
				where:Hall,
				printer:
				Price:
				when: new Date()
			};
			
		console.dir(printline);
		
		PrintLines.insert(printline);
	}
});

Template.Printers.helpers({
	printlines: function(){
		return PrintLines.find({},{limit:10, sort:{when:-1}});
	},
	numprints: function(){
		return PrintLines.find().count();
	}
});