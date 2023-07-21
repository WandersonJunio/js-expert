import { readFileSync } from "fs";

class BaseRepository {
  constructor({ file }) {
    this.file = file;
  }

  async find(itemId) {
    const content = JSON.parse(readFileSync(this.file));

    if (!itemId) return content;

    return content.find(({ id }) => id === itemId);
  }
}

export { BaseRepository };
