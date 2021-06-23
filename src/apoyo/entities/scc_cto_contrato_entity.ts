import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_CTO_CK01", ["ctoCiaCodcia", "ctoCorrelativo"], { unique: true })
@Entity("SCC_CTO_CONTRATO")

export class Scc_Cto_Contrato_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "CTO_CIA_CODCIA", length: 3, })
    ctoCiaCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "CTO_CORRELATIVO", precision: 20, })
    ctoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PRO_CODIGO", length: 12, })
    ctoProCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ID", length: 20, })
    ctoId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_OBJETO", length: 1000, })
    ctoObjeto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO", length: 15, })
    ctoTipo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_GERENCIA", length: 3, })
    ctoGerencia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CODENTI", length: 3, })
    ctoCodenti?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CODENTI_PROY", length: 5, })
    ctoCodentiProy?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_FUNC_RESP", precision: 4, })
    ctoFuncResp?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_OBSERV", length: 350, })
    ctoObserv?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ARBITRAJE", precision: 2, })
    ctoArbitraje?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ORIGEN", precision: 2, })
    ctoOrigen?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_GARANTIA_RET", precision: 8, scale: 2, })
    ctoGarantiaRet?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_LICITACION", length: 50, })
    ctoLicitacion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIRMA_CONT", })
    ctoFecFirmaCont?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIRMA_DIR", })
    ctoFecFirmaDir?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_NOTIF", })
    ctoFecNotif?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_COPIA", })
    ctoFecCopia?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO", })
    ctoFecInicio?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN", })
    ctoFecFin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ESTADO", precision: 2, })
    ctoEstado?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_ESTADO", })
    ctoFecEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_RAZON_ESTADO", length: 200, })
    ctoRazonEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_APROB_INICIO", })
    ctoFecAprobInicio?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ANTICIPO_DED", precision: 8, scale: 2, })
    ctoAnticipoDed?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_ORDEN", })
    ctoFecOrden?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_OTROS_DED", precision: 8, scale: 2, })
    ctoOtrosDed?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_LIQUIDACION", })
    ctoFecLiquidacion?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_REGISTRO", })
    ctoFecRegistro?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO_CONTRATO", length: 2, })
    ctoTipoContrato?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CONFIDENCIAL", length: 1, })
    ctoConfidencial?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_RUTA_CTO_PDF", length: 500, })
    ctoRutaCtoPdf?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO_EVALUACION", length: 1, })
    ctoTipoEvaluacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ACTIVO", length: 1, })
    ctoActivo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPCAM", length: 1, })
    ctoTipcam?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ESPECIALIDAD", length: 1, })
    ctoEspecialidad?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_DIGITADOR", precision: 4, })
    ctoDigitador?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CODCPC", length: 2, })
    ctoCodcpc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_USRCREA", length: 30, })
    ctoUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FECCREA", })
    ctoFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_USRMOD", length: 30, })
    ctoUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FECMOD", })
    ctoFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODESC", precision: 2, })
    ctoCodesc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PRY_BIEN_ALMACEN", length: 1, })
    ctoPryBienAlmacen?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO_ETA2", })
    ctoFecInicioEta2?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_ETA2", })
    ctoFecFinEta2?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO_ETA3", })
    ctoFecInicioEta3?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_ETA3", })
    ctoFecFinEta3?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZOPAGO", precision: 3, })
    ctoPlazopago?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_DIGITALIZADO", length: 1, })
    ctoDigitalizado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_RECCONTCGB", })
    ctoFecReccontcgb?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ANIO_APR", precision: 4, })
    ctoAnioApr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODAPR", precision: 4, })
    ctoCodapr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ORDEN_INICIO", length: 1, })
    ctoOrdenInicio?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_IMPORTACION", length: 1, })
    ctoImportacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODPLP", precision: 5, })
    ctoCodplp?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO_ETA1", })
    ctoFecInicioEta1?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_ETA1", })
    ctoFecFinEta1?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PRORROGABLE", length: 1, })
    ctoProrrogable?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_OCO_ANIO", precision: 4, })
    ctoOcoAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODOCO", precision: 6, })
    ctoCodoco?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_HABILES", length: 1, })
    ctoHabiles?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_DIAS_ALARMA_EJEC", precision: 3, })
    ctoDiasAlarmaEjec?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZO_EJEC", precision: 4, })
    ctoPlazoEjec?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_UNI_PLAZO_EJEC", length: 2, })
    ctoUniPlazoEjec?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_COMBUSTIBLE", length: 1, })
    ctoCombustible?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CONTRAPARTE", length: 250, })
    ctoContraparte?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_MONTO_MENSUAL_PACT", precision: 15, scale: 2, })
    ctoMontoMensualPact?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_GASTO_INST", length: 1, })
    ctoGastoInst?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODCOT", precision: 16, })
    ctoCodcot?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ANIOCOT", precision: 4, })
    ctoAniocot?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_PRES_GARANTIA", })
    ctoFecPresGarantia?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_INGRESO", length: 1, })
    ctoIngreso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_RECEP_CTO_HABIL", length: 1, })
    ctoRecepCtoHabil?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_VALIDA_CCP", length: 2, })
    ctoValidaCcp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_LACAP", length: 1, })
    ctoLacap?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZO_INFORME", precision: 2, })
    ctoPlazoInforme?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_HABIL_INFORME", length: 1, })
    ctoHabilInforme?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZO_REVISION", precision: 4, })
    ctoPlazoRevision?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_HABIL_REVISION", length: 1, })
    ctoHabilRevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_APLICA_SUSP", length: 1, })
    ctoAplicaSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INI_SUSP", })
    ctoFecIniSusp?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_SUSP", })
    ctoFecFinSusp?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_APRO_SUSP", })
    ctoFecAproSusp?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_NO_SESION_SUSP", length: 20, })
    ctoNoSesionSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PTO_ACTA_SUSP", length: 20, })
    ctoPtoActaSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ACUERDO_SUSP", length: 20, })
    ctoAcuerdoSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_ORIG_FIN", })
    ctoFecOrigFin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PLAZO_SUSP_HABIL", length: 1, })
    ctoPlazoSuspHabil?: string;
    //-----------------------------------------------------------------------------------------



}