import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("PK_CEI_OCO_ORDENES_COMPRA", ["OcoCodcia", "OcoAnio", "OcoId"], { unique: true })
@Entity("CEI_OCO_ORDENES_COMPRA")

export class Cei_Oco_Ordenes_Compra_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "OCO_CODCIA", length: 3, })
    OcoCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "OCO_ANIO", precision: 4, })
    OcoAnio?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "OCO_ID", precision: 6, })
    OcoId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_REQ_ID", precision: 14, })
    OcoReqId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_COT_ANIO", precision: 4, })
    OcoCotAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_COT_ID", precision: 16, })
    OcoCotId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_PRO_ID", precision: 14, })
    OcoProId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_EAU_ID_AUT", precision: 4, })
    OcoEauIdAut?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_EMPCOD_AUT", length: 7, })
    OcoEmpcodAut?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODENT", length: 3, })
    OcoCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODCTC", length: 2, })
    OcoCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_REQ_ANIO", precision: 4, })
    OcoReqAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_RSC_ID", precision: 10, })
    OcoRscId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODCDIR", length: 1, })
    OcoCodcdir?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODFVAR", length: 1, })
    OcoCodfvar?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_SUBTOTAL", precision: 12, scale: 2, })
    OcoSubtotal?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_RENTA", precision: 12, scale: 2, })
    OcoRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_IVA", precision: 12, scale: 2, })
    OcoIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_TOTAL", precision: 12, scale: 2, })
    OcoTotal?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_DESTINADA", length: 3, })
    OcoDestinada?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_COMENT_USO", length: 400, })
    OcoComentUso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_COMENT_ESTADO", length: 500, })
    OcoComentEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_ELAB", })
    OcoFechaElab?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_AUTO", })
    OcoFechaAuto?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_COMPRA", })
    OcoFechaCompra?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_ESTADO_ORDEN", length: 3, })
    OcoEstadoOrden?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_ESTADO", })
    OcoFechaEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_TIP_RENTA", length: 3, })
    OcoTipRenta?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_PORC_RENTA", precision: 3, scale: 2, })
    OcoPorcRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_MES", precision: 2, })
    OcoMes?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_QUEDAN", length: 9, })
    OcoQuedan?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_QUEDAN", })
    OcoFecQuedan?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CCF", length: 15, })
    OcoCcf?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_CCF", })
    OcoFecCcf?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_OFE_ID", length: 12, })
    OcoOfeId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CALIFICACION", precision: 4, scale: 2, })
    OcoCalificacion?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_CALI", })
    OcoFechaCali?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CTO_ID", precision: 20, })
    OcoCtoId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CONTRATO", length: 20, })
    OcoContrato?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CONCEPTO_CONT", length: 1000, })
    OcoConceptoCont?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_TIPO_DOC", length: 3, })
    OcoTipoDoc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODEMP_REC", length: 7, })
    OcoCodempRec?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_COMENT_RECEP", length: 100, })
    OcoComentRecep?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_IVARET", precision: 12, scale: 2, })
    OcoIvaret?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_IVA", precision: 12, scale: 2, })
    OcoNvoIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_RENTA", precision: 12, scale: 2, })
    OcoNvoRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_IVARET", precision: 12, scale: 2, })
    OcoNvoIvaret?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_PRECIO", precision: 12, scale: 2, })
    OcoNvoPrecio?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_RETIRO", })
    OcoFecRetiro?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_RESGUARDO", })
    OcoFecResguardo?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_EMPTRANS", length: 7, })
    OcoEmptrans?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_DESREAL", length: 1, })
    OcoDesreal?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_INFORMA", length: 1, })
    OcoInforma?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECINIENT", })
    OcoFecinient?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_TIPGAR", length: 1, })
    OcoTipgar?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CODRGA", precision: 5, })
    OcoCodrga?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_MMULTA", precision: 16, scale: 2, })
    OcoMmulta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_MIMPSEG", precision: 12, scale: 2, })
    OcoMimpseg?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CODFPA", precision: 1, })
    OcoCodfpa?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_DESCUENTO", precision: 12, scale: 2, })
    OcoDescuento?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_ADCONFIN", length: 8, })
    OcoAdconfin?: string;
    //-----------------------------------------------------------------------------------------
}