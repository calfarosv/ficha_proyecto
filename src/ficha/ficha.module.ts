import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pri_Uni_Unidad_Entity } from './entities/pri_uni_unidad.entity';
import { Pri_Emp_Empleado_V_Entity } from './entities/pri_emp_empleado_v.entity';
import { Pri_Usu_Usuarios_Entity } from './entities/pri_usu_usuarios.entity';
import { FichaController } from './ficha.controller';
import { FichaService } from './ficha.service';


@Module({

  imports: [TypeOrmModule.forFeature([Pri_Usu_Usuarios_Entity, Pri_Emp_Empleado_V_Entity, Pri_Uni_Unidad_Entity])],
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