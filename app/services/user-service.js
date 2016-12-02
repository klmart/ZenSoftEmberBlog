import Ember from 'ember';
import UserConst from '../consts/user';

export default Ember.Service.extend({

  removeFromUser(object){
    return object.get('user')
                 .then((user) => {
                   const titles = UserConst[object.get('constructor.modelName')];
                   user.get(titles)
                       .then((titles) => {
                         titles.removeObject(object);
                         return user.save();
                       });
                 });
  }
});
