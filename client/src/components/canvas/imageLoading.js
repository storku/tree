import {
  PLANT_1,
  PLANT_2,
  PLANT_3,
  PLANT_4,
  PLANT_5,
  PLANT_6
} from './constants';

import plant1File from '../../images/plant_1.png';
import plant2File from '../../images/plant_2.png';
import plant3File from '../../images/plant_3.png';
import plant4File from '../../images/plant_4.png';
import plant5File from '../../images/plant_5.png';
import plant6File from '../../images/plant_6.png';

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace('../../', '')] = r(item);
//   });
//   return images;
// }
const images = require.context('../../images', true);

export const plantPics = []; //note that plants start at 1 Not 0

let picsToLoad = 0; //set automatically based on imageList in loadImages()
export let finishedLoading = false;

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
  console.log(picsToLoad);
  if (picsToLoad === 0) {
    finishedLoading = true;
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady();
  imgVar.src = fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
  plantPics[worldCode] = document.createElement('img');
  beginLoadingImage(plantPics[worldCode], fileName);
}

export function loadImages() {
  const imageList = [
    { plantType: PLANT_1, fileName: plant1File },
    { plantType: PLANT_2, fileName: plant2File },
    { plantType: PLANT_3, fileName: plant3File },
    { plantType: PLANT_4, fileName: plant4File },
    { plantType: PLANT_5, fileName: plant5File },
    { plantType: PLANT_6, fileName: plant6File }

    // { plantType: PLANT_1, fileName: '../../images/plant_1.png' },
    // { plantType: PLANT_2, fileName: '../../images/plant_2.png' },
    // { plantType: PLANT_3, fileName: '../../images/plant_3.png' },
    // { plantType: PLANT_4, fileName: '../../images/plant_4.png' },
    // { plantType: PLANT_5, fileName: '../../images/plant_5.png' }
  ];

  picsToLoad = imageList.length;

  for (let i = 0; i < imageList.length; i++) {
    loadImageForWorldCode(imageList[i].plantType, imageList[i].fileName);
  }
}
