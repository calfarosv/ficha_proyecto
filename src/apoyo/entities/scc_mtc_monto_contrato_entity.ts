import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_MTC_PK", ["MtcCodcia", "MtcCorrelativo"], { unique: true })
@Entity("SCC_MTC_MONTO_CONTRATO")

export class Scc_Mtc_Monto_Contrato_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "MTC_CODCIA", length: 3, })
    MtcCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "MTC_CORRELATIVO", precision: 20, })
    MtcCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_CTO_CORRELATIVO", precision: 20, })
    MtcCtoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_COD_FUENTE", length: 3, })
    MtcCodFuente?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_COD_SUBFUENTE", length: 3, })
    MtcCodSubfuente?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONEDA", precision: 2, })
    MtcMoneda?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO", precision: 20, scale: 2, })
    MtcMonto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_ACT", precision: 20, scale: 2, })
    MtcMontoAct?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_DISPONIBLE", precision: 20, scale: 2, })
    MtcDisponible?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FEC_ULT_PAGO", })
    MtcFecUltPago?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FEC_ULT_CAMBIO", })
    MtcFecUltCambio?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_CUADRO", precision: 20, scale: 2, })
    MtcMontoCuadro?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_FUENTE", length: 10, })
    MtcFuente?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_PORCENTAJE_PARTICIPACION", precision: 3, })
    MtcPorcentajeParticipacion?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_TASA_CAMBIO", precision: 5, scale: 2, })
    MtcTasaCambio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_DOLARES", precision: 20, scale: 2, })
    MtcMontoDolares?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_CODCAT", length: 8, })
    MtcCodcat?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_USRCREA", length: 30, })
    MtcUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FECCREA", })
    MtcFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_USRMOD", length: 30, })
    MtcUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FECMOD", })
    MtcFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_MES_ORIG", precision: 15, scale: 2, })
    MtcMontoMesOrig?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_MES_ACT", precision: 15, scale: 2, })
    MtcMontoMesAct?: number;
    //-----------------------------------------------------------------------------------------


}

