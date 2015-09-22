Template.chat.events({
	"submit #chatform": function(event){
		
		event.preventDefault();
		
		var socialquestions = $("#socialquestions").val();
		var sexualquestions = $("#sexualquestions").val();
		var otherquestions = $("#otherquestions").val();
		console.log(socialquestions);
		
		$("#chatinput").val("");

		var profile = Meteor.user().profile;
		
		var chatline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				socialquestions:socialquestions,
				sexualquestions:sexualquestions,
				otherquestions:otherquestions,
				when: new Date()
			};
			
		console.dir(chatline);
		
		ChatLines.insert(chatline);
	}
});

Template.chat.helpers({
	chatlines: function(){
		return ChatLines.find({},{limit:10, sort:{when:-1}});
	},
	numchats: function(){
		return ChatLines.find().count();
	}
});