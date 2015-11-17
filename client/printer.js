Template.printerPage.events({
  "submit #orderform": function(event){
    
    event.preventDefault();
    
    var page_count = $("#page_count").val();
    var color_print = $("#color").val();
    var duplex_print = $("#duplex").val();
    
    $("#page_count").val("");
    $("#color").val("");
    $("#duplex").val("");

    var profile = Meteor.user().profile;
    
    var order = {
        customerId:Meteor.userId(),  
        who:profile["firstName"]+" "+profile["lastName"], 
        page_count:page_count,
        color_print:color_print,
        duplex_print:duplex_print,
        printerId:this._id,
        status:"Submitted",
        when: new Date()
      };
    console.dir(order);   
    Orders.insert(order);
  }
});

Template.printerPage.helpers({
  notOwner: function(){
    return Meteor.userId() != this.ownerId;
  },
  submittedOrders: function(){
    return Orders.find({customerId:Meteor.userId(),printerId:this._id});
  },
  receivedOrders: function(){
    return Orders.find({printerId:this._id});
  }
});

Template.printerDetails.helpers({
  numorders: function(){
    return Orders.find({printerId:this._id}).count();
  }
});
