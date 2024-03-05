import { BoardI } from '../types';
export function convertBoard(): BoardI[] {
  const test: BoardI[] = new Array(121).fill(0).map(() => {
    return { field_type: 'cell', index: -1, isSpawn: false, color: '' };
  });
  for (const [index, cell] of test.entries()) {
    // console.log(Math.floor(index / 11));
    if ((index >= 0 && index <= 1) || (index >= 11 && index <= 12)) {
      console.log(index);

      cell.field_type += ' red_player--spawn_field';
      cell.isSpawn = true;
      cell.color = 'red';
    } else if ((index >= 9 && index <= 10) || (index >= 20 && index <= 21)) {
      cell.field_type += ' blue_player--spawn_field';
      cell.isSpawn = true;
      cell.color = 'blue';
    } else if (
      (index >= 99 && index <= 100) ||
      (index >= 110 && index <= 111)
    ) {
      cell.field_type += ' yellow_player--spawn_field';
      cell.isSpawn = true;
      cell.color = 'yellow';
    } else if (
      (index >= 108 && index <= 109) ||
      (index >= 119 && index <= 120)
    ) {
      cell.field_type += ' green_player--spawn_field';
      cell.isSpawn = true;
      cell.color = 'green';
    } else if (index === 6) {
      cell.field_type += ' blue_player--start_field';
    } else if (index === 44) {
      cell.field_type += ' red_player--start_field';
    } else if (index === 76) {
      cell.field_type += ' green_player--start_field';
    } else if (index === 114) {
      cell.field_type += ' yellow_player--start_field';
    } else if (index % 11 === 5 && index < 60 && index > 5) {
      cell.field_type += ' blue_player--end_field';
    } else if (index % 11 === 5 && index > 60 && index < 115) {
      cell.field_type += ' yellow_player--end_field';
    } else if (index > 55 && index < 60) {
      cell.field_type += ' red_player--end_field';
    } else if (index >= 61 && index < 65) {
      cell.field_type += ' green_player--end_field';
    } else if (index % 11 === 4 && (index < 59 || index > 61)) {
      cell.field_type += ' game-field';
    } else if (index % 11 === 6 && (index < 61 || index > 61)) {
      cell.field_type += ' game-field';
    } else if (Math.floor(index / 11) === 4) {
      cell.field_type += ' game-field';
    } else if (Math.floor(index / 11) === 6) {
      cell.field_type += ' game-field';
    } else if (Math.floor(index / 11) === 5 && index !== 60) {
      cell.field_type += ' game-field';
    } else if (index === 5 || index === 115) {
      cell.field_type += ' game-field';
    } else if (index === 60) {
      cell.field_type += ' dice-field';
    }
    cell.index = index;
  }
  return test;
}
