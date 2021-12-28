import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('user inserted');
  }

  @AfterUpdate()
  logUpdate() {
    console.log('user updated');
  }

  @AfterRemove()
  logRemove() {
    console.log('user removed');
  }
}
