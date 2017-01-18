const formTypes = {
    blogNew: {
      title: 'Create Blog',
      fields: [
        {
          label: 'Name',
          type: 'input-form',
          value: 'item.name',
          placeholder: 'The name of the Blog',
        },
        {
          label: 'Description',
          type: 'textarea-form',
          value: 'item.description',
          placeholder: 'The description of the Blog',
        },
      ]
    },
  permissionNew: {
      title: 'Create Permission',
      fields: [
        {
          label: 'Permission*',
          type: 'input-form',
          value: 'name',
          placeholder: 'Permission name'
        },
        {
          label: 'Permission Code*',
          type: 'input-form',
          value: 'code',
          placeholder: 'Permission code'
        }
      ]
    }
  };

export default formTypes;
