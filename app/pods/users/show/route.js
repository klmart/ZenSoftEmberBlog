import Authenticated from '../../../routes/authenticated';

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('user', params.user_id);
  }
});
