import { Controller, Get } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { FichaService } from './ficha.service';

@ApiTags('Ficha')
@Controller('ficha')
export class FichaController {

    constructor(private fichaService: FichaService) {
    }

    //------------ GET - OBTIENE TODOS LOS REGISTROS DEL CATALOGO A PARTIR DEL BODY
    @ApiHeader({
        name: 'Controlador: @Get()',
        description: 'OBTIENE TODOS LOS REGISTROS DEL CATALOGO DE USUARIOS A PARTIR DEL BODY',
    })
    @Get('/usuarios/')
    findAllUsu() {
        return this.fichaService.findAllUsu();
    }    
/*
    //------------ GET - OBTIENE LOS REGISTROS DE DETALLE FILTRADOS A PARTIR DEL BODY
    @ApiHeader({
        name: 'Controlador: @Get(/by_key/)',
        description: 'OBTIENE LOS REGISTROS DEL CATALOGO DE USUARIOS FILTRADOS A PARTIR DEL BODY',
    })
    @Get('/by_key/')
    async findBy_KeyDet(@Body() dto: Edit_Upt_Dto) {
        const data: any[] = await this.usuariosService.busca_usuario(dto.uptCodcia, dto.uptCodemp, dto.uptCoduni, dto.uptCoddep);
        if (data.length === 1) {
            return data[0];
        }
        return data;
    }

    //------------ GET - OBTIENE registros del CATALOGO DE USUARIOS via URL a partir de la PK
    @ApiHeader({
        name: 'Controlador: @Get(/by_usu/:upt_codcia/:upt_usuario//)',
        description: 'OBTIENE registros del CATALOGO DE USUARIOS via URL a partir de la PK',
    })
    @Get('/by_usu/:upt_codcia/:upt_usuario/')
    async obtiene_usuario_usu(
        @Param('upt_codcia') v_codcia: string,
        @Param('upt_usuario') v_usuario: string
        ) {
        const data = await this.usuariosService.busca_usuario_usu(v_codcia, v_usuario);
        return data;
    }    
*/
    //*************************





}
