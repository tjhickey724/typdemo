Template.chat.events({
	"submit #chatform": function(event){
		
		event.preventDefault();
		
		var questions = $("#questions").val();
		var comments  = $("#comments").val();
		console.log(questions);
		console.log(comments);
		
		$("#questions").val("");
		$("#comments").val("");
		var profile = Meteor.user().profile;
		
		var chatline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["username"], 
				questions:questions,
				comments:comments,
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