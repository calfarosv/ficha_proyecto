import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


//Agregando +++ OAuth y JWT +++
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaModule } from './ficha/ficha.module';
import { Pri_Usu_Usuarios_Entity } from './ficha/entities/pri_usu_usuarios.entity';
import { Pri_Emp_Empleado_V_Entity } from './ficha/entities/pri_emp_empleado_v.entity';
import { Pla_Uni_Unidad_Entity } from './apoyo/entities/pla_uni_unidad_entity';

//import { VersionModule } from './version/version.module';
import { ApoyoModule } from './apoyo/apoyo.module';
import { Pri_Fic_Ficha_Entity } from './ficha/entities/pri_fic_ficha_entity';
import { Pri_Fid_Ficha_Detalle_Entity } from './ficha/entities/pri_fid_ficha_detalle_entity';
//+++++++++++++++

@Module({
  imports: [AuthModule,UsersModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      connectString: 'desa.cel.gob.sv:1521/DESA',
      port: 1521,
      username: 'WSISPRI',
      password: '4pl1c4c10n3sw3b',
      database: 'desa',
      schema: '',
      entities: [Pri_Usu_Usuarios_Entity, Pri_Emp_Empleado_V_Entity, Pla_Uni_Unidad_Entity, 
                 Pri_Fic_Ficha_Entity, Pri_Fid_Ficha_Detalle_Entity],
    }),
    FichaModule,
    ApoyoModule,],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }

/*
@Module({
  imports: [FichaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/