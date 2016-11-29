import Authenticated from '../authenticated';

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('blog', params.blog_id);
  }
});
