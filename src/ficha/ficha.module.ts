import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pri_Emp_Empleado_V_Entity } from './entities/pri_emp_empleado_v_entity';
import { Pri_Fic_Ficha_Entity } from './entities/pri_fic_ficha_entity';
import { Pri_Fic_Ficha_Max_V_Entity } from './entities/pri_fic_ficha_max_v_entity';
import { Pri_FicDet_Entity } from './entities/pri_ficdet_entity';
import { Pri_Prc_Procesos_Cont_V_Entity } from './entities/pri_prc_procesos_cont_v_entity';
import { Pri_Usu_Usuarios_Entity } from './entities/pri_usu_usuarios.entity';
import { FichaController } from './ficha.controller';
import { FichaService } from './ficha.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pri_Usu_Usuarios_Entity, Pri_Emp_Empleado_V_Entity, 
                                      Pri_Fic_Ficha_Entity, Pri_FicDet_Entity, 
                                      Pri_Fic_Ficha_Max_V_Entity, Pri_Prc_Procesos_Cont_V_Entity])],
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