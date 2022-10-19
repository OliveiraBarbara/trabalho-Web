import { hashSync } from 'bcrypt';
import { BaseEntity } from 'src/shared/entities';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity()
export class Instrutor extends BaseEntity {
  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  senha?: string;

  @BeforeInsert()
  hashPassword() {
    this.senha = hashSync(this.senha, 10);
  }
}
