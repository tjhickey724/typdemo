Meteor.methods({
  deletePrinter: function (printerId) {
    Orders.remove({printerId:printerId});
    Printers.remove(printerId);
  }
});