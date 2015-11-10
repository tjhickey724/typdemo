Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/about');
Router.route('/chat');
Router.route('/printers');
Router.route('/prices');
Router.route('/printers/:_id', {
    template: 'printerPage',
    data: function(){
        var printerId = this.params._id;
        return Printers.findOne({ _id: printerId });
    }
});

