import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Pri_Usu_Dto {
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'CODIGO DE LA COMPANIA', type: String, })
    usuCodcia?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'USUARIO EN LA BASE DE DATOS', type: String, })
    usuUsuario?: string;
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA UNIDAD A LA QUE PERTENECE EL USUARIO', type: Number, })
    usuCoduni?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE EMPLEADO DE CEL', type: String, })
    usuCodcel?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CORREO ELECTRÓNICO DEL USUARIO', type: String, })
    usuEmail?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'TIPO DE USUARIO', type: String, })
    usuTipo?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}