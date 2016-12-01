import Authenticated from '../../../routes/authenticated';

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('blog', params.blog_id);
  }
});
