Template.layout.helpers({
	numprinters: function(){
		return Printers.find().count();
	}
});