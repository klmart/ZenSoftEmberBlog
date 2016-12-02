import Ember from 'ember';

export default Ember.Service.extend({

  removeFromUser(object){
    return object.get('user')
                       .then((user) => {
                         const titles = object.get('constructor.modelName') + 's';
                         user.get(titles)
                             .then((titles) => {
                               titles.removeObject(object);
                               return user.save();
                             });
                       });
  }
});
