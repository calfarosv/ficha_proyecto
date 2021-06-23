import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("PK_CEI_OCO_ORDENES_COMPRA", ["ocoCodcia", "ocoAnio", "ocoId"], { unique: true })
@Entity("CEI_OCO_ORDENES_COMPRA")

export class Cei_Oco_Ordenes_Compra_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "OCO_CODCIA", length: 3, })
    ocoCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "OCO_ANIO", precision: 4, })
    ocoAnio?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "OCO_ID", precision: 6, })
    ocoId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_REQ_ID", precision: 14, })
    ocoReqId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_COT_ANIO", precision: 4, })
    ocoCotAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_COT_ID", precision: 16, })
    ocoCotId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_PRO_ID", precision: 14, })
    ocoProId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_EAU_ID_AUT", precision: 4, })
    ocoEauIdAut?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_EMPCOD_AUT", length: 7, })
    ocoEmpcodAut?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODENT", length: 3, })
    ocoCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODCTC", length: 2, })
    ocoCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_REQ_ANIO", precision: 4, })
    ocoReqAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_RSC_ID", precision: 10, })
    ocoRscId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODCDIR", length: 1, })
    ocoCodcdir?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODFVAR", length: 1, })
    ocoCodfvar?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_SUBTOTAL", precision: 12, scale: 2, })
    ocoSubtotal?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_RENTA", precision: 12, scale: 2, })
    ocoRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_IVA", precision: 12, scale: 2, })
    ocoIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_TOTAL", precision: 12, scale: 2, })
    ocoTotal?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_DESTINADA", length: 3, })
    ocoDestinada?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_COMENT_USO", length: 400, })
    ocoComentUso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_COMENT_ESTADO", length: 500, })
    ocoComentEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_ELAB", })
    ocoFechaElab?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_AUTO", })
    ocoFechaAuto?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_COMPRA", })
    ocoFechaCompra?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_ESTADO_ORDEN", length: 3, })
    ocoEstadoOrden?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_ESTADO", })
    ocoFechaEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_TIP_RENTA", length: 3, })
    ocoTipRenta?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_PORC_RENTA", precision: 3, scale: 2, })
    ocoPorcRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_MES", precision: 2, })
    ocoMes?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_QUEDAN", length: 9, })
    ocoQuedan?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_QUEDAN", })
    ocoFecQuedan?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CCF", length: 15, })
    ocoCcf?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_CCF", })
    ocoFecCcf?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_OFE_ID", length: 12, })
    ocoOfeId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CALIFICACION", precision: 4, scale: 2, })
    ocoCalificacion?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECHA_CALI", })
    ocoFechaCali?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CTO_ID", precision: 20, })
    ocoCtoId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CONTRATO", length: 20, })
    ocoContrato?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CONCEPTO_CONT", length: 1000, })
    ocoConceptoCont?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_TIPO_DOC", length: 3, })
    ocoTipoDoc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_CODEMP_REC", length: 7, })
    ocoCodempRec?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_COMENT_RECEP", length: 100, })
    ocoComentRecep?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_IVARET", precision: 12, scale: 2, })
    ocoIvaret?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_IVA", precision: 12, scale: 2, })
    ocoNvoIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_RENTA", precision: 12, scale: 2, })
    ocoNvoRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_IVARET", precision: 12, scale: 2, })
    ocoNvoIvaret?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_NVO_PRECIO", precision: 12, scale: 2, })
    ocoNvoPrecio?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_RETIRO", })
    ocoFecRetiro?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FEC_RESGUARDO", })
    ocoFecResguardo?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_EMPTRANS", length: 7, })
    ocoEmptrans?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_DESREAL", length: 1, })
    ocoDesreal?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_INFORMA", length: 1, })
    ocoInforma?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OCO_FECINIENT", })
    ocoFecinient?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_TIPGAR", length: 1, })
    ocoTipgar?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CODRGA", precision: 5, })
    ocoCodrga?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_MMULTA", precision: 16, scale: 2, })
    ocoMmulta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_MIMPSEG", precision: 12, scale: 2, })
    ocoMimpseg?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_CODFPA", precision: 1, })
    ocoCodfpa?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OCO_DESCUENTO", precision: 12, scale: 2, })
    ocoDescuento?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OCO_ADCONFIN", length: 8, })
    ocoAdconfin?: string;
    //-----------------------------------------------------------------------------------------
}