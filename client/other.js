Template.other.events({
	"submit #otherform": function(event){
		
		event.preventDefault();
		
		var otherquestions = $("#otherquestions").val();
		console.log(otherquestions);
		
		$("#otherquestions").val("");

		var profile = Meteor.user().profile;
		
		var otherline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				otherquestions:otherquestions,
				when: new Date()
			};
			
		console.dir(otherline);
		
		OtherLines.insert(otherline);
	}
});

Template.other.helpers({
	otherlines: function(){
		return OtherLines.find({},{limit:10, sort:{when:-1}});
	},
	numchats: function(){
		return OtherLines.find().count();
	}
});