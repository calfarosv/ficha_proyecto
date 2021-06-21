import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Pri_Fic_Dto {

    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    //////////////////////////////////////////////////////////////////////////////////// 
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'CÓDIGO', type: Number, })
    ficCodigo?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'VERSIÓN', type: Number, })
    ficVersion?: number;
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'NOMBRE', type: String, })
    ficNombre?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'DESCRIPCIÓN', type: String, })
    ficDescripcion?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'DEPENDENCIA SOLICITANTE - LISTA DE VALORES DE PLA_UNI_UNIDAD ACTIVAS', type: Number, })
    ficCoduniSol?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'DEPENDENCIA EJECUTORA - LISTA DE VALORES DE PLA_UNI_UNIDAD ACTIVAS', type: Number, })
    ficCoduniEje?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO RESPONSABLE DEL PROYECTO - LISTA DE VALORES DE PLA_EMP_EMPLEADO ACTIVOS', type: String, })
    ficCodcelRes?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'FORMULACIÓN - APLICA O NO APLICA', type: String, })
    ficFormulSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficForFepini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficForFepfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficForFerini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficForFerfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CATEGORÍA AMBIENTAL - APLICA O NO APLICA', type: String, })
    ficAmbienSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficAmbFepini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficAmbFepfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficAmbFerini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficAmbFerfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CONTRATACIÓN - APLICA O NO APLICA', type: String, })
    ficContraSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficConFepini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficConFepfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficConFerini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficConFerfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EJECUCIÓN - APLICA O NO APLICA', type: String, })
    ficEjecutSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficEjeFepini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficEjeFepfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficEjeFerini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficEjeFerfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'LIQUIDACIÓN - APLICA O NO APLICA', type: String, })
    ficLiquidSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficLiqFepini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN PROGRAMADA DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficLiqFepfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA INICIAL REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficLiqFerini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN REAL DE LA FORMULACIÓN', type: Date, })
    @Type(() => Date)
    ficLiqFerfin?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESPECIFICACIONES TÉCNICAS - APLICA O NO APLICA', type: String, })
    ficEsptecSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE ESPECIFICACIONES TÉCNICAS - VALOR POR DEFECTO 0%', type: Number, })
    ficEsptecPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'FORMULARIOS TÉCNICOS - APLICA O NO APLICA', type: String, })
    ficFortecSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE FORMULARIOS TÉCNICOS - VALOR POR DEFECTO 0%', type: Number, })
    ficFortecPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'PLANOS - APLICA O NO APLICA', type: String, })
    ficPlanosSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE PLANOS - VALOR POR DEFECTO 0%', type: Number, })
    ficPlanosPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'PRESUPUESTO - APLICA O NO APLICA', type: String, })
    ficPresupSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE PRESUPUESTO - VALOR POR DEFECTO 0%', type: Number, })
    ficPresupPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'BASES DE LICITACIÓN / CONCURSO - APLICA O NO APLICA', type: String, })
    ficBaslicSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE BASES DE LICITACIÓN / CONCURSO - VALOR POR DEFECTO 0%', type: Number, })
    ficBaslicPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'FORMULARIO AMBIENTAL - APLICA O NO APLICA', type: String, })
    ficForambSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE FORMULARIO AMBIENTAL - VALOR POR DEFECTO 0%', type: Number, })
    ficForambPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CATEGORIZACIÓN AMBIENTAL - APLICA O NO APLICA', type: String, })
    ficCatambSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE CATEGORIZACIÓN AMBIENTAL - VALOR POR DEFECTO 0%', type: Number, })
    ficCatambPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESTUDIO DE IMPACTO AMBIENTAL - APLICA O NO APLICA', type: String, })
    ficEstimpSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE ESTUDIO DE IMPACTO AMBIENTAL - VALOR POR DEFECTO 0%', type: Number, })
    ficEstimpPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'PERMISO AMBIENTAL - APLICA O NO APLICA', type: String, })
    ficPerambSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE PERMISO AMBIENTAL - VALOR POR DEFECTO 0%', type: Number, })
    ficPerambPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'PERMISOS DE CONSTRUCCIÓN - APLICA O NO APLICA', type: String, })
    ficPerconSn?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: '% DE AVANCE PERMISOS DE CONSTRUCCIÓN - VALOR POR DEFECTO 0%', type: Number, })
    ficPerconPor?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'OBSERVACIONES', type: String, })
    ficObservFic?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA VERSIÓN', type: Date, })
    @Type(() => Date)
    ficFechaVer?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESTADO VERSIÓN - VALOR POR DEFECTO: A-ABIERTO', type: String, })
    ficEstadoVer?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO GENERÓ VERSIÓN', type: String, })
    ficUsuarioVer?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'OBSERVACIONES VERSIÓN', type: String, })
    ficObservVer?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE CREÓ', type: String, })
    ficUsuarioCrea?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA DE CREACIÓN', type: Date, })
    @Type(() => Date)
    ficFecCrea?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE ACTUALIZÓ', type: String, })
    ficUsuarioMod?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA DE ACTUALIZACIÓN', type: Date, })
    @Type(() => Date)
    ficFecMod?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}