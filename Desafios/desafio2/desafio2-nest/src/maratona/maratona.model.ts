import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({name: 'maratonas'})
export class Maratona{

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    aula: String;
}