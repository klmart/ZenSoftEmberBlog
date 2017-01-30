import Ember from 'ember';
import LSAdapter from 'ember-localstorage-adapter';

export default LSAdapter.extend({
  flashMessages: Ember.inject.service(),

  namespace: 'blog',

  createRecord: function (store, type, snapshot) {
    let namespaceRecords = this._namespaceForType(type);
    let serializer       = store.serializerFor(type.modelName);
    let recordHash       = serializer.serialize(snapshot, {includeId: true});

    namespaceRecords.records[recordHash.id] = recordHash;

    this.persistData(type, namespaceRecords);

    let modelName = snapshot.modelName;
    this.get('flashMessages')
        .add({
          message: `${type.modelName.capitalize()} has been created`,
          type:    'success'
        });
    return Ember.RSVP.resolve();

  },

  updateRecord: function (store, type, snapshot) {
    let namespaceRecords = this._namespaceForType(type);
    let id               = snapshot.id;
    let serializer       = store.serializerFor(type.modelName);

    namespaceRecords.records[id] = serializer.serialize(snapshot, {includeId: true});
    this.persistData(type, namespaceRecords);

    if (Ember.get(snapshot, 'adapterOptions.flashMessage')) {
      this.get('flashMessages')
          .add({
            message: `${type.modelName.capitalize()} has been updated!`,
            type:    'info'
          });
    }
    return Ember.RSVP.resolve();
  },

  deleteRecord(store, type, snapshot) {
    let namespaceRecords = this._namespaceForType(type);
    let id               = snapshot.id;

    delete namespaceRecords.records[id];

    this.persistData(type, namespaceRecords);

    const modelName = snapshot.modelName;

    if (Ember.get(snapshot, 'adapterOptions.flashMessage')) {
      this.get('flashMessages')
          .add({
            message: `${type.modelName.capitalize()} has been deleted!`,
            type:    'danger'
          });
    }
    return Ember.RSVP.resolve();
  },
});
