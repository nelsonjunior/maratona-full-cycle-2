import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from './maratona.model';
import { Repository } from 'typeorm';

@Injectable()
export class MaratonaService {

    constructor(
        @InjectRepository(Maratona)
        private readonly repo: Repository<Maratona>
    ){}


    async findAll() {
        return await this.repo.find({
            order: {
                aula: 'ASC'
            }
        });
    }

    async create(entity) {
        const maratona = this.repo.create(entity);
        await this.repo.save(maratona);
        return maratona;
    }
}
