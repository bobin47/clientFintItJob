import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

export default class InsertImageUrlPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.commands.add("insertImageUrl", {
      exec: (imageUrl) => {
        const imageElement = editor.model.schema.create("image", {
          src: imageUrl,
        });
        editor.model.insertContent(imageElement);
      },
    });
  }
}
