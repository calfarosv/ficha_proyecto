import { Controller, Get, Param } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { ApoyoService } from './apoyo.service';

@ApiTags('Apoyo')
@Controller('apoyo')
export class ApoyoController {

    constructor(private fichaService: ApoyoService) {
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ESTRUCTURAS DE APOYO
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    


    @ApiHeader({
        name: 'Controlador: @Get(/unidades/)',
        description: 'OBTIENE TODOS LOS REGISTROS A PARTIR DEL BODY',
    })
    @Get('/unidades/')
    buscaTodos_Uni() {
        return this.fichaService.buscaTodas_Uni();
    }
    //-------------------------------------------------------------------------------------------------------------
    @ApiHeader({
        name: 'Controlador: @Get(/unidades/by_pk/:uni_codcia/:uni_codigo)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/unidades/by_pk/:uni_codcia/:uni_codigo')
    async obtiene_unidades_por_llave(
        @Param('uni_codcia') v_codcia: string,
        @Param('uni_codigo') v_coduni: number
    ) {
        const data = await this.fichaService.busca_unidades_por_llave(v_codcia, v_coduni);
        if (!data) { 
            //SI LOS DATOS VIENEN VACIOS, SE DEVUELVEN CORCHETES
            return []
        }
        else {
            // SI LOS DATOS NO VIENEN VACIOS, ENTONCES ES SOLO 1 REGISTRO
            // POR SER UN REGISTRO CONSULTADO POR LA LLAVE, NO SE DEVUELVE ENTRE CORCHETES
            return data;
        }
    }

}