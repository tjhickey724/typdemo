Template.social.events({
	"submit #socialform": function(event){
		
		event.preventDefault();
		
		var socialquestions = $("#socialquestions").val();
		console.log(socialquestions);
		
		$("#socialquestions").val("");

		var profile = Meteor.user().profile;
		
		var socialline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				socialquestions:socialquestions,
				when: new Date()
			};
			
		console.dir(socialline);
		
		SocialLines.insert(socialline);
	}
});

Template.social.helpers({
	sociallines: function(){
		return SocialLines.find({},{limit:10, sort:{when:-1}});
	},
	numchats: function(){
		return SocialLines.find().count();
	}
});