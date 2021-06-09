import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


//Agregando +++ OAuth y JWT +++
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pri_Usu_Usuarios } from './ficha/entities/pri_usu_usuarios.entity';
import { FichaModule } from './ficha/ficha.module';
import { Pri_Emp_Empleado_V } from './ficha/entities/pri_emp_empleado_v.entity';
import { Pri_Usu_Empleados } from './ficha/entities/pri_usuemp.entity';
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
      entities: [Pri_Usu_Usuarios, Pri_Emp_Empleado_V, Pri_Usu_Empleados],
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