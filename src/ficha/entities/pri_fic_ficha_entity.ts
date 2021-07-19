import { Type } from "class-transformer";
import { Column, Entity, Index, OneToMany, PrimaryColumn } from "typeorm";
import { Pri_FicDet_Entity } from "./pri_ficdet_entity";

@Index("PRI_FIC_PK", ["ficCodigo", "ficVersion"], { unique: true })
@Entity("PRI_FIC_FICHA")

export class Pri_Fic_Ficha_Entity {

    @PrimaryColumn()
    @Column("number", { primary: true, name: "FIC_CODIGO", precision: 5, scale: 0, })
    ficCodigo?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "FIC_VERSION", precision: 5, scale: 0, })
    ficVersion?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_NOMBRE", length: 200 })
    ficNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_DESCRIPCION", length: 1000 })
    ficDescripcion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_CODUNI_SOL", precision: 5, scale: 0, })
    ficCoduniSol?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_CODUNI_EJE", precision: 5, scale: 0, })
    ficCoduniEje?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_CODCEL_RES", length: 7 })
    ficCodcelRes?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_FORMUL_SN", length: 1 })
    ficFormulSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_FOR_FEPINI" })
    @Type(() => Date)
    ficForFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_FOR_FEPFIN" })
    @Type(() => Date)
    ficForFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_FOR_FERINI" })
    @Type(() => Date)
    ficForFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_FOR_FERFIN" })
    @Type(() => Date)
    ficForFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_AMBIEN_SN", length: 1 })
    ficAmbienSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_AMB_FEPINI" })
    @Type(() => Date)
    ficAmbFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_AMB_FEPFIN" })
    @Type(() => Date)
    ficAmbFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_AMB_FERINI" })
    @Type(() => Date)
    ficAmbFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_AMB_FERFIN" })
    @Type(() => Date)    
    ficAmbFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_CONTRA_SN", length: 1 })
    ficContraSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_CON_FEPINI" })
    @Type(() => Date)
    ficConFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_CON_FEPFIN" })
    @Type(() => Date)
    ficConFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_CON_FERINI" })
    @Type(() => Date)
    ficConFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_CON_FERFIN" })
    @Type(() => Date)
    ficConFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_EJECUT_SN", length: 1 })
    ficEjecutSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_EJE_FEPINI" })
    @Type(() => Date)
    ficEjeFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_EJE_FEPFIN" })
    @Type(() => Date)
    ficEjeFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_EJE_FERINI" })
    @Type(() => Date)
    ficEjeFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_EJE_FERFIN" })
    @Type(() => Date)
    ficEjeFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_LIQUID_SN", length: 1 })
    ficLiquidSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_LIQ_FEPINI" })
    @Type(() => Date)
    ficLiqFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_LIQ_FEPFIN" })
    @Type(() => Date)
    ficLiqFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_LIQ_FERINI" })
    @Type(() => Date)
    ficLiqFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_LIQ_FERFIN" })
    @Type(() => Date)
    ficLiqFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_ESPTEC_SN", length: 1 })
    ficEsptecSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_ESPTEC_POR", precision: 5, scale: 2, })
    ficEsptecPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_FORTEC_SN", length: 1 })
    ficFortecSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_FORTEC_POR", precision: 5, scale: 2, })
    ficFortecPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_PLANOS_SN", length: 1 })
    ficPlanosSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_PLANOS_POR", precision: 5, scale: 2, })
    ficPlanosPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_PRESUP_SN", length: 1 })
    ficPresupSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_PRESUP_POR", precision: 5, scale: 2, })
    ficPresupPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_BASLIC_SN", length: 1 })
    ficBaslicSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_BASLIC_POR", precision: 5, scale: 2, })
    ficBaslicPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_FORAMB_SN", length: 1 })
    ficForambSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_FORAMB_POR", precision: 5, scale: 2, })
    ficForambPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_CATAMB_SN", length: 1 })
    ficCatambSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_CATAMB_POR", precision: 5, scale: 2, })
    ficCatambPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_ESTIMP_SN", length: 1 })
    ficEstimpSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_ESTIMP_POR", precision: 5, scale: 2, })
    ficEstimpPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_PERAMB_SN", length: 1 })
    ficPerambSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_PERAMB_POR", precision: 5, scale: 2, })
    ficPerambPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_PERCON_SN", length: 1 })
    ficPerconSn?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "FIC_PERCON_POR", precision: 5, scale: 2, })
    ficPerconPor?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_OBSERV_FIC", length: 1000 })
    ficObservFic?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_FECHA_VER" })
    @Type(() => Date)
    ficFechaVer?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_ESTADO_VER", length: 1 })
    ficEstadoVer?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_USUARIO_VER", length: 30 })
    ficUsuarioVer?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_OBSERV_VER", length: 1000 })
    ficObservVer?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_USUARIO_CREA", length: 30 })
    ficUsuarioCrea?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_FEC_CREA" })
    @Type(() => Date)
    ficFecCrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_USUARIO_MOD", length: 30 })
    ficUsuarioMod?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "FIC_FEC_MOD" })
    @Type(() => Date)
    ficFecMod?: Date;
    //-----------------------------------------------------------------------------------------


    @OneToMany
        (
            () => Pri_FicDet_Entity,
            v_fid => v_fid.encabezado,
            //{ eager: true }
        )
    detalles: Pri_FicDet_Entity[];


} //------------