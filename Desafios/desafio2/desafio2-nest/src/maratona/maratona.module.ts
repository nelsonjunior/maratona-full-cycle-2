import { Module } from '@nestjs/common';
import { MaratonaController } from './maratona.controller';
import { MaratonaService } from './maratona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './maratona.model';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Maratona]),
  ],
  controllers: [MaratonaController],
  providers: [MaratonaService, ConfigService]
})
export class MaratonaModule {}
