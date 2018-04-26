import {
  GRID_W,
  GRID_H,
  GRID_GAP,
  GRID_COLS,
  GRID_ROWS,
  START_W,
  START_H
} from './constants';
import { colorRect } from './graphicsCommon';

export function drawGrid(ctx, levelGrid) {
  for (let eachRow = 0; eachRow < GRID_COLS; eachRow++) {
    for (let eachCol = 0; eachCol < GRID_ROWS; eachCol++) {
      const arrayIndex = rowColToArrayIndex(eachCol, eachRow);

      if (levelGrid[arrayIndex] === 0) {
        colorRect(
          ctx,
          GRID_W * eachCol + START_W,
          GRID_H * eachRow + START_H,
          GRID_W - GRID_GAP,
          GRID_H - GRID_GAP,
          'gray'
        );
      } else if (levelGrid[arrayIndex] === 1) {
        colorRect(
          ctx,
          GRID_W * eachCol + START_W,
          GRID_H * eachRow + START_H,
          GRID_W - GRID_GAP,
          GRID_H - GRID_GAP,
          'black'
        );
      }

      // if(brickGrid[arrayIndex]) {
      // 	colorRect(GRID_W*eachCol,GRID_H*eachRow,
      // 		GRID_W-GRID_GAP,GRID_H-GRID_GAP, 'blue');
      // }
    }
  }
}

function rowColToArrayIndex(col, row) {
  return col + GRID_COLS * row;
}
