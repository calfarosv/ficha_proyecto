import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("PK_CEI_REQ_REQUERIMIENTOS", ["ReqCodcia", "ReqCodctc", "ReqCodent", "ReqAnio", "ReqId"], { unique: true })
@Entity("CEI_REQ_REQUERIMIENTOS")

export class Cei_Req_Requerimientos_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "REQ_CODCIA", length: 3, })
    ReqCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "REQ_CODCTC", length: 2, })
    ReqCodctc?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "REQ_CODENT", length: 3, })
    ReqCodent?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "REQ_ANIO", precision: 4, })
    ReqAnio?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "REQ_ID", precision: 14, })
    ReqId?: number;
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PCM_ID", precision: 20, })
    ReqPcmId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PCM_PCO_ID", precision: 4, })
    ReqPcmPcoId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PCM_PCOANIO", precision: 4, })
    ReqPcmPcoanio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPCOD_SOL", length: 7, })
    ReqEmpcodSol?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_EAU_ID_SOL", precision: 4, })
    ReqEauIdSol?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_EAU_ID_AUTO", precision: 4, })
    ReqEauIdAuto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPCOD_AUTO", length: 7, })
    ReqEmpcodAuto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODDIR", length: 1, })
    ReqCoddir?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODFVAR", length: 1, })
    ReqCodfvar?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_REQUE", })
    ReqFechaReque?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_MES", precision: 2, })
    ReqMes?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_DESTINADA", length: 3, })
    ReqDestinada?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_COSTO_SIVA", precision: 12, scale: 2, })
    ReqCostoSiva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_IVA", precision: 12, scale: 2, })
    ReqIva?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_PRECIO_IVA", length: 3, })
    ReqPrecioIva?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_RENTA", precision: 12, scale: 2, })
    ReqRenta?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO_RENTA", length: 3, })
    ReqTipoRenta?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO_COMPRA", length: 3, })
    ReqTipoCompra?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_USO", })
    ReqFechaUso?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COMENT_ESTADO", length: 1000, })
    ReqComentEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COMENT_USO", length: 400, })
    ReqComentUso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPLEADO", length: 7, })
    ReqEmpleado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_USUARIO", length: 20, })
    ReqUsuario?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ESTADO", length: 3, })
    ReqEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_ESTADO", })
    ReqFechaEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_PORC_RENT", precision: 3, scale: 2, })
    ReqPorcRent?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_TOTAL", precision: 12, scale: 2, })
    ReqTotal?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_PROYECTO", length: 5, })
    ReqProyecto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_UBI_ID", precision: 5, })
    ReqUbiId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ESPECIFICACIONES", length: 1800, })
    ReqEspecificaciones?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODUEM", precision: 4, })
    ReqCoduem?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECHA_AUTO", })
    ReqFechaAuto?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECASI", })
    ReqFecasi?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECCOT", })
    ReqFeccot?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECADJ", })
    ReqFecadj?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_OBS_ANALISTA", length: 200, })
    ReqObsAnalista?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COTIZADO", length: 1, })
    ReqCotizado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODCOU", precision: 10, })
    ReqCodcou?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CLACOM", length: 3, })
    ReqClacom?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO", length: 3, })
    ReqTipo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_ANIOAPR", precision: 4, })
    ReqAnioapr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODAPR", precision: 4, })
    ReqCodapr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODUEM_HIST", precision: 4, })
    ReqCoduemHist?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ENVIO_COTI", length: 1, })
    ReqEnvioCoti?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_RESOLUCION", length: 1, })
    ReqResolucion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECINIPUB", })
    ReqFecinipub?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECFINPUB", })
    ReqFecfinpub?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_PUBLICA", length: 1, })
    ReqPublica?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_CODRGA", precision: 5, })
    ReqCodrga?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECOFERTA", })
    ReqFecoferta?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_SEGCVNC", length: 1, })
    ReqSegcvnc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODMTO", length: 5, })
    ReqCodmto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_ANIOMTTO", precision: 4, })
    ReqAniomtto?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODUNG", length: 7, })
    ReqCodung?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODSIS", length: 3, })
    ReqCodsis?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_APROBADO", length: 7, })
    ReqAprobado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_VISTOB", length: 7, })
    ReqVistob?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_GARANTIA", length: 1, })
    ReqGarantia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_INDTGA", length: 1, })
    ReqIndtga?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_JUSDEV", length: 500, })
    ReqJusdev?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FECDES", })
    ReqFecdes?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_COMDES", length: 2000, })
    ReqComdes?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_IMPRESO", length: 1, })
    ReqImpreso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_TIPO_GESTION", length: 1, })
    ReqTipoGestion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_REVISION", length: 500, })
    ReqRevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_VALIDACION", length: 500, })
    ReqValidacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EREVISION", length: 1, })
    ReqErevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EVALIDACION", length: 1, })
    ReqEvalidacion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FREVISION", })
    ReqFrevision?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "REQ_FVALIDACION", })
    ReqFvalidacion?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_ENTSEG", length: 3, })
    ReqEntseg?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPREVISION", length: 7, })
    ReqEmprevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_EMPVALIDACION", length: 7, })
    ReqEmpvalidacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_MIMPSEG", precision: 12, scale: 2, })
    ReqMimpseg?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_IVARET", precision: 12, scale: 2, })
    ReqIvaret?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "REQ_DESCUENTO", precision: 12, scale: 2, })
    ReqDescuento?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_RECPAR", length: 1, })
    ReqRecpar?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_JUSPAAC", length: 1000, })
    ReqJuspaac?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "REQ_CODEMP_ELA", length: 8, })
    ReqCodempEla?: string;
    //-----------------------------------------------------------------------------------------

}