import { GRID_W, GRID_H, GRID_GAP, START_W, START_H } from './constants';
import { colorText, colorRect } from './graphicsCommon';

let tileOverCol;
let tileOverRow;

export function mouseInput(canvas, ctx) {
  canvas.addEventListener('mousemove', e => mousemoved(e, canvas, ctx));
  canvas.addEventListener('mousedown', e => mouseclicked(e, ctx));
}

function mousemoved(event, canvas, ctx) {
  let mouseX = 0;
  let mouseY = 0;

  const rect = canvas.getBoundingClientRect();
  //commented code below is used to adjust scolling but doesn't work!
  // const root = document.documentElement;

  // account for the margins, canvas position on page, scroll amount, etc.
  // mouseX = event.clientX - rect.left - root.scrollLeft;
  // mouseY = event.clientY - rect.top - root.scrollTop;

  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;

  tileOverCol = Math.floor(mouseX / GRID_W);
  tileOverRow = Math.floor(mouseY / GRID_H);

  //colorText(ctx, `${tileOverCol},${tileOverRow}`, mouseX, mouseY, 'white');
  //tileOverIdx = tileCoordToIndex(tileOverCol, tileOverRow);
}

function mouseclicked(event, ctx) {
  colorRect(
    ctx,
    GRID_W * tileOverCol,
    GRID_H * tileOverRow,
    GRID_W - GRID_GAP,
    GRID_H - GRID_GAP,
    'blue'
  );
  // if (tileOverIdx < 0 || tileOverIdx >= this.levelGrid.length) {
  //   // invalid or off board
  //   return;
  // }
  //
  // if (selectedIdx != -1) {
  //   tileGrid[tileOverIdx] = tileGrid[selectedIdx]; // put the piece here (overwrite)
  //   tileGrid[selectedIdx] = NO_PIECE; // clear the spot where it was sitting
  //   selectedIdx = -1; // forget selection
  // } else if (tileGrid[tileOverIdx] != NO_PIECE) {
  //   selectedIdx = tileOverIdx;
  // }
}
