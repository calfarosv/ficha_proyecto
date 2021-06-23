import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_MTC_PK", ["mtcCodcia", "mtcCorrelativo"], { unique: true })
@Entity("SCC_MTC_MONTO_CONTRATO")

export class Scc_Mtc_Monto_Contrato_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "MTC_CODCIA", length: 3, })
    mtcCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "MTC_CORRELATIVO", precision: 20, })
    mtcCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_CTO_CORRELATIVO", precision: 20, })
    mtcCtoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_COD_FUENTE", length: 3, })
    mtcCodFuente?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_COD_SUBFUENTE", length: 3, })
    mtcCodSubfuente?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONEDA", precision: 2, })
    mtcMoneda?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO", precision: 20, scale: 2, })
    mtcMonto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_ACT", precision: 20, scale: 2, })
    mtcMontoAct?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_DISPONIBLE", precision: 20, scale: 2, })
    mtcDisponible?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FEC_ULT_PAGO", })
    mtcFecUltPago?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FEC_ULT_CAMBIO", })
    mtcFecUltCambio?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_CUADRO", precision: 20, scale: 2, })
    mtcMontoCuadro?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_FUENTE", length: 10, })
    mtcFuente?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_PORCENTAJE_PARTICIPACION", precision: 3, })
    mtcPorcentajeParticipacion?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_TASA_CAMBIO", precision: 5, scale: 2, })
    mtcTasaCambio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_DOLARES", precision: 20, scale: 2, })
    mtcMontoDolares?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_CODCAT", length: 8, })
    mtcCodcat?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_USRCREA", length: 30, })
    mtcUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FECCREA", })
    mtcFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "MTC_USRMOD", length: 30, })
    mtcUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "MTC_FECMOD", })
    mtcFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_MES_ORIG", precision: 15, scale: 2, })
    mtcMontoMesOrig?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "MTC_MONTO_MES_ACT", precision: 15, scale: 2, })
    mtcMontoMesAct?: number;
    //-----------------------------------------------------------------------------------------


}

