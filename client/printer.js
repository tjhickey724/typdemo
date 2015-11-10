Template.printerPage.events({
  "submit #orderform": function(event){
    
    event.preventDefault();
    
    var body = $("#comment-body").val();
    
    $("#comment-body").val("");

    var profile = Meteor.user().profile;
    
    var comment = 
        {
        uid:Meteor.userId(),  
        who:profile["firstName"]+" "+profile["lastName"], 
        body:body,
        pid:this._id,
        when: new Date()
      };    
    Comments.insert(comment);
  }
});

Template.printerPage.helpers({
  notOwner: function(){
    return Meteor.userId() != this.ownerId;
  },
  submittedOrders: function(){
    return Orders.find({customerId:Meteor.userId()});
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
