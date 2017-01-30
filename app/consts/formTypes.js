const formTypes = {
  user:     {
    fields:      [
      {
        label:       'Email*',
        type:        'input-form',
        key:         'email',
        fieldType:   'email',
        placeholder: 'example@gmail.com',
        validations: {
          emailMask: true,
        }
      },
      {
        label:       'Password*',
        type:        'input-form',
        key:         'password',
        fieldType:   'password',
        placeholder: 'Enter Password',
        validations: {
          isEmpty:   false,
          minLength: 1,
          maxLength: 14
        }
      },
      {
        label:       'First Name',
        type:        'input-form',
        key:         'firstName',
        placeholder: 'First Name',
        validations: {
          isEmpty: true
        }
      },
      {
        label:       'last Name',
        type:        'input-form',
        key:         'lastName',
        placeholder: 'Last Name',
        validations: {
          isEmpty: true
        }
      },
    ]
  },

  blogType: {
    buttonLabel: 'Save Blog Type',
    fields:      [
      {
        label:       'Blog Type*',
        type:        'input-form',
        key:         'name',
        placeholder: 'Blog Type name',
        validations: {
          isEmpty:   false,
          minLength: 5,
          maxLength: 10
        }
      },
    ]
  },

  blog:     {
    title:       'Create Blog',
    buttonLabel: 'Save blog',
    fields:      [
      {
        label:       'Name*',
        type:        'input-form',
        key:         'name',
        placeholder: 'The name of the Blog',
        validations: {
          isEmpty:   false,
          minLength: 5,
          maxLength: 500,
        }
      },
      {
        label:       'Description*',
        type:        'textarea-form',
        key:         'description',
        placeholder: 'The description of the Blog',
        validations: {
          isEmpty:   true,
          minLength: 0,
          maxLength: 300,
        }
      },
      {
        label:       'Blog Type*',
        type:        'select-form',
        key:         'blogType',
        placeholder: 'Please, select category',
        model:       'blog-type',
        modelTitle:  'name',
        validations: {
          isEmpty:   false,
          minLength: 0,
          maxLength: 120,
        }
      }
    ]
  },

  permission: {
    title:       'Create Permission',
    buttonLabel: 'Save Permission',
    fields:      [
      {
        label:       'Permission*',
        type:        'input-form',
        key:         'name',
        placeholder: 'Permission name',
        validations: {
          isEmpty:   false,
          minLength: 5,
          maxLength: 20
        }
      },
      {
        label:       'Permission Code*',
        type:        'input-form',
        key:         'code',
        placeholder: 'Permission code',
        validations: {
          isEmpty:   false,
          minLength: 3,
          maxLength: 20
        }
      }
    ]
  }
};

export default formTypes;
