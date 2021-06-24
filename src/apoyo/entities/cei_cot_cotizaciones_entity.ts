import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("CEI_COT_PK", ["cotAnio", "cotId", "cotCodcia"], { unique: true })
@Entity("CEI_COT_COTIZACIONES")

export class Cei_Cot_Cotizaciones_Entity {

    @PrimaryColumn()
    @Column("number", { primary: true, name: "COT_ANIO", precision: 4, })
    cotAnio?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "COT_ID", precision: 16, })
    cotId?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "COT_CODCIA", length: 3, })
    cotCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_CON_ID", precision: 6, })
    cotConId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_PRO_ID", precision: 14, })
    cotProId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_RSC_CODCTC", length: 2, })
    cotRscCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_RSC_CODENT", length: 3, })
    cotRscCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_RSC_REQ_ID", precision: 14, })
    cotRscReqId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_RSC_REQANIO", precision: 4, })
    cotRscReqanio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_RSC_ID", precision: 10, })
    cotRscId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_REQ_CODENT", length: 3, })
    cotReqCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_REQ_CODCTC", length: 2, })
    cotReqCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_REQ_REQ_ID", precision: 14, })
    cotReqReqId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_REQ_ANIO", precision: 4, })
    cotReqAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "COT_FECHA_COTI", })
    cotFechaCoti?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_IVA_INCLUIDO", length: 1, })
    cotIvaIncluido?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_TIEM_ENTREGA", precision: 3, })
    cotTiemEntrega?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_TIPO_TIEMPO", length: 3, })
    cotTipoTiempo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_CONDICION_PAGO", length: 3, })
    cotCondicionPago?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_TOTAL", precision: 12, scale: 2, })
    cotTotal?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_IVA", precision: 12, scale: 2, })
    cotIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_SIVA", precision: 12, scale: 2, })
    cotSiva?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "COT_FECHA_ESTADO", })
    cotFechaEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_ESTADO", length: 3, })
    cotEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_MES", precision: 2, })
    cotMes?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_TIEM_VIGENCIA", precision: 2, })
    cotTiemVigencia?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "COT_VIGENCIA", })
    cotVigencia?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_OFE_ID", length: 12, })
    cotOfeId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_COMENTARIO", length: 250, })
    cotComentario?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_VALIDEZ", length: 50, })
    cotValidez?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_GARANTIA", length: 50, })
    cotGarantia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_ELABORO", length: 7, })
    cotElaboro?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_RENTA", precision: 12, scale: 2, })
    cotRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_OBSERVACIONES", length: 2000, })
    cotObservaciones?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_CODCTO", precision: 4, })
    cotCodcto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_TIEMPOCAL", length: 100, })
    cotTiempocal?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_MOTINC", precision: 3, })
    cotMotinc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_ESTINC", precision: 3, })
    cotEstinc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "COT_FECMEM", })
    cotFecmem?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_DESCUENTO", precision: 12, scale: 2, })
    cotDescuento?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_TIEM_GARANTIA", precision: 3, })
    cotTiemGarantia?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_TTIEM_GARANTIA", length: 3, })
    cotTtiemGarantia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_TIEM_VOFERTA", precision: 3, })
    cotTiemVoferta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_TTIEM_VOFERTA", length: 3, })
    cotTtiemVoferta?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_DEFTIPTIE", length: 1, })
    cotDeftiptie?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_TIPCON", length: 1, })
    cotTipcon?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_MIMPSEG", precision: 12, scale: 2, })
    cotMimpseg?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_CODRCC", precision: 5, })
    cotCodrcc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "COT_COMENTARIOS", length: 250, })
    cotComentarios?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "COT_IVARET", precision: 12, scale: 2, })
    cotIvaret?: number;
    //-----------------------------------------------------------------------------------------


}