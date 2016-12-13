import Ember from 'ember';

export default Ember.Component.extend({
  store:         Ember.inject.service(),
  blogGridList:  Ember.inject.service(),
  blogService:   Ember.inject.service(),
  filteredBlogs: undefined,
  init(){
    this._super(...arguments);
    this.set('filteredBlogs', this.get('model'));
  },

  deleteBlog(blog){
    this.get('blogService')
        .removeBlog(blog);
  },
  actions: {
    setList() {
      this.get('blogGridList')
          .setIsList();
    },
    deleteBlog(blog){
      console.log(2);
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.deleteBlog(blog);
      }
      //TODO: use user.save().then. Also you need to remove blog's posts
      //Done
    },

    multipleDelete(filteredBlogs){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        const blogs = filteredBlogs.filter((blog) => {
          return blog.get('isChecked');
        });

        blogs.forEach((blog) => {
          this.deleteBlog(blog);
        });
      }
    },
  }
});
