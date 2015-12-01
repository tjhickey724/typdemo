Template.printerPage.events({
  "submit #orderform": function(event){
    
    event.preventDefault();
    var page_count = $("#page_count").val();
    if (this.duplex=="Yes") {
      var duplex = $("#duplex").val();
      $("#duplex").val("");
    }
    else {
      var duplex = "No";
    }
    if (this.color=="Yes") {
      var color = $("#color").val();
      $("#color").val("");
    }
    else {
      var color = "No";
    }
    $("#page_count").val("");

    var profile = Meteor.user().profile;
    
    var order = {
        customerId:Meteor.userId(),  
        who:profile["firstName"]+" "+profile["lastName"], 
        page_count:page_count,
        printerId:this._id,
        color:color,
        duplex:duplex,
        when: new Date()
      };    
    Orders.insert(order);
  }
});

Template.printerPage.helpers({
  notOwner: function(){
    return Meteor.userId() != this.ownerId;
  },
  duplexPrinter: function(){
    return this.duplex=="Yes";
  },
  colorPrinter: function(){
    return this.color=="Yes";
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
