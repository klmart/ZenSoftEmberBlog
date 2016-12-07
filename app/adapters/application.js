import LSAdapter from 'ember-localstorage-adapter';

export default LSAdapter.extend({
  flashMessages: Ember.inject.service(),

  namespace: 'blog',

  updateRecord: function (store, type, snapshot) {
    let namespaceRecords = this._namespaceForType(type);
    let id               = snapshot.id;
    let serializer       = store.serializerFor(type.modelName);

    namespaceRecords.records[id] = serializer.serialize(snapshot, {includeId: true});
    this.persistData(type, namespaceRecords);

    if(Ember.get(snapshot, 'adapterOptions.flashMessages')) {

      let modelName = snapshot.modelName;
      this.get('flashMessages')
        .danger((modelName.charAt(0)
            .toUpperCase() + modelName.slice(1)) + ' Updated');
    }
    return Ember.RSVP.resolve();
  },


  createRecord: function (store, type, snapshot) {
      let namespaceRecords = this._namespaceForType(type);
      let serializer       = store.serializerFor(type.modelName);
      let recordHash       = serializer.serialize(snapshot, {includeId: true});

      namespaceRecords.records[recordHash.id] = recordHash;

      this.persistData(type, namespaceRecords);

      let modelName = snapshot.modelName;
      this.get('flashMessages')
        .danger((modelName.charAt(0)
            .toUpperCase() + modelName.slice(1)) + ' Created');
      return Ember.RSVP.resolve();

  },

  deleteRecord(store, type, snapshot) {
    let namespaceRecords = this._namespaceForType(type);
    let id               = snapshot.id;

    delete namespaceRecords.records[id];

    this.persistData(type, namespaceRecords);

    let modelName = snapshot.modelName;
    this.get('flashMessages')
        .danger((modelName.charAt(0)
                          .toUpperCase() + modelName.slice(1)) + ' Deleted');

    return Ember.RSVP.resolve();
  },
});
