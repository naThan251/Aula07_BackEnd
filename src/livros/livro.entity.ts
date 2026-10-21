import {
    Entity, 
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('livros')

export class Livros {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:150})
    titulo!: string;

    @Column({length:100})
    autor!: string;

    @Column({length: 13, unique: true})
    isnb!: string;

    @Column({type: 'int'})
    anoPublicacao!: number;

    @Column({default: true})
    disponivel!: boolean;
}