import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { MaratonaService } from './maratona.service';

@Controller('maratona')
export class MaratonaController {

    constructor (private readonly service: MaratonaService){}

    @Get()
    async findAll() {
      return await this.service.findAll();
    }

    @Post()
    async create(@Req() request: Request) {
      return await this.service.create(request.body);
    }

}
