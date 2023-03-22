const snakeize = require('snakeize');
const camelize = require('camelize');

class DogDAO {
  constructor(connection) {
    this.connection = connection;
    this.TABLENAME = 'dogs';
  }

  async findAll() {
    const [dogs] = await this.connection.execute(
      `SELECT * FROM ${this.TABLENAME}`,
    );
    return dogs.map((dog) => camelize(dog));
  }

  async findById(id) {
    const [dog] = await this.connection.execute(`SELECT * 
        FROM ${this.TABLENAME}
        WHERE id = ?`, [id]);
    return camelize(dog);
  }

  async create(dogDTO) {
    const columns = Object.keys(snakeize({ ...dogDTO }));
    const [{ insertId: id }] = await this.connection.execute(
      `INSERT INTO ${this.TABLENAME}(${columns.join(',')})
      VALUES(${Array.from(columns).fill('?')})`,
      [...Object.values(dogDTO)],
    );
    return {
      id,
      ...dogDTO,
    };
  }

  async update(id, dogDTO) {
    const columnsAndPlaceholders = Object.keys(
      snakeize({ ...dogDTO }),
    ).map((column) => `${column}=?`);
    const [{ affectedRows }] = await this.connection
      .execute(`UPDATE ${this.TABLENAME}
        SET ${columnsAndPlaceholders}
        WHERE id = ?`, [...Object.values(dogDTO), id]);
    return { affectedRows, dog: { ...dogDTO } };
  }

  async deleteOne(id) {
    const [{ affectedRows }] = await this.connection
      .execute(`DELETE FROM ${this.TABLENAME}
      WHERE id = ?`, [id]);
    return { affectedRows };
  }
}

module.exports = DogDAO;
