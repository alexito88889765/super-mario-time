// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`3200080000000000000000000000050000000000000000000303030303000000000000000000000000000500000000000000000000000000000000050000000000000000000003000000030303030303000001000500000005000000000000000000000005000000000000070000000005000005000001010303030003030303030303000000000000000000000000000000020200000000000000000700070000000000000000030303030000000303030303030303030303000000000000000000000202020000000000000707070007030301030000000003030303000000030303030303000000000000030300000000000002020202000000000000000000000007000000000000030202020200000000000000000000000000030303030000000000020202020200000000000000000000000708000008000303000000000000000008000000000000030303030303000008000202020202020000000000000404040406060606060606060606060604040404040406060606060606060606040404040404060606060606040404040404`, img`
....................22222.........................
................2...222222..2.....................
..............22222.2222222...............22......
....................22222222222..........222......
.....2222...........222222......22......2222......
............22222.............2222.....22222......
...........22...............222222....222222......
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,sprites.castle.tileGrass1,myTiles.tile10,sprites.castle.tileGrass3,myTiles.tile11,myTiles.tile12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
            case "PlantSpawner":
            case "tile7":return tile7;
            case "StartTile":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
