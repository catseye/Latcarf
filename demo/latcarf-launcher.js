/*
 * dam-plus-widgets-web.js and latcarf.js should be loaded before this.
 * After this is loaded, call launch() to start the gewgaw.
 */

function launch(config) {
  var div=DAM.maker('div'), button=DAM.maker('button'), textarea=DAM.maker('textarea'), canvas=DAM.maker('canvas');

  var can = canvas({ width: 800, height: 600 });
  config.container.appendChild(can);

  var gewgaw = new Latcarf();
  gewgaw.init({
    'canvas': can
  });

  var controlPanel = div(
    div(
      button("Re-roll", {
        onclick: function() {
          gewgaw.reset();
        }
      })
    )
  );
  config.container.appendChild(controlPanel);
}
