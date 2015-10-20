Template.Printers.events({
	"submit #printform": function(event){
		
		event.preventDefault();
		

		var Name = $("#Name").val()
		console.log(Name);
		var Hall = $("#Hall").val()
		console.log(Hall);
		var Name = $("#printer").val()
		console.log(Name);
		var Hall = $("#prices").val()
		console.log(Hall);
		
		
		$("#Name").val("");
		$("#Hall").val("");
		$("#Printers").val("");
		$("#Prices").val("");

		var profile = Meteor.user().profile;
		
		var printline = 
		  	{
				uid:Meteor.userId(),  
				who:Name,
				where:Hall,
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