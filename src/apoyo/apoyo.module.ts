import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApoyoController } from './apoyo.controller';
import { ApoyoService } from './apoyo.service';
import { Pla_Uni_Unidad_Entity } from './entities/pla_uni_unidad_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pla_Uni_Unidad_Entity])],
  controllers: [ApoyoController],
  providers: [ApoyoService],
  exports: [ApoyoService]

})
export class ApoyoModule {}


