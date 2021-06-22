import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("LIC_PK", ["LicCodigo"], { unique: true })
@Entity("LIC_LIC_LICITACION")

export class Scc_Funcionarios_Resp_Entity {
    
    @PrimaryColumn()
    @Column("varchar2", {primary: true, name: "LIC_CODIGO", length: 15, })
    LicCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_PRECALIF", length: 1, })
    LicPrecalif?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_NOMBRE", length: 1000, })
    LicNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_DESCRIPCION", length: 1000, })
    LicDescripcion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_VEN_INI" , })
    LicVenIni?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_VEN_FIN" , })
    LicVenFin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_NOM_RESP", length: 100, })
    LicNomResp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_TEL_RESP", length: 15, })
    LicTelResp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_TIPO", precision: 4, })
    LicTipo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_OBSERVACIONES", length: 1000, })
    LicObservaciones?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_DEP_RESP", precision: 4, })
    LicDepResp?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_VEN_PRORROGA" , })
    LicVenProrroga?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_TIP_RANGO", precision: 2, })
    LicTipRango?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_ALCANCE", precision: 2, })
    LicAlcance?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_DECLARADA", precision: 2, })
    LicDeclarada?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_TIPO_SOBRE", length: 1, })
    LicTipoSobre?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_APERTURA" , })
    LicFecApertura?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_APERTURA_B" , })
    LicFecAperturaB?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_FAX_RESP", length: 15, })
    LicFaxResp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_FASEACT", precision: 2, })
    LicFaseact?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_COSTBASE", precision: 10, scale: 2, })
    LicCostbase?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_MONBASE", length: 4, })
    LicMonbase?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_INDICVENTA", length: 500, })
    LicIndicventa?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_ENVIADO", length: 1, })
    LicEnviado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_NOTIF" , })
    LicFecNotif?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_RUBRO", length: 1, })
    LicRubro?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FECRECDOC" , })
    LicFecrecdoc?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_PROYOPER", length: 1, })
    LicProyoper?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_PRICONV" , })
    LicFecPriconv?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_CUMCOND" , })
    LicFecCumcond?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_USRCREA", length: 30, })
    LicUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FECCREA" , })
    LicFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_USRMOD", length: 30, })
    LicUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FECMOD" , })
    LicFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_LICID", length: 25, })
    LicLicid?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_CODEMP", length: 8, })
    LicCodemp?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_AUTDOC" , })
    LicFecAutdoc?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FECAPER_C" , })
    LicFecaperC?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_EMIPRES" , })
    LicFecEmipres?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_EMP_RESPONSABLE", length: 8, })
    LicEmpResponsable?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_CODENT", length: 3, })
    LicCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_CDI", length: 1, })
    LicCdi?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_CDI_ORIGEN", length: 1, })
    LicCdiOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_IMPORTACION", length: 1, })
    LicImportacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_PRECAID", length: 25, })
    LicPrecaid?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_PREACTIVA", length: 1, })
    LicPreactiva?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "LIC_VENTABASES", length: 1, })
    LicVentabases?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "LIC_FEC_ADMRECREV" , })
    LicFecAdmrecrev?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_ANIOPC", precision: 4, })
    LicAniopc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_TRIMPC", precision: 1, })
    LicTrimpc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_DIAS_NOTAPE_A", precision: 2, })
    LicDiasNotapeA?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", {name: "LIC_DIAS_NOTAPE_B", precision: 2, })
    LicDiasNotapeB?: number;
    //-----------------------------------------------------------------------------------------
    

}