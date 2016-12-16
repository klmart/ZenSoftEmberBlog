import Ember from 'ember';
import UserConst from '../consts/user';

export default Ember.Service.extend({

  userAddObject(object) {

    return object.get('user')
                 .then((user) => {
                   const modelName = UserConst[object.get('constructor.modelName')];
                   user.get(modelName)
                       .addObject(object);
                   return user.save();
                 });
  },
  removeFromUser(object)
  {
    return object.get('user')
                 .then((user) => {
                   const modelName = UserConst[object.get('constructor.modelName')];
                   user.get(modelName)
                       .then((model) => {
                         model.removeObject(object);
                         return user.save();
                       });
                 });
  }
});
