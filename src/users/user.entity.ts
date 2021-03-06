import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';
import { Report } from '../reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  //@Exclude()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

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
