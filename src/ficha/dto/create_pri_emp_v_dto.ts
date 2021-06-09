import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Pri_Emp_V_Dto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'CODIGO DE LA COMPANIA', type: String, })
    empCodcia?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'CODIGO DE CEL', type: String, })
    empCodcel?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'NOMBRE DEL EMPLEADO', type: String, })
    empNombre?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'PLAZA DEL EMPLEADO', type: String, })
    empPlz_Nombre?: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'CODIGO DE LA UNIDAD A LA QUE PERTENECE EL USUARIO', type: Number, })
    empCoduni?: number;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'NOMBRE DE LA UNIDAD A LA QUE PERTENECE EL EMPLEADO', type: String, })
    empUni_Nombre?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODENTI AL QUE PERTENECE EL EMPLEADO', type: String, })
    empCodenti?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESTADO DEL EMPLEADO', type: String, })
    empEstado?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'SEXO DEL EMPLEADO', type: String, })
    empSexo?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CORREO ELECTRÓNICO DEL EMPLEADO', type: String, })
    empCorreo?: string;





}