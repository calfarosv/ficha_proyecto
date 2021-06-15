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
import { Pri_Uni_Unidad_Entity } from './ficha/entities/pri_uni_unidad.entity';

//import { VersionModule } from './version/version.module';
//+++++++++++++++

@Module({
  imports: [AuthModule,UsersModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      //host: 'desa.cel.gob.sv',
      connectString: 'desa.cel.gob.sv:1521/DESA',
      port: 1521,
      username: 'WSISPRI',
      password: '4pl1c4c10n3sw3b',
      database: 'desa',
      schema: 'SISPRI',
      // entities: [__dirname + './**/**/*entity{​​​​.ts,.js}​​​​'],
      //entities: [join(__dirname, './**/**/*entity{.ts,.js}')],
      entities: [Pri_Usu_Usuarios_Entity, Pri_Emp_Empleado_V_Entity, Pri_Uni_Unidad_Entity],
      //autoLoadEntities:true,
      // synchronize: true,
    }),
    FichaModule,],
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