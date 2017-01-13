const formTypes = {
    blogNew: {
      title: 'Create Blog',
      fields: [
        {
          label: 'Name',
          type: 'input-form',
          value: 'blog.name',
          placeholder: 'The name of the Blog',
        },
        {
          label: 'Description',
          type: 'textarea-form',
          value: 'blog.description',
          placeholder: 'The description of the Blog',
        },
      ]
    }
  };

export default formTypes;
