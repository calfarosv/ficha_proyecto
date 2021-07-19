import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApoyoController } from './apoyo.controller';
import { ApoyoService } from './apoyo.service';
import { Cei_Cot_Cotizaciones_Entity } from './entities/cei_cot_cotizaciones_entity';
import { Cei_Oco_Ordenes_Compra_Entity } from './entities/cei_oco_ordenes_compra_entity';
import { Cei_Ofe_Oferentes_Entity } from './entities/cei_ofe_oferentes_entity';
import { Cei_Req_Requerimientos_Entity } from './entities/cei_req_requerimientos_entity';
import { Cg_Ent_Entidad_Entity } from './entities/cg_ent_entidad_entity';
import { Lic_Fas_Fases_Entity } from './entities/lic_fas_fases_entity';
import { Lic_Lic_Licitacion_Entity } from './entities/lic_lic_licitacion_entity';
import { Pla_Uni_Unidad_Entity } from './entities/pla_uni_unidad_entity';
import { Scc_Cat_Catalogo_Entity } from './entities/scc_cat_catalogo_entity';
import { Scc_Cto_Contrato_Entity } from './entities/scc_cto_contrato_entity';
import { Scc_Fac_Facturas_Entity } from './entities/scc_fac_facturas_entity';
import { Scc_Funcionarios_Resp_Entity } from './entities/scc_funcionarios_resp_entity';
import { Scc_Mtc_Monto_Contrato_Entity } from './entities/scc_mtc_monto_contrato_entity';
import { Scc_Ord_Orden_Cambio_Entity } from './entities/scc_ord_orden_cambio_entity';
import { Sis_Ubd_Usuarios_Bd_Entity } from './entities/sis_ubd_usuarios_bd_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pla_Uni_Unidad_Entity, Cei_Oco_Ordenes_Compra_Entity,
                                      Cei_Ofe_Oferentes_Entity, Cei_Req_Requerimientos_Entity,
                                      Lic_Lic_Licitacion_Entity, Scc_Cto_Contrato_Entity,
                                      Scc_Fac_Facturas_Entity, Scc_Funcionarios_Resp_Entity,
                                      Scc_Mtc_Monto_Contrato_Entity, Scc_Ord_Orden_Cambio_Entity,
                                      Sis_Ubd_Usuarios_Bd_Entity, Scc_Cat_Catalogo_Entity,
                                      Cg_Ent_Entidad_Entity, Cei_Cot_Cotizaciones_Entity,
                                      Lic_Fas_Fases_Entity])],
  controllers: [ApoyoController],
  providers: [ApoyoService],
  exports: [ApoyoService]

})
export class ApoyoModule { }


