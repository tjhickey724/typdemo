Template.chat.events({
	"submit #chatform": function(event){
		
		event.preventDefault();
		

		var Name = $("#Name").val()
		console.log(Name);
		var Hall = $("#Hall").val()
		console.log(Hall);

		
		$("#Name").val("");
		$("#Hall").val("");

		var profile = Meteor.user().profile;
		
		var chatline = 
		  	{
				uid:Meteor.userId(),  
				who:Name,
				where:Hall,
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