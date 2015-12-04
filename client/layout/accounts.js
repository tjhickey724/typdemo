    
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'firstName',
        fieldLabel: 'first Name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'lastName',
        fieldLabel: 'last name',
        inputType: 'text',
        visible: true,
    },{
        fieldName: 'Hall',
        fieldLabel: 'Hall',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your residence hall',
        data: [
          {
            id: 1,
            label: 'Reitman',
            value: 'R'
          }, 
          {
            id: 2,
            label: 'Cable',
            value: 'C',
          }, 
          {
            id: 3,
            label: 'Gordon',
            value: 'G',
          },

          {
            id: 4,
            label: 'Scheffres',
            value: 'S',
          }, 

          {
            id: 5,
            label: 'Deroy',
            value: 'D',
          }, 

          {
            id: 6,
            label: 'Renfield',
            value: 'RR',
          }, 

          {
            id: 7,
            label: 'Shapiro',
            value: 'SS',
          }, 

          {
            id: 8,
            label: 'Usdan',
            value: 'U',
          }, 
          
        ],
        visible: true
    },
     {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            } 
        }
    }]
});

