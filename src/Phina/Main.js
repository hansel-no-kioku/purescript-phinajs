//-----------------------------------------------------------------------------
// Phina.Main

/* global phina */

exports._runGame = function(app) {
  phina.main(function() {
    app.run();
  });
  return {};
};

exports.entryScene = function(e, s) {
  var className = 'myScene.' + s.label;
  var ref;
  var superClass
    = (ref = phina.display[s.baseClass]) != null ? ref : phina.game[s.baseClass];

  phina.define('phina.game.' + className, {
    superClass: superClass,

    init: function(params) {
      this.superInit(params);

      return s.setup(params)(e)(this)();
    }
  });

  return {
    className: className,
    label: s.label,
    nextLabel: s.nextLabel
  };
};

exports.entryMainScene = function(exit, setup) {
  phina.define('phina.game.MainScene', {
    superClass: phina.display.DisplayScene,

    init: function(params) {
      this.superInit(params);

      return setup(params)(exit)(this)();
    }
  });

  return {};
};
