AFRAME.registerComponent('log', {
  schema: {
    type: 'string'
  },

  init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
  }
});

AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersected', function () {
      console.log('Player hit something!');
    });
  }
});

AFRAME.registerComponent('do-something', {
  init: function () {
    var sceneEl = this.el;
    console.log('do something ', sceneEl);

    // for (var x = -1; x < 2; x++)
    //   for (var z = -1; z < 2; z++) {
    //     if (x === 0 && z === 0)
    //       continue;

    //     var boxEl = document.createElement('a-box');
    //     boxEl.setAttribute('position', {
    //       x: x * 1.5,
    //       y: 1,
    //       z: z * 1.5
    //     });
    //     boxEl.setAttribute('color', 'red');

    //     sceneEl.appendChild(boxEl);
    //   }

  }
});