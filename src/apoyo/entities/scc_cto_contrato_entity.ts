import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_CTO_CK01", ["CtoCiaCodcia", "CtoCorrelativo"], { unique: true })
@Entity("SCC_CTO_CONTRATO")

export class Cei_Oco_Ordenes_Compra_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "CTO_CIA_CODCIA", length: 3, })
    CtoCiaCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "CTO_CORRELATIVO", precision: 20, })
    CtoCorrelativo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PRO_CODIGO", length: 12, })
    CtoProCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ID", length: 20, })
    CtoId?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_OBJETO", length: 1000, })
    CtoObjeto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO", length: 15, })
    CtoTipo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_GERENCIA", length: 3, })
    CtoGerencia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CODENTI", length: 3, })
    CtoCodenti?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CODENTI_PROY", length: 5, })
    CtoCodentiProy?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_FUNC_RESP", precision: 4, })
    CtoFuncResp?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_OBSERV", length: 350, })
    CtoObserv?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ARBITRAJE", precision: 2, })
    CtoArbitraje?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ORIGEN", precision: 2, })
    CtoOrigen?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_GARANTIA_RET", precision: 8, scale: 2, })
    CtoGarantiaRet?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_LICITACION", length: 50, })
    CtoLicitacion?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIRMA_CONT", })
    CtoFecFirmaCont?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIRMA_DIR", })
    CtoFecFirmaDir?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_NOTIF", })
    CtoFecNotif?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_COPIA", })
    CtoFecCopia?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO", })
    CtoFecInicio?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN", })
    CtoFecFin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ESTADO", precision: 2, })
    CtoEstado?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_ESTADO", })
    CtoFecEstado?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_RAZON_ESTADO", length: 200, })
    CtoRazonEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_APROB_INICIO", })
    CtoFecAprobInicio?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ANTICIPO_DED", precision: 8, scale: 2, })
    CtoAnticipoDed?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_ORDEN", })
    CtoFecOrden?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_OTROS_DED", precision: 8, scale: 2, })
    CtoOtrosDed?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_LIQUIDACION", })
    CtoFecLiquidacion?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_REGISTRO", })
    CtoFecRegistro?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO_CONTRATO", length: 2, })
    CtoTipoContrato?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CONFIDENCIAL", length: 1, })
    CtoConfidencial?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_RUTA_CTO_PDF", length: 500, })
    CtoRutaCtoPdf?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPO_EVALUACION", length: 1, })
    CtoTipoEvaluacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ACTIVO", length: 1, })
    CtoActivo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_TIPCAM", length: 1, })
    CtoTipcam?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ESPECIALIDAD", length: 1, })
    CtoEspecialidad?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_DIGITADOR", precision: 4, })
    CtoDigitador?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CODCPC", length: 2, })
    CtoCodcpc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_USRCREA", length: 30, })
    CtoUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FECCREA", })
    CtoFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_USRMOD", length: 30, })
    CtoUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FECMOD", })
    CtoFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODESC", precision: 2, })
    CtoCodesc?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PRY_BIEN_ALMACEN", length: 1, })
    CtoPryBienAlmacen?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO_ETA2", })
    CtoFecInicioEta2?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_ETA2", })
    CtoFecFinEta2?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO_ETA3", })
    CtoFecInicioEta3?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_ETA3", })
    CtoFecFinEta3?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZOPAGO", precision: 3, })
    CtoPlazopago?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_DIGITALIZADO", length: 1, })
    CtoDigitalizado?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_RECCONTCGB", })
    CtoFecReccontcgb?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ANIO_APR", precision: 4, })
    CtoAnioApr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODAPR", precision: 4, })
    CtoCodapr?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ORDEN_INICIO", length: 1, })
    CtoOrdenInicio?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_IMPORTACION", length: 1, })
    CtoImportacion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODPLP", precision: 5, })
    CtoCodplp?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INICIO_ETA1", })
    CtoFecInicioEta1?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_ETA1", })
    CtoFecFinEta1?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PRORROGABLE", length: 1, })
    CtoProrrogable?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_OCO_ANIO", precision: 4, })
    CtoOcoAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODOCO", precision: 6, })
    CtoCodoco?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_HABILES", length: 1, })
    CtoHabiles?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_DIAS_ALARMA_EJEC", precision: 3, })
    CtoDiasAlarmaEjec?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZO_EJEC", precision: 4, })
    CtoPlazoEjec?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_UNI_PLAZO_EJEC", length: 2, })
    CtoUniPlazoEjec?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_COMBUSTIBLE", length: 1, })
    CtoCombustible?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_CONTRAPARTE", length: 250, })
    CtoContraparte?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_MONTO_MENSUAL_PACT", precision: 15, scale: 2, })
    CtoMontoMensualPact?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_GASTO_INST", length: 1, })
    CtoGastoInst?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_CODCOT", precision: 16, })
    CtoCodcot?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_ANIOCOT", precision: 4, })
    CtoAniocot?: number;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_PRES_GARANTIA", })
    CtoFecPresGarantia?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_INGRESO", length: 1, })
    CtoIngreso?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_RECEP_CTO_HABIL", length: 1, })
    CtoRecepCtoHabil?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_VALIDA_CCP", length: 2, })
    CtoValidaCcp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_LACAP", length: 1, })
    CtoLacap?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZO_INFORME", precision: 2, })
    CtoPlazoInforme?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_HABIL_INFORME", length: 1, })
    CtoHabilInforme?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "CTO_PLAZO_REVISION", precision: 4, })
    CtoPlazoRevision?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_HABIL_REVISION", length: 1, })
    CtoHabilRevision?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_APLICA_SUSP", length: 1, })
    CtoAplicaSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_INI_SUSP", })
    CtoFecIniSusp?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_FIN_SUSP", })
    CtoFecFinSusp?: Date;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_APRO_SUSP", })
    CtoFecAproSusp?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_NO_SESION_SUSP", length: 20, })
    CtoNoSesionSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PTO_ACTA_SUSP", length: 20, })
    CtoPtoActaSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_ACUERDO_SUSP", length: 20, })
    CtoAcuerdoSusp?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "CTO_FEC_ORIG_FIN", })
    CtoFecOrigFin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CTO_PLAZO_SUSP_HABIL", length: 1, })
    CtoPlazoSuspHabil?: string;
    //-----------------------------------------------------------------------------------------



}