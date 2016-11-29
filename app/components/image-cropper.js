import imageCropper from 'ember-cli-image-cropper/components/image-cropper';
import Ember from 'ember';

export default imageCropper.extend({
  blog: undefined,

  init(){
    this._super(...arguments);
    const blog = this.get('item');
    this.set('blog', blog);
  },

//override default options of cropper
  minContainerWidth: 200,
  minContainerHeight: 200,
  aspectRatio: 0,
  minCropBoxWidth: 100,
  minCropBoxHeight: 100,
  viewMode: 1,
  zoomable: false,
  cropperContainer: '.cropper-container > img',
  previewClass: '.cropper-preview',
  croppedAvatar: null,

  actions: {

    uploadImg: function (event) {
      const cropperContainer = this.$(this.get('cropperContainer'));

      const fileReader = new FileReader();
      const image = event.target.files[0];
      if (image) {
        fileReader.readAsDataURL(image);
      }

      fileReader.onloadend = () => {
        cropperContainer.cropper('replace', fileReader.result);
      }
    },

    cropImg: function () {

      let container = this.$(this.get('cropperContainer'));
      let croppedImage = container.cropper('getCroppedCanvas');
      this.set('croppedAvatar', croppedImage);
      this.get('blog').set('image', croppedImage.toDataURL());
    }
  }
});
