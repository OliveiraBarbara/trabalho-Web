import { Endereco } from 'src/endereco/entities/endereco.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class LocalTreinamento {
  @PrimaryGeneratedColumn()
  idLocal: number;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  horaFunc: string;

  @OneToOne(() => Endereco)
  @JoinColumn()
  endereco: Endereco;
}

//verificação de permissão
