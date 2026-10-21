import {
    Entity, 
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('eventos')

export class Eventos {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:150})
    nome!: string;

    @Column({type: 'text'})
    descricao!: string;

    @Column({type: 'date'})
    dataEvento!: Date;

    @Column({length:150})
    local!: string;

    @Column({type: 'int'})
    capacidade!: number;

    @Column({default: true})
    ativo!: boolean;
}