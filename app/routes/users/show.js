import Authenticated from '../authenticated';

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('user', params.user_id);
  }
});
