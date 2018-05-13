import {
  GRID_W,
  GRID_H,
  GRID_COLS,
  GRID_ROWS,
  START_W,
  START_H
} from './constants';
// import { colorRect } from './graphicsCommon';
// import { GRID_GAP } from './constants';

function rowColToArrayIndex(col, row) {
  return col + GRID_COLS * row;
}

export function drawGrid(ctx, levelGrid, plantPics) {
  for (let eachRow = 0; eachRow < GRID_COLS; eachRow++) {
    for (let eachCol = 0; eachCol < GRID_ROWS; eachCol++) {
      const arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      const numberAtArrayIndex = levelGrid[arrayIndex];
      if (numberAtArrayIndex === 0) {
        // colorRect(
        //   ctx,
        //   GRID_W * eachCol + START_W,
        //   GRID_H * eachRow + START_H,
        //   GRID_W - GRID_GAP,
        //   GRID_H - GRID_GAP,
        //   'gray'
        // );
      } else if (
        numberAtArrayIndex === 1 ||
        numberAtArrayIndex === 2 ||
        numberAtArrayIndex === 3 ||
        numberAtArrayIndex === 4 ||
        numberAtArrayIndex === 5 ||
        numberAtArrayIndex === 6
      ) {
        // colorRect(
        //   ctx,
        //   GRID_W * eachCol + START_W,
        //   GRID_H * eachRow + START_H,
        //   GRID_W - GRID_GAP,
        //   GRID_H - GRID_GAP,
        //   'black'
        // );
        const plantImg = plantPics[numberAtArrayIndex];
        // console.log(plantImg);
        ctx.drawImage(
          plantImg,
          GRID_W * eachCol + START_W,
          GRID_H * eachRow + START_H,
          GRID_W,
          GRID_H
        );
      }

      // if(brickGrid[arrayIndex]) {
      // 	colorRect(GRID_W*eachCol,GRID_H*eachRow,
      // 		GRID_W-GRID_GAP,GRID_H-GRID_GAP, 'blue');
      // }
    }
  }
}
