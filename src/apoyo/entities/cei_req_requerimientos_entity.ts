import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("PK_CEI_REQ_REQUERIMIENTOS", ["reqCodcia", "reqCodctc", "reqCodent", "reqAnio", "reqId"], { unique: true })
@Entity("CEI_REQ_REQUERIMIENTOS")

export class Cei_Req_Requerimientos_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "REQ_CODCIA", length: 3, })
    reqCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "REQ_CODCTC", length: 2, })
    reqCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "REQ_CODENT", length: 3, })
    reqCodent?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "REQ_ANIO", precision: 4, })
    reqAnio?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "REQ_ID", precision: 14, })
    reqId?: number;
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PCM_ID", precision: 20, })
    reqPcmId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PCM_PCO_ID", precision: 4, })
    reqPcmPcoId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PCM_PCOANIO", precision: 4, })
    reqPcmPcoanio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPCOD_SOL", length: 7, })
    reqEmpcodSol?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_EAU_ID_SOL", precision: 4, })
    reqEauIdSol?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_EAU_ID_AUTO", precision: 4, })
    reqEauIdAuto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPCOD_AUTO", length: 7, })
    reqEmpcodAuto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODDIR", length: 1, })
    reqCoddir?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODFVAR", length: 1, })
    reqCodfvar?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_REQUE", })
    reqFechaReque?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_MES", precision: 2, })
    reqMes?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_DESTINADA", length: 3, })
    reqDestinada?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_COSTO_SIVA", precision: 12, scale: 2, })
    reqCostoSiva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_IVA", precision: 12, scale: 2, })
    reqIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_PRECIO_IVA", length: 3, })
    reqPrecioIva?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_RENTA", precision: 12, scale: 2, })
    reqRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO_RENTA", length: 3, })
    reqTipoRenta?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO_COMPRA", length: 3, })
    reqTipoCompra?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_USO", })
    reqFechaUso?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COMENT_ESTADO", length: 1000, })
    reqComentEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COMENT_USO", length: 400, })
    reqComentUso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPLEADO", length: 7, })
    reqEmpleado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_USUARIO", length: 20, })
    reqUsuario?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ESTADO", length: 3, })
    reqEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_ESTADO", })
    reqFechaEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PORC_RENT", precision: 3, scale: 2, })
    reqPorcRent?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_TOTAL", precision: 12, scale: 2, })
    reqTotal?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_PROYECTO", length: 5, })
    reqProyecto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_UBI_ID", precision: 5, })
    reqUbiId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ESPECIFICACIONES", length: 1800, })
    reqEspecificaciones?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODUEM", precision: 4, })
    reqCoduem?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_AUTO", })
    reqFechaAuto?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECASI", })
    reqFecasi?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECCOT", })
    reqFeccot?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECADJ", })
    reqFecadj?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_OBS_ANALISTA", length: 200, })
    reqObsAnalista?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COTIZADO", length: 1, })
    reqCotizado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODCOU", precision: 10, })
    reqCodcou?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CLACOM", length: 3, })
    reqClacom?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO", length: 3, })
    reqTipo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_ANIOAPR", precision: 4, })
    reqAnioapr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODAPR", precision: 4, })
    reqCodapr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODUEM_HIST", precision: 4, })
    reqCoduemHist?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ENVIO_COTI", length: 1, })
    reqEnvioCoti?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_RESOLUCION", length: 1, })
    reqResolucion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECINIPUB", })
    reqFecinipub?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECFINPUB", })
    reqFecfinpub?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_PUBLICA", length: 1, })
    reqPublica?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODRGA", precision: 5, })
    reqCodrga?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECOFERTA", })
    reqFecoferta?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_SEGCVNC", length: 1, })
    reqSegcvnc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODMTO", length: 5, })
    reqCodmto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_ANIOMTTO", precision: 4, })
    reqAniomtto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODUNG", length: 7, })
    reqCodung?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODSIS", length: 3, })
    reqCodsis?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_APROBADO", length: 7, })
    reqAprobado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_VISTOB", length: 7, })
    reqVistob?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_GARANTIA", length: 1, })
    reqGarantia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_INDTGA", length: 1, })
    reqIndtga?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_JUSDEV", length: 500, })
    reqJusdev?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECDES", })
    reqFecdes?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COMDES", length: 2000, })
    reqComdes?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_IMPRESO", length: 1, })
    reqImpreso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO_GESTION", length: 1, })
    reqTipoGestion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_REVISION", length: 500, })
    reqRevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_VALIDACION", length: 500, })
    reqValidacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EREVISION", length: 1, })
    reqErevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EVALIDACION", length: 1, })
    reqEvalidacion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FREVISION", })
    reqFrevision?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FVALIDACION", })
    reqFvalidacion?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ENTSEG", length: 3, })
    reqEntseg?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPREVISION", length: 7, })
    reqEmprevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPVALIDACION", length: 7, })
    reqEmpvalidacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_MIMPSEG", precision: 12, scale: 2, })
    reqMimpseg?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_IVARET", precision: 12, scale: 2, })
    reqIvaret?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_DESCUENTO", precision: 12, scale: 2, })
    reqDescuento?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_RECPAR", length: 1, })
    reqRecpar?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_JUSPAAC", length: 1000, })
    reqJuspaac?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODEMP_ELA", length: 8, })
    reqCodempEla?: string;
    //-----------------------------------------------------------------------------------------

}