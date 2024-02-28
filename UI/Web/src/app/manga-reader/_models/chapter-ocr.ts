export interface ChapterOcrBlock {
  box: number[];
  vertical: boolean;
  font_size: number;
  lines: string[];
  lines_coords: number[][];
}

export interface ChapterOcrPage {
  version: string;
  img_width: number;
  img_height: number;
  img_path: string;
  blocks: ChapterOcrBlock[];
}

export interface ChapterOcr {
  version: string;
  title: string;
  uuid: string;
  volume: string;
  volume_uuid: string;
  pages: ChapterOcrPage[];
}
