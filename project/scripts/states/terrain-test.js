import TerrainTile from 'prefabs/terrain-tile';

var testTiles;

class TerrainTest {

    init(settings) {}

    preload() {}

    create() {
      testTiles = this.game.add.group();
      testTiles.add(new TerrainTile(this.game, 100, 100, TerrainTile.TerrainType.DEEPWATER));
      testTiles.add(new TerrainTile(this.game, 170, 100, TerrainTile.TerrainType.SHALLOWWATER));
      testTiles.add(new TerrainTile(this.game, 240, 100, TerrainTile.TerrainType.GRASSLAND));
      testTiles.add(new TerrainTile(this.game, 100, 170, TerrainTile.TerrainType.DESERT));
      testTiles.add(new TerrainTile(this.game, 170, 170, TerrainTile.TerrainType.HILL));
      testTiles.add(new TerrainTile(this.game, 240, 170, TerrainTile.TerrainType.MOUNTAIN));
    }

    update() {}

}

export default TerrainTest;
