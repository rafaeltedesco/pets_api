const snakeize = require('snakeize');
const camelize = require('camelize');

class OwnerDAO {
  constructor(connection) {
    this.connection = connection;
    this.TABLENAME = 'owners';
  }

  async findAll() {
    const [owners] = await this.connection.execute(
      `SELECT * FROM ${this.TABLENAME}`,
    );
    return owners.map((owner) => camelize(owner));
  }

  async findById(id) {
    const [owner] = await this.connection.execute(`SELECT * 
        FROM ${this.TABLENAME}
        WHERE id = ?`, [id]);
    return camelize(owner);
  }

  async create(ownerDTO) {
    const columns = Object.keys(snakeize({ ...ownerDTO }));
    const [{ insertId: id }] = await this.connection.execute(
      `INSERT INTO ${this.TABLENAME}(${columns.join(',')})
      VALUES(${Array.from(columns).fill('?')})`,
      [...Object.values(ownerDTO)],
    );
    return {
      id,
      ...ownerDTO,
    };
  }

  async update(id, ownerDTO) {
    const columnsAndPlaceholders = Object.keys(
      snakeize({ ...ownerDTO }),
    ).map((column) => `${column}=?`);
    const [{ affectedRows }] = await this.connection
      .execute(`UPDATE ${this.TABLENAME}
        SET ${columnsAndPlaceholders}
        WHERE id = ?`, [...Object.values(ownerDTO), id]);
    return { affectedRows, owner: { ...ownerDTO } };
  }

  async deleteOne(id) {
    const [{ affectedRows }] = await this.connection
      .execute(`DELETE FROM ${this.TABLENAME}
      WHERE id = ?`, [id]);
    return { affectedRows };
  }
}

module.exports = OwnerDAO;
