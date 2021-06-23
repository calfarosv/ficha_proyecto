import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_ORD_PK", ["ordCodcia", "ordCorrelativo"], { unique: true })
@Entity("SCC_ORD_ORDEN_CAMBIO")

export class Scc_Ord_Orden_Cambio_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "ORD_CODCIA", length: 3, })
    ordCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "ORD_CORRELATIVO", precision: 20, })
    ordCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ORD_CTO_CORRELATIVO", precision: 20, })
    ordCtoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_ID", length: 20, })
    ordId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_OBJETO", length: 1000, })
    ordObjeto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_NO_SESION", length: 20, })
    ordNoSesion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_PTO_ACTA", length: 20, })
    ordPtoActa?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_EMISION", })
    ordFecEmision?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_VIGENCIA", })
    ordFecVigencia?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_APROB", })
    ordFecAprob?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ORD_TIPO", precision: 2, })
    ordTipo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ORD_ESTADO", precision: 2, })
    ordEstado?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_INI_PRORROGA", })
    ordFecIniProrroga?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_FIN_PRORROGA", })
    ordFecFinProrroga?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FEC_REGISTRO", })
    ordFecRegistro?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_USRCREA", length: 30, })
    ordUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FECCREA", })
    ordFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_USRMOD", length: 30, })
    ordUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ORD_FECMOD", })
    ordFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ORD_TIPO_CAMBIO", length: 3, })
    ordTipoCambio?: string;
    //-----------------------------------------------------------------------------------------


}

