Template.Printers.events({
	"submit #printform": function(event){
		
		event.preventDefault();
		

		var Hall = $("#Hall").val();
		var printer = $("#Printer").val();
		var BWPrice = $("#BWPrice").val();
		var ColorPrice = $("#ColorPrice").val();
		var duplex = $("#duplex").val();
		var color = $("#color").val();
		
		$("#Hall").val("");
		$("#Printer").val("");
		$("#BWPrice").val("");
		$("#ColorPrice").val("");
		$("#duplex").val("");
		$("#color").val("");

		var profile = Meteor.user().profile;
		
		var printer = {
				ownerId:Meteor.userId(),  
				owner:profile.firstName+" "+profile.lastName,
				Hall:Hall,
				Printer:printer,
				BWPrice:BWPrice,
				ColorPrice:ColorPrice,
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

Template.printer.helpers({
	isOwner: function(){
		return this.ownerId == Meteor.userId();
	},
	numorders: function(){
		return Orders.find({printerId:this._id}).count();
	}
});

Template.printer.events({
	"click #delete": function () {
    	Meteor.call("deletePrinter", this._id);
    },

	"click #contactOwner": function () {
    },

    "click #viewOrders": function () {

    },
    
    "click #submitOrder": function () {

    }
});