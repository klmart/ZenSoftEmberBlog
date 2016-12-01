import Authenticated from '../../authenticated/route';

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('blog', params.blog_id);
  }
});
