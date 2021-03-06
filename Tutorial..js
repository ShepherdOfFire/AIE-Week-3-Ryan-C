(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("Tutorial",
{ "height":100,
 "layers":[
        {
         "compression":"zlib",
         "data":"eJzt3EEKwlAQREHj\/Q8t7kSCZkSTblMFH9z9mbxVFuZyAQAAAAAAgHNaHg4AAAAAAMBWi\/PxOcLR9wMAAMAZXE9wmrTNO9W2X9u8U237tc071bZf27xTbfu1zTvVtl\/bvFNt+7XNO9W2X9u8U237tc071bbfHvMe+S6tx\/odemyjRxY9suiRRY8semTRI4seWfTIokcWPbLokUWPLHpk0SOLHln0yKJHFj2y\/FOPtf\/r67F+x149nn\/rsX6HHtvokeXdvN94Vnpsp0eW+7yvvin0+Kw+\/S7RpMe3v4nU1mMvv3zHAAAAAAAAAGh0A3J9A\/k=",
         "encoding":"base64",
         "height":100,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":100,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "image":"..\/..\/..\/Downloads\/New Piskel.gif",
         "imageheight":16,
         "imagewidth":16,
         "margin":0,
         "name":"New Piskel",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":1,
         "tileheight":16,
         "tilewidth":16
        }, 
        {
         "firstgid":2,
         "image":"..\/..\/..\/Downloads\/New Piskel (1).gif",
         "imageheight":16,
         "imagewidth":16,
         "margin":0,
         "name":"New Piskel (1)",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":1,
         "tileheight":16,
         "tilewidth":16
        }],
 "tilewidth":16,
 "version":1,
 "width":100
});