import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pri_Emp_Empleado_V } from './entities/pri_emp_empleado_v.entity';
import { Pri_Usu_Usuarios } from './entities/pri_usu_usuarios.entity';
import { FichaController } from './ficha.controller';
import { FichaService } from './ficha.service';


@Module({

  imports: [TypeOrmModule.forFeature([Pri_Usu_Usuarios, Pri_Emp_Empleado_V])],
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