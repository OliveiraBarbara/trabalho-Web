import { hashSync } from 'bcrypt';
import { Endereco } from 'src/core/endereco/entities/endereco.entity';
import { BaseEntity } from 'src/shared/entities';
import { BeforeInsert, Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Usuario extends BaseEntity {
  @Column()
  cpf: string;

  @Column({ length: 255 })
  nome: string;

  @Column()
  telefone: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  senha?: string;

  @ManyToMany(() => Endereco, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'usuario_tem_endereco' })
  enderecos?: Endereco[];

  @BeforeInsert()
  hashPassword() {
    this.senha = hashSync(this.senha, 10);
  }
}
