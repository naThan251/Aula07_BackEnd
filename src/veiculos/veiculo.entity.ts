import {
    Entity, 
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('veiculos')

export class Veiculos {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:50})
    marca!: string;

    @Column({length:100})
    modelo!: string;

    @Column({length:7, unique:true})
    placa!: string;

    @Column({type: 'int'})
    ano!: number;

    @Column({type: 'decimal'})
    valorDiaria!: number;

    @Column({default: true})
    disponivel!: boolean;
}