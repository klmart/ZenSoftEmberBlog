const formTypes = {
    blogNew: {
      title: 'Create Blog',
      fields: [
        {
          label: 'Name*',
          type: 'input-form',
          key: 'name',
          placeholder: 'The name of the Blog'
        },
        {
          label: 'Description*',
          type: 'textarea-form',
          key: 'description',
          placeholder: 'The description of the Blog'
        },
        {
          label: 'Blog Type*',
          type: 'select-form',
          key: 'blogType',
          placeholder: 'Please, select category',
          model: 'blog-type',
          modelTitle: 'name'
        }
      ]
    },
  permissionNew: {
      title: 'Create Permission',
      fields: [
        {
          label: 'Permission*',
          type: 'input-form',
          key: 'name',
          placeholder: 'Permission name'
        },
        {
          label: 'Permission Code*',
          type: 'input-form',
          key: 'code',
          placeholder: 'Permission code'
        }
      ]
    }
  };

export default formTypes;
