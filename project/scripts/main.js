import Analytics from 'utils/analytics';

import Boot from 'states/boot';
import Preload from 'states/preload';
import Menu from 'states/menu';
import Game from 'states/game';
import TerrainTest from 'states/terrain-test';

var game, App = {};

App.start = function () {
  game = new Phaser.Game(
    960, 640,
    Phaser.AUTO,
    'game-container'
  );

  game.analytics = new Analytics('people');

  game.state.add('boot', Boot);
  game.state.add('preload', Preload);
  game.state.add('menu', Menu);
  game.state.add('game', Game);
  game.state.add('terrain-test', TerrainTest);

  game.state.start('boot');

  return game;
};

export
default App;