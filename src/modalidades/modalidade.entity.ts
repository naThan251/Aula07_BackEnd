import {
    Entity, 
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('modalidades')

export class Modalidades {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100})
    nome!: string;

    @Column({type: 'text'})
    descricao!: string;

    @Column({type: 'int'})
    duracaoMinutos!: number;

    @Column({type: 'decimal'})
    valorMensal!: number;

    @Column({default: true})
    ativo!: boolean;
}