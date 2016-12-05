import Authenticated from '../../authenticated/route';

export default Authenticated.extend({

  model() {
    return this.store.findAll('blog');
  },

  resetController(controller, isExiting, transition) {
    if (transition) {
      controller.set('sortBy', null);
    }
  },

  deleteBlog(blog){
    this.blogService.removeBlog(blog);
  },

  actions: {
    deleteBlog(blog){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.deleteBlog(blog);
      }
      //TODO: use user.save().then. Also you need to remove blog's posts
      //Done

    },

    setList() {
      this.get('blogGridList')
          .setIsList();
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
