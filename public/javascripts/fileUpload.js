const rootStyles = window.getComputedStyle(document.documentElement); /* gets all the styles from the root (:root tag) element of the document (books.css)  */

if (
  rootStyles.getPropertyValue("--book-cover-width-large") != null &&
  rootStyles.getPropertyValue("--book-cover-width-large") !== ""
) { /* this javascript file loads before the css files so we need to check if the variable is available first */
  ready();
} else {
  document.getElementById("main-css").addEventListener("load", ready);
}

function ready() {
  const coverWidth = parseFloat(
    rootStyles.getPropertyValue("--book-cover-width-large")
  );
  const coverAspectRatio = parseFloat(
    rootStyles.getPropertyValue("--book-cover-aspect-ratio")
  );
  const coverHeight = coverWidth / coverAspectRatio;
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
  );

  FilePond.setOptions({
    stylePanelAspectRatio: 1 / coverAspectRatio,
    imageResizeTargetWidth: coverWidth,
    imageResizeTargetHeight: coverHeight,
  });

  FilePond.parse(document.body);
}
