import imageCropper from 'ember-cli-image-cropper/components/image-cropper';
import Ember from 'ember';

export default imageCropper.extend({
  store:    Ember.inject.service(),
  user:     undefined,
  hasImage: false,

  roles: Ember.computed(function () {
    return this.get('store')
               .findAll('role');
  }),

  init(){
    this._super(...arguments);
    const userFromRoute = this.get('item') || this.get('store')
                                                  .createRecord('user');
    this.set('user', userFromRoute);
  },

  minContainerWidth:  200,
  minContainerHeight: 200,
  aspectRatio:        0,
  minCropBoxWidth:    100,
  minCropBoxHeight:   100,
  viewMode:           1,
  zoomable:           false,
  cropperContainer:   '.cropper-container > img',
  previewClass:       '.cropper-preview',
  croppedAvatar:      null,

  actions: {
    chooseRole(role){
      //ToDo: Испарвить баг (когда Юзеру селектишь роль user и переходишь в блоги пермишны не срабатывают)
      const selected = this.set('role', role);
      this.get('user')
          .set('role', selected);
    },

    uploadImg: function (event) {
      const cropperContainer = this.$(this.get('cropperContainer'));

      const fileReader = new FileReader();
      const image      = event.target.files[0];

      if (image) {
        fileReader.readAsDataURL(image);
        this.set('hasImage', true);
      }

      fileReader.onloadend = () => {
        cropperContainer.cropper('replace', fileReader.result);
      };
    },

    buttonClicked() {

      if (this.get('hasImage')) {
        const container    = this.$(this.get('cropperContainer'));
        const croppedImage = container.cropper('getCroppedCanvas');
        this.get('user')
            .set('avatar', croppedImage.toDataURL());
      }
      this.sendAction('action', this.get('user'));
    },

    // buttonClicked() {
    //   this.sendAction('action', this.get('user'));
    // }
  }
});
