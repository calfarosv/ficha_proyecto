import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaModule } from './ficha/ficha.module';
import { ApoyoModule } from './apoyo/apoyo.module';
//
import { Pri_Usu_Usuarios_Entity } from './ficha/entities/pri_usu_usuarios.entity';
import { Pri_Emp_Empleado_V_Entity } from './ficha/entities/pri_emp_empleado_v_entity';
import { Pri_Fic_Ficha_Entity } from './ficha/entities/pri_fic_ficha_entity';
import { Pri_Fid_FicDet_Entity } from './ficha/entities/pri_fid_ficdet_entity';
import { Pla_Uni_Unidad_Entity } from './apoyo/entities/pla_uni_unidad_entity';
import { Pri_Fic_Ficha_Max_V_Entity } from './ficha/entities/pri_fic_ficha_max_v_entity';
//
import { Cei_Oco_Ordenes_Compra_Entity } from './apoyo/entities/cei_oco_ordenes_compra_entity';
import { Cei_Ofe_Oferentes_Entity } from './apoyo/entities/cei_ofe_oferentes_entity';
import { Cei_Req_Requerimientos_Entity } from './apoyo/entities/cei_req_requerimientos_entity';
import { Lic_Lic_Licitacion_Entity } from './apoyo/entities/lic_lic_licitacion_entity';
import { Scc_Cto_Contrato_Entity } from './apoyo/entities/scc_cto_contrato_entity';
import { Scc_Fac_Facturas_Entity } from './apoyo/entities/scc_fac_facturas_entity';
import { Scc_Funcionarios_Resp_Entity } from './apoyo/entities/scc_funcionarios_resp_entity';
import { Scc_Mtc_Monto_Contrato_Entity } from './apoyo/entities/scc_mtc_monto_contrato_entity';
import { Scc_Ord_Orden_Cambio_Entity } from './apoyo/entities/scc_ord_orden_cambio_entity';
import { Sis_Ubd_Usuarios_Bd_Entity } from './apoyo/entities/sis_ubd_usuarios_bd_entity';
import { Scc_Cat_Catalogo_Entity } from './apoyo/entities/scc_cat_catalogo_entity';
import { Cg_Ent_Entidad_Entity } from './apoyo/entities/cg_ent_entidad_entity';
import { Cei_Cot_Cotizaciones_Entity } from './apoyo/entities/cei_cot_cotizaciones_entity';
import { Lic_Fas_Fases_Entity } from './apoyo/entities/lic_fas_fases_entity';
import { Pri_Prc_Procesos_Cont_V_Entity } from './ficha/entities/pri_prc_procesos_cont_v_entity';
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
      entities: [Pri_Usu_Usuarios_Entity, Pri_Emp_Empleado_V_Entity,
                 Pri_Fic_Ficha_Entity, Pri_Fid_FicDet_Entity,
                 Pri_Fic_Ficha_Max_V_Entity,
                 Pla_Uni_Unidad_Entity, Cei_Oco_Ordenes_Compra_Entity, 
                 Cei_Ofe_Oferentes_Entity, Cei_Req_Requerimientos_Entity,
                 Lic_Lic_Licitacion_Entity, Scc_Cto_Contrato_Entity,
                 Scc_Fac_Facturas_Entity, Scc_Funcionarios_Resp_Entity,
                 Scc_Mtc_Monto_Contrato_Entity, Scc_Ord_Orden_Cambio_Entity,
                 Sis_Ubd_Usuarios_Bd_Entity,Scc_Cat_Catalogo_Entity,
                 Cg_Ent_Entidad_Entity, Cei_Cot_Cotizaciones_Entity,
                 Lic_Fas_Fases_Entity, Pri_Prc_Procesos_Cont_V_Entity],
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