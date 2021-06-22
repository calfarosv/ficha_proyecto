import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_ORD_PK", ["MtcCodcia", "MtcCorrelativo"], { unique: true })
@Entity("SCC_ORD_ORDEN_CAMBIO")

export class Scc_Ord_Orden_Cambio_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "ORD_CODCIA", length: 3, })
    OrdCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "ORD_CORRELATIVO", precision: 20, })
    OrdCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ORD_CTO_CORRELATIVO", precision: 20, })
    OrdCtoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_ID", length: 20, })
    OrdId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_OBJETO", length: 1000, })
    OrdObjeto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_NO_SESION", length: 20, })
    OrdNoSesion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_PTO_ACTA", length: 20, })
    OrdPtoActa?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_EMISION", })
    OrdFecEmision?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_VIGENCIA", })
    OrdFecVigencia?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_APROB", })
    OrdFecAprob?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ORD_TIPO", precision: 2, })
    OrdTipo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ORD_ESTADO", precision: 2, })
    OrdEstado?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_INI_PRORROGA", })
    OrdFecIniProrroga?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_FIN_PRORROGA", })
    OrdFecFinProrroga?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_REGISTRO", })
    OrdFecRegistro?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_USRCREA", length: 30, })
    OrdUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FECCREA", })
    OrdFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_USRMOD", length: 30, })
    OrdUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FECMOD", })
    OrdFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_TIPO_CAMBIO", length: 3, })
    OrdTipoCambio?: string;
    //-----------------------------------------------------------------------------------------


}

