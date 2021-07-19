import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("PRI_PRC_PK", ["ctoCiaCodcia", "ctoCorrelativo"], { unique: true })
@Entity("PRI_PRC_PROCESOS_CONT_V")

export class Pri_Prc_Procesos_Cont_V_Entity {
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "CTO_CIA_CODCIA", length: 3, })
    ctoCiaCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "CTO_CORRELATIVO", precision: 20, })
    ctoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ID", length: 20, })
    ctoId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_OBJETO", length: 1000, })
    ctoObjeto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO", length: 15, })
    ctoTipo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO_CONTRATO", length: 2, })
    ctoTipoContrato?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CONTRATISTA", length: 150, })
    contratista?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "TIPO_CONTRATO", length: 50, })
    tipoContrato?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CODENTI", length: 3, })
    ctoCodenti?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENTIDAD", length: 80, })
    entidad?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ORIGEN", precision: 2, })
    ctoOrigen?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORIGEN", length: 50, })
    origen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NUM_PROCESO_ORIGEN", length: 56, })
    numProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_REQ_CODENT", length: 3, })
    cotReqCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_REQ_CODCTC", length: 2, })
    cotReqCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_REQ_REQ_ID", precision: 20, })
    cotReqReqId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_REQ_ANIO", precision: 20, })
    cotReqAnio?: number;
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
    @Column("varchar2", { name: "RESULT_PROCESO_ORIGEN", length: 1, })
    resultProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NRESULT_PROCESO_ORIGEN", length: 10, })
    nresultProcesoOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MONTO_PROCESO_ORIGEN", precision: 20, })
    montoProcesoOrigen?: number;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "CTO_FEC_FIRMA_CONT", })
    @Type(() => Date)
    ctoFecFirmaCont?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PRO_CODIGO", length: 12, })
    ctoProCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ESTADO", precision: 2, })
    ctoEstado?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ESTADO", length: 50, })
    estado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "CTO_FEC_INICIO", })
    @Type(() => Date)
    ctoFecInicio?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "CTO_FEC_FIN_ORIG", })
    @Type(() => Date)
    ctoFecFinOrig?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "CTO_FEC_FIN", })
    @Type(() => Date)
    ctoFecFin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CERTIFICA", length: 4000, })
    certifica?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "NOMBRE_ADMIN", length: 100, })
    nombreAdmin?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CODCEL_ADMIN", length: 8, })
    codcelAdmin?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO", precision: 20, })
    mtcMonto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_ACT", precision: 20, })
    mtcMontoAct?: number;
    //-----------------------------------------------------------------------------------------


}