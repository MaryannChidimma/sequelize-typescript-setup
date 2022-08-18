import { Optional } from 'sequelize'
import { Table, Model, DataType, Column } from 'sequelize-typescript'

interface PersonAttributes {
  id: number
  name: string
  birthday: Date
}

interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

@Table
 export default class Person extends Model<PersonAttributes, PersonCreationAttributes> {
    @Column({
     type: DataType.UUID,
     defaultValue: DataType.UUIDV4,
     primaryKey: true,
    })
    id!:string
    @Column({
      type: DataType.STRING
    })
    name!: string
  
    @Column({
     type: DataType.DATE
    })
    birthday!: Date
}