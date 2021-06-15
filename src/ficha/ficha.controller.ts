import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { Create_Pri_Usu_Dto } from './dto/create_pri_usu_dto';
import { Edit_Pri_Usu_Dto } from './dto/edit_pri_usu_dto';
import { FichaService } from './ficha.service';

@ApiTags('Ficha')
@Controller('ficha')
export class FichaController {

    constructor(private fichaService: FichaService) {
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
        name: 'Controlador: @Get(/unidades/by_key/:uni_codcia/:uni_codigo)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/unidades/by_key/:uni_codcia/:uni_codigo')
    async obtiene_unidades_por_llave(
        @Param('uni_codcia') v_codcia: string,
        @Param('uni_codigo') v_coduni: number
    ) {
        const data = await this.fichaService.busca_unidades_por_llave(v_codcia, v_coduni);
        return data;
    }


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // USUARIOS
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    

    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/)',
        description: 'OBTIENE TODOS LOS REGISTROS DEL CATALOGO DE USUARIOS A PARTIR DEL BODY',
    })
    @Get('/usuarios/')
    buscaTodos_Usu() {
        return this.fichaService.buscaTodos_Usu();
    }
    //-------------------------------------------------------------------------------------------------------------
    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/by_key/:usu_codcia/:usu_usuario)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuarios/by_key/:usu_codcia/:usu_usuario')
    async obtiene_usuarios_por_llave(
        @Param('usu_codcia') v_codcia: string,
        @Param('usu_usuario') v_usuario: string
    ) {
        const data = await this.fichaService.busca_usuarios_por_llave(v_codcia, v_usuario);
        return data;
    }

    //**************************//
    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/by_ciacel/:usu_codcia/:usu_codcel)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuarios/by_ciacel/:usu_codcia/:usu_codcel')
    async obtiene_usuarios_por_ciacel(
        @Param('usu_codcia') v_codcia: string,
        //@Param('usu_usuario') v_usuario: string,
        //@Param('usu_coduni') v_coduni: number,
        @Param('usu_codcel') v_codcel: string
    ) {
        //let v_fecini: Date;
        //let v_fecfin: Date;
        let v_coduni: number = null;
        let v_usuario = '';

        const data = await this.fichaService.busca_usuario(v_codcia, v_usuario, v_coduni, v_codcel);
        return data;
    }
    //-------------------------------------------------------------------------------------------------------------
    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/by_key/:usu_codcia/:usu_usuario)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuarios/by_ciauni/:usu_codcia/:usu_coduni')
    async obtiene_usuarios_por_ciauni(
        @Param('usu_codcia') v_codcia: string,
        //@Param('usu_usuario') v_usuario: string,
        @Param('usu_coduni') v_coduni: number,
        //@Param('usu_codcel') v_codcel: string
    ) {
        //let v_fecini: Date;
        //let v_fecfin: Date;
        let v_codcel = '';
        let v_usuario = '';
        const data = await this.fichaService.busca_usuario(v_codcia, v_usuario, v_coduni, v_codcel);
        return data;
    }
    //**************************//

    //------------ POST - Crea registro
    @ApiHeader({
        name: 'Controlador: @Post(/catalogo/)',
        description: 'Crea registro a partir del BODY',
    })
    @Post('/usuarios/')
    async creaUsuario(@Body() datos: Create_Pri_Usu_Dto) {
        const data = await this.fichaService.creaUsuario(datos);
        return { message: 'Registro creado', data };
    }

    //------------ PUT - Actualiza registro
    @ApiHeader({
        name: 'Controlador: @Put(/catalogo/:mjc_codcia/:mjc_coduni/:mjc_codigo/)',
        description: 'Actualiza registro, se define la llave en el URL y las modificaciones en el BODY',
    })
    @Put('/usuarios/:usu_codcia/:usu_usuario')
    async modificaUsuario(
        @Param('usu_codcia') v_codcia: string,
        @Param('usu_usuario') v_usuario: string,
        @Body() dto: Edit_Pri_Usu_Dto) {
        //console.log('v_codcia_@Put: ', v_codcia);
        //console.log('v_coduni_@Put: ', v_coduni);
        //console.log('v_codigo_@Put: ', v_codigo);
        //console.log('dto_@Put: ', dto);
        const data = await this.fichaService.modificaUsuario(v_codcia, v_usuario, dto);
        //console.log('data_controller: ', register);
        return { message: 'Registro actualizado', data };
    }

    //------------ DELETE - Borra registro
    @ApiHeader({
        name: 'Controlador: @Delete(/usuarios/:usu_codcia/:usu_usuario)',
        description: 'Borra registro del CATALOGO a partir de llave en el URL',
    })
    @Delete('/usuarios/:usu_codcia/:usu_usuario')
    async EliminaUsuario(
        @Param('usu_codcia') v_codcia: string,
        @Param('usu_usuario') v_usuario: string,
    ) {
           const data = await this.fichaService.EliminaUsuario(v_codcia, v_usuario);
            return { message: 'Registro eliminado', data };
    }


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // EMPLEADOS_V
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  

    @ApiHeader({
        name: 'Controlador:  @Get(/empleados/)',
        description: 'OBTIENE TODOS LOS REGISTROS DE LA LA VISTA DE EMPLEADOS A PARTIR DEL BODY',
    })
    @Get('/empleados/')
    buscaTodos_Emp() {
        return this.fichaService.buscaTodos_Emp();
    }
    //-------------------------------------------------------------------------------------------------------------
    @ApiHeader({
        name: 'Controlador: @Get(/empleados/by_key/:emp_codcia/:emp_codcel)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/empleados/by_key/:emp_codcia/:emp_codcel')
    async obtiene_empleados_por_llave(
        @Param('emp_codcia') v_codcia: string,
        @Param('emp_codcel') v_codcel: string
    ) {
        //console.log('v_codcia: ', v_codcia);
        //console.log('v_codcel: ', v_codcel);
        const data = await this.fichaService.busca_empleados_por_llave(v_codcia, v_codcel);
        return data;
    }

    //**************************//
    @ApiHeader({
        name: 'Controlador: @Get(/empleados/by_ciauni/:emp_codcia/:emp_coduni)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/empleados/by_ciauni/:emp_codcia/:emp_coduni')
    async obtiene_empleados_por_ciauni(
        @Param('emp_codcia') v_codcia: string,
        //@Param('usu_usuario') v_usuario: string,
        @Param('emp_coduni') v_coduni: number,
        //@Param('usu_codcel') v_codcel: string
    ) {
        console.log('by_ciauni_v_codcia: ', v_codcia);
        console.log('by_ciauni_v_codcel: ', v_coduni);
        //let v_fecini: Date;
        //let v_fecfin: Date;
        //let v_coduni: number = null;
        let v_codent = '';
        let v_codcel = '';
        const data = await this.fichaService.busca_empleado(v_codcia, v_codcel, v_coduni, v_codent);
        return data;
    }
    //-------------------------------------------------------------------------------------------------------------
    @ApiHeader({
        name: 'Controlador: @Get(/empleados/by_ciaent/:emp_codcia/:emp_codent)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/empleados/by_ciaent/:emp_codcia/:emp_codent')
    async obtiene_empleados_por_ciaent(
        @Param('emp_codcia') v_codcia: string,
        //@Param('emp_') v_usuario: string,
        //@Param('usu_coduni') v_coduni: number,
        @Param('emp_codent') v_codent: string,
    ) {
        //console.log('by_ciaent_v_codcia: ', v_codcia);
        //console.log('by_ciaent_v_codent: ', v_codent);        
        //let v_fecini: Date;
        //let v_fecfin: Date;
        let v_coduni: number = null;
        let v_codcel = '';
        const data = await this.fichaService.busca_empleado(v_codcia, v_codcel, v_coduni, v_codent);
        return data;
    }

    //**************************//


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // USUARIOS/EMPLEADOS
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   

    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/)',
        description: 'OBTIENE TODOS LOS REGISTROS DE LA COMBINACIÓN DE USUARIOS CON VISTA DE EMPLEADOS A PARTIR DEL BODY',
    })
    @Get('/usuemp/')
    buscaTodos_UsuEmp() {
        return this.fichaService.buscaTodos_UsuEmp();
    }
    //-------------------------------------------------------------------------------------------------------------
    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/by_key/:emp_codcia/:emp_codcel)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuemp/by_key/:emp_codcia/:emp_codcel')
    async obtiene_usuemp_por_llave(
        @Param('emp_codcia') v_codcia: string,
        @Param('emp_codcel') v_codcel: string
    ) {
        //console.log('v_codcia: ', v_codcia);
        //console.log('v_codcel: ', v_codcel);
        const data = await this.fichaService.busca_usuemp_por_llave(v_codcia, v_codcel);
        return data;
    }

    //**************************//
    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/by_ciausu/:usu_codcia/:usu_usuario)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuemp/by_ciausu/:usu_codcia/:usu_usuario')
    async obtiene_usuemp_por_ciausu(
        @Param('usu_codcia') v_codcia: string,
        @Param('usu_usuario') v_usuario: string
        //@Param('emp_coduni') v_coduni: number,
        //@Param('usu_codcel') v_codcel: string
    ) {
        //console.log('by_ciauni_v_codcia: ', v_codcia);
        //console.log('by_ciauni_v_codcel: ', v_coduni);
        //let v_fecini: Date;
        //let v_fecfin: Date;
        //let v_usuario = '';
        let v_codcel = '';
        let v_coduni: number = null;
        let v_codent = '';
        const data = await this.fichaService.busca_usuemp(v_codcia, v_usuario, v_codcel, v_coduni, v_codent);
        return data;
    }
    //-------------------------------------------------------------------------------------------------------------    
    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/by_ciauni/:usu_codcia/:emp_coduni)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuemp/by_ciauni/:usu_codcia/:emp_coduni')
    async obtiene_usuemp_por_ciauni(
        @Param('usu_codcia') v_codcia: string,
        //@Param('usu_usuario') v_usuario: string,
        @Param('emp_coduni') v_coduni: number,
        //@Param('usu_codcel') v_codcel: string
    ) {
        //console.log('by_ciauni_v_codcia: ', v_codcia);
        //console.log('by_ciauni_v_codcel: ', v_coduni);
        //let v_fecini: Date;
        //let v_fecfin: Date;
        //let v_coduni: number = null;
        let v_usuario = '';
        let v_codcel = '';
        //let v_coduni: number = null;
        let v_codent = '';
        const data = await this.fichaService.busca_usuemp(v_codcia, v_usuario, v_codcel, v_coduni, v_codent);
        return data;
    }
    //-------------------------------------------------------------------------------------------------------------
    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/by_ciaent/:usu_codcia/:emp_codent)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuemp/by_ciaent/:usu_codcia/:emp_codent')
    async obtiene_usuemp_por_ciaent(
        @Param('emp_codcia') v_codcia: string,
        //@Param('emp_') v_usuario: string,
        //@Param('usu_coduni') v_coduni: number,
        @Param('emp_codent') v_codent: string,
    ) {
        //console.log('by_ciaent_v_codcia: ', v_codcia);
        //console.log('by_ciaent_v_codent: ', v_codent);        
        //let v_fecini: Date;
        //let v_fecfin: Date;
        let v_usuario = '';
        let v_codcel = '';
        let v_coduni: number = null;
        //let v_codent = '';     
        const data = await this.fichaService.busca_usuemp(v_codcia, v_usuario, v_codcel, v_coduni, v_codent);
        return data;
    }

    //**************************//

}
