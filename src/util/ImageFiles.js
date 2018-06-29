var fs = require('fs');

getAllfiles = function(){
  fs.readdir(__dirname + "../../../public/image_data/",function(err, files){
    if (err) {
        return console.error(err);
    }
    let imageObjects = [];
    files.forEach((element,index) => {
      imageObjects.push({
        key: index,
        filename: element
      });
    });
    fs.writeFileSync(__dirname + '../../data.json', JSON.stringify({value: imageObjects}))
 });
}

saveToJson = function(files){
  let imageObjects = [];
  files.forEach(element => {
    imageObjects.push({filename: element});
  });
  fs.writeFileSync('../../data.json', JSON.stringify(imageObjects))
}

getAllfiles();
// console.log(files);
// saveToJson(files);