const formTypes = {
  blogTypeNew: {
    title: 'Create Blog type',
    buttonLabel: 'Save Blog Type',
    fields: [
      {
        label: 'Blog Type*',
        type: 'input-form',
        key: 'name',
        placeholder: 'Blog Type name',
        validations: {
          isEmpty: false,
          minLength: 5,
          maxLength: 10
        }
      },
    ]
  },
    blogNew: {
      title: 'Create Blog',
      buttonLabel: 'Save blog',
      fields: [
        {
          label: 'Name*',
          type: 'input-form',
          key: 'name',
          placeholder: 'The name of the Blog',
          validations: {
            isEmpty: false,
            minLength: 5,
            maxLength: 10,
          }
        },
        {
          label: 'Description*',
          type: 'textarea-form',
          key: 'description',
          placeholder: 'The description of the Blog',
          validations: {
            isEmpty: true,
            minLength: 0,
            maxLength: 120,
          }
        },
        {
          label: 'Blog Type*',
          type: 'select-form',
          key: 'blogType',
          placeholder: 'Please, select category',
          model: 'blog-type',
          modelTitle: 'name',
          validations: {
            isEmpty: false,
            minLength: 0,
            maxLength: 120,
          }
        }
      ]
    },

  permissionNew: {
    title: 'Create Permission',
    buttonLabel: 'Save Permission',
    fields: [
        {
          label: 'Permission*',
          type: 'input-form',
          key: 'name',
          placeholder: 'Permission name',
          validations: {
            isEmpty: false,
            minLength: 5,
            maxLength: 10
          }
        },
        {
          label: 'Permission Code*',
          type: 'input-form',
          key: 'code',
          placeholder: 'Permission code',
          validations: {
            isEmpty: false,
            minLength: 3,
            maxLength: 10
          }
        }
      ]
    }
  };

export default formTypes;
