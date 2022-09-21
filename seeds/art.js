const {Art} = require('../models/index')

async function seedArt() {
    await Art.create({
      name: "piece1",
      image:
        "https://3.bp.blogspot.com/_TiacS9I-qqc/S_1A_r0BqRI/AAAAAAAAAC0/zIra6nd2Uyw/s1600/IMG_01.jpg",
    });

       await Art.create({
         name: "piece2",
         image:
           "https://3.bp.blogspot.com/_TiacS9I-qqc/Rfh3zbdjkvI/AAAAAAAAAAc/OUgjb1Eag9s/s1600/tide+turns.jpg",
       });
          await Art.create({
            name: "piece3",
            image:
              "https://2.bp.blogspot.com/_TiacS9I-qqc/TO6Un1jupQI/AAAAAAAAAFI/Es_4VB650Ko/s1600/MakingArtWork_Brin_Doug_MyRauschenberg.JPG",
          });
             await Art.create({
               name: "piece4",
               image:
                 "https://photos1.blogger.com/blogger2/7756/4409/1600/dougarie166.jpg",
             });
             console.log('=======artSeeded=======');
}

module.exports = seedArt;