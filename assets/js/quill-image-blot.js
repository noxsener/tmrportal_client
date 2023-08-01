const ImageBlot = Quill.import('formats/image');
export class CustomImageBlot  extends ImageBlot {

  static blotName = 'customImage';
  static tagName = 'img';

  /**
   * Converts the HTML tag to image blot
   * @param value
   */
  static create(value) {

    let node = super.create();

    node.setAttribute('src', value.url);
    node.setAttribute('data-attr', value.data);

    return node;
  }

  /**
   * Converts the image blot to HTML tag
   * @param node
   */
  static value(node) {

    var blot = {};

    blot.url = node.getAttribute('url');
    blot.data_attr = node.getAttribute('data-attr');

    return blot;
  }
}
Quill.register('modules/form', CustomImageBlot);

export { CustomImageBlot as default };
