import { GRID_W, GRID_H } from './constants';
import { colorText } from './graphicsCommon';

export function mouseInput(canvas, ctx) {
  canvas.addEventListener('mousemove', e => mousemoved(e, canvas, ctx));
  // document.addEventListener('mousedown', mouseclicked);
}

function mousemoved(event, canvas, ctx) {
  let mouseX = 0;
  let mouseY = 0;

  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;

  // account for the margins, canvas position on page, scroll amount, etc.
  mouseX = event.clientX - rect.left - root.scrollLeft;
  mouseY = event.clientY - rect.top - root.scrollTop;

  const tileOverCol = Math.floor(mouseX / GRID_W);
  const tileOverRow = Math.floor(mouseY / GRID_H);

  colorText(ctx, `${tileOverCol},${tileOverRow}`, mouseX, mouseY, 'white');
  //tileOverIdx = tileCoordToIndex(tileOverCol, tileOverRow);
}

// function mouseclicked(event) {
//   if (tileOverIdx < 0 || tileOverIdx >= this.levelGrid.length) {
//     // invalid or off board
//     return;
//   }
//
//   if (selectedIdx != -1) {
//     tileGrid[tileOverIdx] = tileGrid[selectedIdx]; // put the piece here (overwrite)
//     tileGrid[selectedIdx] = NO_PIECE; // clear the spot where it was sitting
//     selectedIdx = -1; // forget selection
//   } else if (tileGrid[tileOverIdx] != NO_PIECE) {
//     selectedIdx = tileOverIdx;
//   }
// }
