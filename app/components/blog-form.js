import imageCropper from 'ember-cli-image-cropper/components/image-cropper';
import Ember from 'ember';

export default imageCropper.extend({
  store:    Ember.inject.service(),
  blog:     undefined,
  hasImage: false,

  blogTypes: Ember.computed(function () {
    return this.get('store')
               .findAll('blog-type');
  }),

  init(){
    this._super(...arguments);

    const blogFromRoute = this.get('item') || this.get('store')
                                                  .createRecord('blog', {
                                                    user: this.get('loginService.currentUser')
                                                  });
    this.set('blog', blogFromRoute);
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

  willDestroyElement(){
    this.get('blog')
        .rollbackAttributes();
  },

  actions: {

    //TODO: same as Abai

    chooseBlogType(blogType){
      const selected = this.set('blogType', blogType);
      this.get('blog')
          .set('blogType', selected);
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

    //TODO: rename action.
    //Done
    saveBlog(blogParams) {

      //TODO: why 'let'? move into if block
      //Done

      if (this.get('hasImage')) {
        const container    = this.$(this.get('cropperContainer'));
        const croppedImage = container.cropper('getCroppedCanvas');
        this.get('blog')
            .set('image', croppedImage.toDataURL());
      }
      this.sendAction('action', blogParams);

    }

  }
});
