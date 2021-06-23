import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("LIC_PK", ["licCodigo"], { unique: true })
@Entity("LIC_LIC_LICITACION")

export class Lic_Lic_Licitacion_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "LIC_CODIGO", length: 15, })
    licCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_PRECALIF", length: 1, })
    licPrecalif?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_NOMBRE", length: 1000, })
    licNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_DESCRIPCION", length: 1000, })
    licDescripcion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_VEN_INI", })
    licVenIni?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_VEN_FIN", })
    licVenFin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_NOM_RESP", length: 100, })
    licNomResp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_TEL_RESP", length: 15, })
    licTelResp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_TIPO", precision: 4, })
    licTipo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_OBSERVACIONES", length: 1000, })
    licObservaciones?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_DEP_RESP", precision: 4, })
    licDepResp?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_VEN_PRORROGA", })
    licVenProrroga?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_TIP_RANGO", precision: 2, })
    licTipRango?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_ALCANCE", precision: 2, })
    licAlcance?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_DECLARADA", precision: 2, })
    licDeclarada?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_TIPO_SOBRE", length: 1, })
    licTipoSobre?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_APERTURA", })
    licFecApertura?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_APERTURA_B", })
    licFecAperturaB?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_FAX_RESP", length: 15, })
    licFaxResp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_FASEACT", precision: 2, })
    licFaseact?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_COSTBASE", precision: 10, scale: 2, })
    licCostbase?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_MONBASE", length: 4, })
    licMonbase?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_INDICVENTA", length: 500, })
    licIndicventa?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_ENVIADO", length: 1, })
    licEnviado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_NOTIF", })
    licFecNotif?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_RUBRO", length: 1, })
    licRubro?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FECRECDOC", })
    licFecrecdoc?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_PROYOPER", length: 1, })
    licProyoper?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_PRICONV", })
    licFecPriconv?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_CUMCOND", })
    licFecCumcond?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_USRCREA", length: 30, })
    licUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FECCREA", })
    licFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_USRMOD", length: 30, })
    licUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FECMOD", })
    licFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_LICID", length: 25, })
    licLicid?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_CODEMP", length: 8, })
    licCodemp?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_AUTDOC", })
    licFecAutdoc?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FECAPER_C", })
    licFecaperC?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_EMIPRES", })
    licFecEmipres?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_EMP_RESPONSABLE", length: 8, })
    licEmpResponsable?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_CODENT", length: 3, })
    licCodent?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_CDI", length: 1, })
    licCdi?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_CDI_ORIGEN", length: 1, })
    licCdiOrigen?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_IMPORTACION", length: 1, })
    licImportacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_PRECAID", length: 25, })
    licPrecaid?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_PREACTIVA", length: 1, })
    licPreactiva?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "LIC_VENTABASES", length: 1, })
    licVentabases?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "LIC_FEC_ADMRECREV", })
    licFecAdmrecrev?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_ANIOPC", precision: 4, })
    licAniopc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_TRIMPC", precision: 1, })
    licTrimpc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_DIAS_NOTAPE_A", precision: 2, })
    licDiasNotapeA?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "LIC_DIAS_NOTAPE_B", precision: 2, })
    licDiasNotapeB?: number;
    //-----------------------------------------------------------------------------------------


}