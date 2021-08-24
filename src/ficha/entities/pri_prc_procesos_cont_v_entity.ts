import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("PRI_PRC_PK", ["codcia", "codProceso"], { unique: true })
@Entity("PRI_PRC_PROCESOS_CONT_V")

export class Pri_Prc_Procesos_Cont_V_Entity {
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "CODCIA", length: 3, })
    codcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "COD_PROCESO", length: 81, })
    codProceso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "TIPO_PROCESO", length: 3, })
    tipoProceso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CORRELATIVO", precision: 20, })
    ctoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ID", length: 20, })
    ctoId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CODOCO", precision: 20, })
    codoco?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ANIO_OCO", precision: 4, })
    anioOco?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COD_RSC", precision: 20, })
    codRsc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "DESC_PROCESO", length: 1000, })
    descProceso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CONTRATISTA", length: 150, })
    contratista?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CODENTI_PROCESO", length: 3, })
    codentiProceso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENTIDAD_PROCESO", length: 80, })
    entidadProceso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NUM_PROCESO_ORIGEN", length: 56, })
    numProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CODENT_REQ", length: 3, })
    codentReq?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CODCTC_REQ", length: 2, })
    codctcReq?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CODREQ", precision: 20, })
    codreq?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ANIO_REQ", precision: 4, })
    anioReq?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NOMBRE_PROCESO_ORIGEN", length: 1000, })
    nombreProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ESTADO_PROCESO_ORIGEN", length: 40, })
    estadoProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NESTADO_PROCESO_ORIGEN", length: 50, })
    nestadoProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RESULT_PROCESO_ORIGEN", length: 3, })
    resultProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NRESULT_PROCESO_ORIGEN", length: 10, })
    nresultProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MONTO_PROCESO_ORIGEN", precision: 20, })
    montoProcesoOrigen?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CODOFE_PROCESO", length: 12, })
    codofeProceso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COD_ESTADO", length: 40, })
    codEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "DESC_ESTADO", length: 50, })
    descEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FECHA_INICIO", })
    @Type(() => Date)
    fechaInicio?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FECHA_FIN_ORIG", })
    @Type(() => Date)
    fechaFinOrig?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FECHA_FIN_ACTUAL", })
    @Type(() => Date)
    fechaFinActual?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NOMBRE_ADMIN", length: 100, })
    nombreAdmin?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CODCEL_ADMIN", length: 8, })
    codcelAdmin?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MONTO_ORIG", precision: 20, })
    montoOrig?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MONTO_ACTUAL", precision: 20, })
    montoActual?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "PLAZO_ORIG", precision: 20, })
    plazoOrig?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "PLAZO_ACTUAL", precision: 20, })
    plazoActual?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "PRORROGA", precision: 20, })
    prorroga?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MONTO_ANTICIPO", precision: 20, })
    montoAnticipo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MONTO_PAGADO", precision: 20, })
    montoPagado?: number;
    //-----------------------------------------------------------------------------------------

}