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
        //console.log('data: ', data);
        // VERIFICO SI LOS DATOS OBTENIDOS SON VARIOS REGISTROS, SOLO UNO O NINGUNO
        // PRIMERO SE DEFINE SI LOS DATOS SON UN ARREGLO O NO
        if (Array.isArray(data)) {
            //console.log('Es un arreglo');
            //SI ES UN ARREGLO, SE DEVUELVE CADA REGISTRO COMO JASON (LOS CORCHETES SON AUTOMATICOS POR SER ARREGLO)
            return data
        }
        else {
            //console.log('NO es un arreglo');
            //SI NO ES UN ARREGLO, VERIFICO SI LOS DATOS VIENEN VACIOS O NO
            if (!data) {
                //SI LOS DATOS VIENEN VACIOS, SE DEVUELVEN CORCHETES
                return []
            }
            else {
                // SI LOS DATOS NO VIENEN VACIOS, ENTONCES ES SOLO 1 REGISTRO
                // SE DEVUELVE ENTRE CORCHETES
                return [data];
            }
        }
    }

}