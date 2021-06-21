import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pri_Emp_Empleado_V_Entity } from './entities/pri_emp_empleado_v.entity';
import { Pri_Fic_Ficha_Entity } from './entities/pri_fic_ficha_entity';
import { Pri_Fid_Ficha_Detalle_Entity } from './entities/pri_fid_ficha_detalle_entity';
import { Pri_Usu_Usuarios_Entity } from './entities/pri_usu_usuarios.entity';
import { FichaController } from './ficha.controller';
import { FichaService } from './ficha.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pri_Usu_Usuarios_Entity, Pri_Emp_Empleado_V_Entity, Pri_Fic_Ficha_Entity, Pri_Fid_Ficha_Detalle_Entity])],
  controllers: [FichaController],
  providers: [FichaService],
  exports: [FichaService]

})
export class FichaModule { }

/*
@Module({
  controllers: [FichaController],
  providers: [FichaService]
})
export class FichaModule {}
*/