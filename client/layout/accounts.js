    
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first bame',
        fieldLabel: 'last name',
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
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [
        {                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
        },
        {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        },

        {
          id: 3,                  // id suffix of the radio element
            label: 'Other',          // label for the radio element
            value: 'O'
        },
        
        {
         id: 4,                  // id suffix of the radio element
            label: 'Unicorn',          // label for the radio element
            value: 'Un'

        }],
        visible: true
    }, {
        fieldName: 'country',
        fieldLabel: 'Country',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your country of residence',
        data: [{
            id: 1,
            label: 'United States',
            value: 'us'
          }, {
            id: 2,
            label: 'North Pole',
            value: 'NP',
        }],
        visible: true
    },
{
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

