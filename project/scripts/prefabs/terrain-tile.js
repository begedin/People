class TerrainTile extends Phaser.Sprite {

  constructor(game, x, y, type) {
    
    super(game, x, y, 'terrain_tiles', terrainTextures[type]);

    /* init code here */
    this.anchor.setTo(0.5);
  }

  update() {}

}

// enum for usage with constructor;
TerrainTile.TerrainType = {
  DEEPWATER: 0,
  SHALLOWWATER: 1,
  GRASSLAND: 2,
  DESERT: 3,
  HILL: 4,
  MOUNTAIN: 5
};

var terrainTextures = ['tile_deepwater', 'tile_shallowwater', 'tile_grassland', 'tile_desert', 'tile_hill', 'tile_mountain'];

export default TerrainTile;