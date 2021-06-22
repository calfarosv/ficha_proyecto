import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_FAC_PK", ["FacCodcia", "FacCorrelativo"], { unique: true })
@Entity("SCC_FAC_FACTURAS")

export class Scc_Fac_Facturas_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "FAC_CODCIA", length: 3, })
    FacCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "FAC_CORRELATIVO", precision: 20, })
    FacCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CTO_CORRELATIVO", precision: 20, })
    FacCtoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_ID", length: 20, })
    FacId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_TIPO", precision: 2, })
    FacTipo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_TIPO_FACTURA", length: 3, })
    FacTipoFactura?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_ENTREGA_FAC", })
    FacFecEntregaFac?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_APROB_FAC", })
    FacFecAprobFac?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_CONCEPTO", length: 2000, })
    FacConcepto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MONEDA", precision: 2, })
    FacMoneda?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_CLASIFICACION", length: 2, })
    FacClasificacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MES", precision: 2, })
    FacMes?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_QUEDAN", length: 20, })
    FacQuedan?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_QUEDAN", })
    FacFecQuedan?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MONTO", precision: 15, scale: 2, })
    FacMonto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_ANTICIPO_DED", precision: 10, scale: 2, })
    FacAnticipoDed?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_GARANTIA_RET", precision: 10, scale: 2, })
    FacGarantiaRet?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_RENTA_RET", precision: 10, scale: 2, })
    FacRentaRet?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_OTROS", precision: 10, scale: 2, })
    FacOtros?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_IVA", precision: 10, scale: 2, })
    FacIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_ORD_ID", length: 20, })
    FacOrdId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_ORD_CORRELATIVO", precision: 20, })
    FacOrdCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_TASA_CAMBIO", precision: 9, scale: 4, })
    FacTasaCambio?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_ELABORA", })
    FacFecElabora?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_USRCREA", length: 30, })
    FacUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FECCREA", })
    FacFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_USRMOD", length: 30, })
    FacUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FECMOD", })
    FacFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MONTO_EXENTO", precision: 15, scale: 2, })
    FacMontoExento?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_RET_CONTRACTUAL", precision: 15, scale: 2, })
    FacRetContractual?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CODMTC", precision: 20, })
    FacCodmtc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CODRCO", precision: 20, })
    FacCodrco?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_FOVIAL", precision: 15, scale: 2, })
    FacFovial?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_COTRANS", precision: 15, scale: 2, })
    FacCotrans?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_CODFUF", length: 10, })
    FacCodfuf?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CESC", precision: 15, scale: 2, })
    FacCesc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CODEST", precision: 4, })
    FacCodest?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_QUEDAN_FEXT", precision: 20, })
    FacQuedanFext?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_QUEDAN_FP", precision: 20, })
    FacQuedanFp?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MES_PAGO", precision: 2, })
    FacMesPago?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_ANIO_PAGO", precision: 4, })
    FacAnioPago?: number;
    //-----------------------------------------------------------------------------------------

}