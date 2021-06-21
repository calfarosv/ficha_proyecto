import { Type } from "class-transformer";
import { Column, Entity, Index, OneToMany, PrimaryColumn } from "typeorm";
import { Pri_Fid_Ficha_Detalle_Entity } from "./pri_fid_ficha_detalle_entity";

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
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_FOR_FEPINI" })
    ficForFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_FOR_FEPFIN" })
    ficForFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_FOR_FERINI" })
    ficForFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_FOR_FERFIN" })
    ficForFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_AMBIEN_SN", length: 1 })
    ficAmbienSn?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_AMB_FEPINI" })
    ficAmbFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_AMB_FEPFIN" })
    ficAmbFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_AMB_FERINI" })
    ficAmbFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_AMB_FERFIN" })
    ficAmbFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_CONTRA_SN", length: 1 })
    ficContraSn?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_CON_FEPINI" })
    ficConFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_CON_FEPFIN" })
    ficConFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_CON_FERINI" })
    ficConFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_CON_FERFIN" })
    ficConFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_EJECUT_SN", length: 1 })
    ficEjecutSn?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_EJE_FEPINI" })
    ficEjeFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_EJE_FEPFIN" })
    ficEjeFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_EJE_FERINI" })
    ficEjeFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_EJE_FERFIN" })
    ficEjeFerfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_LIQUID_SN", length: 1 })
    ficLiquidSn?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_LIQ_FEPINI" })
    ficLiqFepini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_LIQ_FEPFIN" })
    ficLiqFepfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_LIQ_FERINI" })
    ficLiqFerini?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("date", { name: "FIC_LIQ_FERFIN" })
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
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_FECHA_VER" })
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
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_FEC_CREA" })
    ficFecCrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FIC_USUARIO_MOD", length: 30 })
    ficUsuarioMod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FIC_FEC_MOD" })
    ficFecMod?: Date;
    //-----------------------------------------------------------------------------------------

    @OneToMany
        (
            () => Pri_Fid_Ficha_Detalle_Entity,
            v_fid => v_fid.encabezado//,
            //{ eager: true }
        )
    detalles: Pri_Fid_Ficha_Detalle_Entity[];


} //------------