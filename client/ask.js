Template.ask.events({
	"submit #askform": function(event){
		
		event.preventDefault();
		
		var appquestions = $("#appquestions").val();
		console.log(appquestions);
		
		$("#appquestions").val("");

		var profile = Meteor.user().profile;
		
		var askline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				appquestions:appquestions,
				when: new Date()
			};
			
		console.dir(askline);
		
		AskLines.insert(askline);
	}
});

Template.chat.helpers({
	asklines: function(){
		return AskLines.find({},{limit:10, sort:{when:-1}});
	},
	numchats: function(){
		return AskLines.find().count();
	}
});