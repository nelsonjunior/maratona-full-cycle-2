import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('teste')
export class TesteController {

    constructor(private appService:AppService){

    }

    @Get()
    index(){
        return this.appService.getHello() + ' Nelson Lindo!!!';
    }

}
