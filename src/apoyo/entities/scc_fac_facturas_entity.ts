import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_FAC_PK", ["facCodcia", "facCorrelativo"], { unique: true })
@Entity("SCC_FAC_FACTURAS")

export class Scc_Fac_Facturas_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "FAC_CODCIA", length: 3, })
    facCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "FAC_CORRELATIVO", precision: 20, })
    facCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CTO_CORRELATIVO", precision: 20, })
    facCtoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_ID", length: 20, })
    facId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_TIPO", precision: 2, })
    facTipo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_TIPO_FACTURA", length: 3, })
    facTipoFactura?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_ENTREGA_FAC", })
    facFecEntregaFac?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_APROB_FAC", })
    facFecAprobFac?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_CONCEPTO", length: 2000, })
    facConcepto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MONEDA", precision: 2, })
    facMoneda?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_CLASIFICACION", length: 2, })
    facClasificacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MES", precision: 2, })
    facMes?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_QUEDAN", length: 20, })
    facQuedan?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_QUEDAN", })
    facFecQuedan?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MONTO", precision: 15, scale: 2, })
    facMonto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_ANTICIPO_DED", precision: 10, scale: 2, })
    facAnticipoDed?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_GARANTIA_RET", precision: 10, scale: 2, })
    facGarantiaRet?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_RENTA_RET", precision: 10, scale: 2, })
    facRentaRet?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_OTROS", precision: 10, scale: 2, })
    facOtros?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_IVA", precision: 10, scale: 2, })
    facIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_ORD_ID", length: 20, })
    facOrdId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_ORD_CORRELATIVO", precision: 20, })
    facOrdCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_TASA_CAMBIO", precision: 9, scale: 4, })
    facTasaCambio?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FEC_ELABORA", })
    facFecElabora?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_USRCREA", length: 30, })
    facUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FECCREA", })
    facFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_USRMOD", length: 30, })
    facUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FAC_FECMOD", })
    facFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MONTO_EXENTO", precision: 15, scale: 2, })
    facMontoExento?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_RET_CONTRACTUAL", precision: 15, scale: 2, })
    facRetContractual?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CODMTC", precision: 20, })
    facCodmtc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CODRCO", precision: 20, })
    facCodrco?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_FOVIAL", precision: 15, scale: 2, })
    facFovial?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_COTRANS", precision: 15, scale: 2, })
    facCotrans?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAC_CODFUF", length: 10, })
    facCodfuf?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CESC", precision: 15, scale: 2, })
    facCesc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_CODEST", precision: 4, })
    facCodest?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_QUEDAN_FEXT", precision: 20, })
    facQuedanFext?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_QUEDAN_FP", precision: 20, })
    facQuedanFp?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_MES_PAGO", precision: 2, })
    facMesPago?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FAC_ANIO_PAGO", precision: 4, })
    facAnioPago?: number;
    //-----------------------------------------------------------------------------------------

}