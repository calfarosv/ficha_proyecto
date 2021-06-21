import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Pri_Fid_Dto {

    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    //////////////////////////////////////////////////////////////////////////////////// 
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'CÓDIGO PROYECTO', type: Number, })
    fidCodfic?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'VERSIÓN PROYECTO', type: Number, })
    fidCodver?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'CORRELATIVO PROCESO', type: Number, })
    fidCodigo?: number;
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'TIPO-C-CONTRATOS (VALOR POR DEFECTO), O-ORDEN DE COMPRAS', type: String, })
    fidTipo?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CONTRATO', type: Number, })
    fidCodcto?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'NÚMERO DE ORDEN DE COMPRA', type: Number, })
    fidCodoco?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO DE ORDEN DE COMPRA', type: Number, })
    fidOcoanio?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'DESCRIPCIÓN PROCESO-OBJETO DEL CONTRATO O COMENTARIO DE USO O.C.', type: String, })
    fidDescripcion?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CONTRATISTA-CONTRATISTA U OFERENTE ADJUDICADO', type: String, })
    fidContratista?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    @IsString()
    @IsOptional() @ApiProperty({ description: 'ADMINISTRADOR-ADMINISTRADOR DE CONTRATO O DE O.C.', type: String, })
    fidAdministra?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'SUPERVISOR-EMPLEADO DE CEL', type: String, })
    fidSupervisor?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'OBSERVACIONES', type: String, })
    fidObservaciones?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DE LICITACIÓN ORIGEN', type: String, })
    fidOriCodlic?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CENTRO DE COSTO REQ. ORIGEN', type: String, })
    fidCodctc?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODENTI REQ. ORIGEN', type: String, })
    fidCodent?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO REQ. ORIGEN', type: Number, })
    fidOriReqanio?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DE REQ ORIGEN', type: Number, })
    fidOriCodreq?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional() @ApiProperty({ description: 'DESCRIPCIÓN PROCESO ORIGEN-NOMBRE DE LICITACIÓN O COMENTARIO USO REQ.', type: String, })
    fidOriDescrip?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'MONTO PROCESO-VALOR POR DEFECTO 0, PARA LICITACIONES, PARA COMPRAS', type: Number, })
    fidMontoPro?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESTADO PROCESO-PARA REQUERIMIENTO ESTADO, PARA LICITACIONES', type: String, })
    fidEstadoPro?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'RESULTADO-D – DESIERTO, A-ADJUDICADO', type: String, })
    fidResultado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'MONTO ORIGINAL-MONTO CONTRACTUAL ORIGINAL / MONTO ADJUDICADO. VALOR POR DEFECTO 0.00', type: Number, })
    fidMontoOri?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'MONTO ACTUALIZADO-MONTO CONTRACTUAL ACTUALIZADO / MONTO ADJUDICADO. VALOR POR DEFECTO 0.00', type: Number, })
    fidMontoAct?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'MONTO DE ANTICIPO-VALOR POR DEFECTO 0.00, PARA CONTRATOS DE FACTURAS, PARA COMPRAS', type: Number, })
    fidMontoAnt?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'MONTO DE ESTIMACIONES-VALOR POR DEFECTO 0.00, PARA CONTRATOS DE FACTURAS, PARA COMPRAS', type: Number, })
    fidMontoEst?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'TOTAL PAGADO-VALOR POR DEFECTO 0.00, PARA CONTRATOS DE FACTURAS, PARA COMPRAS MONTO ORDEN DE COMPRAS', type: Number, })
    fidMontoTpa?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA ORDEN DE INICIO-PARA CONTRATOS, INICIO DE PERÍODO DE EJECUCIÓN, PARA COMPRAS', type: Date, })
    @Type(() => Date)
    fidFecOrdini?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'PLAZO ORIGINAL-VALOR POR DEFECTO 0, PARA COMPRAS', type: Number, })
    fidPlazoOrig?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN ORIGINAL-PARA CONTRATOS, FIN DE PERÍODO DE EJECUCIÓN, PARA COMPRAS', type: Date, })
    @Type(() => Date)
    fidFecFinori?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'PLAZO ACTUALIZADO-PARA COMPRAS', type: Number, })
    fidPlazoActu?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FIN ACTUALIZADA-PARA CONTRATOS, FIN ACTUALIZADA, PARA COMPRAS', type: Date, })
    @Type(() => Date)
    fidFecFinact?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE CREÓ', type: String, })
    fidUsuarioCrea?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA DE CREACIÓN', type: Date, })
    @Type(() => Date)
    fidFecCrea?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE ACTUALIZÓ', type: String, })
    fidUsuarioMod?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA DE ACTUALIZACIÓN', type: Date, })
    @Type(() => Date)
    fidFecMod?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}