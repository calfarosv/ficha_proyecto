import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("CEI_OFE_PK", ["ofeCodigo", "ofeCodcia"], { unique: true })
@Entity("CEI_OFE_OFERENTES")

export class Cei_Ofe_Oferentes_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "OFE_CODIGO", length: 12, })
    ofeCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "OFE_CODCIA", length: 3, })
    ofeCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_NOMBRES", length: 50, })
    ofeNombres?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_APELLIDOS", length: 50, })
    ofeApellidos?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_RAZON_SOCIAL", length: 150, })
    ofeRazonSocial?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_CODPAI", length: 3, })
    ofeCodpai?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_ESTATUS", length: 1, })
    ofeEstatus?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_TIPODOC", length: 2, })
    ofeTipodoc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_NATJUR", length: 1, })
    ofeNatjur?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_NACEXT", length: 1, })
    ofeNacext?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_NUMDOC", length: 15, })
    ofeNumdoc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_DIRECCION", length: 150, })
    ofeDireccion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_TELEFONO", length: 60, })
    ofeTelefono?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_FAX", length: 20, })
    ofeFax?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_NIT", length: 14, })
    ofeNit?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_REGFIS", length: 10, })
    ofeRegfis?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OFE_FECING", })
    ofeFecing?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_REPLEGAL", length: 70, })
    ofeReplegal?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_DUI", length: 15, })
    ofeDui?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_CONDICION", length: 2, })
    ofeCondicion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OFE_FEC_ESTADO", })
    ofeFecEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OFE_PRO_ID", precision: 14, })
    ofeProId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_ABRNOM", length: 2, })
    ofeAbrnom?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_DEPEN", length: 2, })
    ofeDepen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OFE_CALIFICACION", precision: 4, scale: 2, })
    ofeCalificacion?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OFE_FECHA_CALI", })
    ofeFechaCali?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OFE_FEC_EMI_DUI", })
    ofeFecEmiDui?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_DUI_DEPTO", length: 2, })
    ofeDuiDepto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_DUI_MUNIC", length: 2, })
    ofeDuiMunic?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OFE_CALIFICA_CTO", precision: 6, scale: 3, })
    ofeCalificaCto?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OFE_FECHA_CALI_CTO", })
    ofeFechaCaliCto?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_ENPRV", length: 1, })
    ofeEnprv?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_USRCREA", length: 30, })
    ofeUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OFE_FECCREA", })
    ofeFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_TESOVALID", length: 1, })
    ofeTesovalid?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_USRMOD", length: 30, })
    ofeUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "OFE_FECMOD", })
    ofeFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OFE_CODATF", precision: 4, })
    ofeCodatf?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "OFE_CONSORCIO", length: 1, })
    ofeConsorcio?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "OFE_CODRLE", precision: 5, })
    ofeCodrle?: number;
    //-----------------------------------------------------------------------------------------



}