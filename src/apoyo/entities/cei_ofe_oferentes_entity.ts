import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("CEI_OFE_PK", ["OfeCodigo", "OfeCodcia"], { unique: true })
@Entity("CEI_OFE_OFERENTES")

export class Cei_Ofe_Oferentes_Entity {

    @PrimaryColumn()
    @Column("varchar2", {primary: true, name: "OFE_CODIGO", length: 12, })
    OfeCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", {primary: true, name: "OFE_CODCIA", length: 3, })
    OfeCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_NOMBRES", length: 50, })
    OfeNombres?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_APELLIDOS", length: 50, })
    OfeApellidos?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_RAZON_SOCIAL", length: 150, })
    OfeRazonSocial?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_CODPAI", length: 3, })
    OfeCodpai?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_ESTATUS", length: 1, })
    OfeEstatus?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_TIPODOC", length: 2, })
    OfeTipodoc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_NATJUR", length: 1, })
    OfeNatjur?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_NACEXT", length: 1, })
    OfeNacext?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_NUMDOC", length: 15, })
    OfeNumdoc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_DIRECCION", length: 150, })
    OfeDireccion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_TELEFONO", length: 60, })
    OfeTelefono?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_FAX", length: 20, })
    OfeFax?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_NIT", length: 14, })
    OfeNit?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_REGFIS", length: 10, })
    OfeRegfis?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "OFE_FECING" , })
    OfeFecing?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_REPLEGAL", length: 70, })
    OfeReplegal?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_DUI", length: 15, })
    OfeDui?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_CONDICION", length: 2, })
    OfeCondicion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "OFE_FEC_ESTADO" , })
    OfeFecEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "OFE_PRO_ID", precision: 14, })
    OfeProId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_ABRNOM", length: 2, })
    OfeAbrnom?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_DEPEN", length: 2, })
    OfeDepen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "OFE_CALIFICACION", precision: 4, scale: 2, })
    OfeCalificacion?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "OFE_FECHA_CALI" , })
    OfeFechaCali?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "OFE_FEC_EMI_DUI" , })
    OfeFecEmiDui?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_DUI_DEPTO", length: 2, })
    OfeDuiDepto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_DUI_MUNIC", length: 2, })
    OfeDuiMunic?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "OFE_CALIFICA_CTO", precision: 6, scale: 3, })
    OfeCalificaCto?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "OFE_FECHA_CALI_CTO" , })
    OfeFechaCaliCto?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_ENPRV", length: 1, })
    OfeEnprv?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_USRCREA", length: 30, })
    OfeUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "OFE_FECCREA" , })
    OfeFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_TESOVALID", length: 1, })
    OfeTesovalid?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_USRMOD", length: 30, })
    OfeUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "OFE_FECMOD" , })
    OfeFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "OFE_CODATF", precision: 4, })
    OfeCodatf?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "OFE_CONSORCIO", length: 1, })
    OfeConsorcio?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "OFE_CODRLE", precision: 5, })
    OfeCodrle?: number;
    //-----------------------------------------------------------------------------------------
    
    

}