
import { Type } from "class-transformer";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Pri_Fic_Ficha_Entity } from "./pri_fic_ficha_entity";

@Index("PRI_FID_PK", ["fidCodfic", "fidCodver", "fidCodigo"], { unique: true })
@Entity("PRI_FID_FICDET")

export class Pri_Fid_FicDet_Entity {

    @PrimaryColumn()
    @Column("number", { primary: true, name: "FID_CODFIC", precision: 5, scale: 0, })
    fidCodfic?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "FID_CODVER", precision: 5, scale: 0, })
    fidCodver?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "FID_CODIGO", precision: 5, scale: 0, })
    fidCodigo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_TIPO", length: 1 })
    fidTipo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_CODCTO", precision: 15, scale: 0, })
    fidCodcto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_CODOCO", precision: 6, scale: 0, })
    fidCodoco?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_OCOANIO", precision: 4, scale: 0, })
    fidOcoanio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_DESCRIPCION", length: 1000 })
    fidDescripcion?: string;
    //-----------------------------------------------------------------------------------------
     @Column("varchar2", { name: "FID_CONTRATISTA", length: 12 })
    fidContratista?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_ADMINISTRA", length: 7 })
    fidAdministra?: string;
    //-----------------------------------------------------------------------------------------
     @Column("varchar2", { name: "FID_SUPERVISOR", length: 7 })
    fidSupervisor?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_OBSERVACIONES", length: 1000 })
    fidObservaciones?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_ORI_CODLIC", length: 15 })
    fidOriCodlic?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_CODCTC", length: 2 })
    fidCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_CODENT", length: 15 })
    fidCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_ORI_REQANIO", precision: 4, scale: 0, })
    fidOriReqanio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_ORI_CODREQ", precision: 14, scale: 0, })
    fidOriCodreq?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_ORI_DESCRIP", length: 1000 })
    fidOriDescrip?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_MONTO_PRO", precision: 15, scale: 2, })
    fidMontoPro?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_ESTADO_PRO", length: 3 })
    fidEstadoPro?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_RESULTADO", length: 1 })
    fidResultado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_MONTO_ORI", precision: 15, scale: 2, })
    fidMontoOri?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_MONTO_ACT", precision: 15, scale: 2, })
    fidMontoAct?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_MONTO_ANT", precision: 15, scale: 2, })
    fidMontoAnt?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_MONTO_EST", precision: 15, scale: 2, })
    fidMontoEst?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_MONTO_TPA", precision: 15, scale: 2, })
    fidMontoTpa?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FID_FEC_ORDINI" })
    fidFecOrdini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_PLAZO_ORIG", precision: 4, scale: 0, })
    fidPlazoOrig?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FID_FEC_FINORI" })
    fidFecFinori?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FID_PLAZO_ACTU", precision: 4, scale: 0, })
    fidPlazoActu?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FID_FEC_FINACT" })
    fidFecFinact?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_USUARIO_CREA", length: 30 })
    fidUsuarioCrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FID_FEC_CREA" })
    fidFecCrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FID_USUARIO_MOD", length: 30 })
    fidUsuarioMod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FID_FEC_MOD" })
    fidFecMod?: Date;
    //-----------------------------------------------------------------------------------------


    @ManyToOne
        (
            () => Pri_Fic_Ficha_Entity,
            v_fic => v_fic.detalles,
            { lazy: true }
        )
    @JoinColumn
        ([
            { name: "FID_CODFIC", referencedColumnName: "ficCodigo" },
            { name: "FID_CODVER", referencedColumnName: "ficVersion" },
        ])
    encabezado: Pri_Fic_Ficha_Entity;



} //------------