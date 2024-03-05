export interface BoardI {
  field_type: string;
  index: number;
  isSpawn: boolean;
  color: string;
}
export interface gameData {
  blue_player: PlayerI;
  red_player: PlayerI;
  green_player: PlayerI;
  yellow_player: PlayerI;
}
export interface PlayerI {
  nick: string | null;
  color: string;
  player_id: string;
  status: string;
  pawns: PawnsI;
}
interface PawnsI {
  pawn_1: number;
  pawn_2: number;
  pawn_3: number;
  pawn_4: number;
}
