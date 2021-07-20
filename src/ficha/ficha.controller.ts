import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { Create_Pri_Fic_Dto } from './dto/create_pri_fic_dto';
import { Create_Pri_Fid_Dto } from './dto/create_pri_fid_dto';
import { Create_Pri_Usu_Dto } from './dto/create_pri_usu_dto';
import { Edit_Pri_Fic_Dto } from './dto/edit_pri_fic_dto';
import { Edit_Pri_Fid_Dto } from './dto/edit_pri_fid_dto';
import { Edit_Pri_Usu_Dto } from './dto/edit_pri_usu_dto';
import { FichaService } from './ficha.service';

@ApiTags('Ficha')
@Controller('ficha')
export class FichaController {

    constructor(private fichaService: FichaService) {
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
    obtieneTodos_Usu() {
        return this.fichaService.buscaTodos_Usu();
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/by_pk/:usu_codcia/:usu_usuario)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuarios/by_pk/:usu_codcia/:usu_usuario')
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

        const data: any[] = await this.fichaService.busca_usuario(v_codcia, v_usuario, v_coduni, v_codcel);
        if (data.length === 1) {
            return data[0];
        }
        return data;

    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/by_pk/:usu_codcia/:usu_usuario)',
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
        const data: any[] = await this.fichaService.busca_usuario(v_codcia, v_usuario, v_coduni, v_codcel);
        if (data.length === 1) {
            return data[0];
        }
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
    obtieneTodos_Emp() {
        return this.fichaService.buscaTodos_Emp();
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/empleados/by_pk/:emp_codcia/:emp_codcel)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/empleados/by_pk/:emp_codcia/:emp_codcel')
    async obtiene_empleados_por_llave(
        @Param('emp_codcia') v_codcia: string,
        @Param('emp_codcel') v_codcel: string
    ) {
        //console.log('v_codcia: ', v_codcia);
        //console.log('v_codcel: ', v_codcel);
        const data = await this.fichaService.busca_empleados_por_llave(v_codcia, v_codcel);
        return data;
    }
    /*
            const data: any[] = await this.vertederosService.busca_fecha(dto.vefCodcia, dto.vefCoduni, dto.vefFecha);
            if (data.length === 1) {
                return data[0];
            }
            return data;
    */
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
        //console.log('by_ciauni_v_codcia: ', v_codcia);
        //console.log('by_ciauni_v_codcel: ', v_coduni);
        //let v_fecini: Date;
        //let v_fecfin: Date;
        //let v_coduni: number = null;
        let v_codent = '';
        let v_codcel = '';
        const data: any[] = await this.fichaService.busca_empleado(v_codcia, v_codcel, v_coduni, v_codent);
        if (data.length === 1) {
            return data[0];
        }
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
        const data: any[] = await this.fichaService.busca_empleado(v_codcia, v_codcel, v_coduni, v_codent);
        if (data.length === 1) {
            return data[0];
        }
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
    obtieneTodos_UsuEmp() {
        return this.fichaService.buscaTodos_UsuEmp();
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/by_pk/:emp_codcia/:emp_codcel)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/usuemp/by_pk/:emp_codcia/:emp_codcel')
    async obtiene_usuemp_por_llave(
        @Param('emp_codcia') v_codcia: string,
        @Param('emp_codcel') v_codcel: string
    ) {
        //console.log('v_codcia: ', v_codcia);
        //console.log('v_codcel: ', v_codcel);
        const data: any[] = await this.fichaService.busca_usuemp_por_llave(v_codcia, v_codcel);
        if (data.length === 1) {
            return data[0];
        }
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
        const data: any[] = await this.fichaService.busca_usuemp(v_codcia, v_usuario, v_codcel, v_coduni, v_codent);
        if (data.length === 1) {
            return data[0];
        }
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
        const data: any[] = await this.fichaService.busca_usuemp(v_codcia, v_usuario, v_codcel, v_coduni, v_codent);
        if (data.length === 1) {
            return data[0];
        }
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
        const data: any[] = await this.fichaService.busca_usuemp(v_codcia, v_usuario, v_codcel, v_coduni, v_codent);
        if (data.length === 1) {
            return data[0];
        }
        return data;
    }

    //**************************//

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // FICHA
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    

    @ApiHeader({
        name: 'Controlador: @Get()',
        description: 'OBTIENE TODOS LOS REGISTROS',
    })
    @Get('/encabezado/')
    obtieneTodas_Fic() {
        return this.fichaService.buscaTodas_Fic();
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get()',
        description: 'OBTIENE TODOS LOS REGISTROS',
    })
    @Get('/encabezado/listado/')
    async obtieneListado_Fic() {
        return this.fichaService.buscaListado_Fic();

    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/usuarios/by_pk/:usu_codcia/:usu_usuario)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/encabezado/by_pk/:fic_codigo/:fic_version')
    async obtiene_fichas_por_llave(
        @Param('fic_codigo') v_codfic: number,
        @Param('fic_version') v_codver: number
    ) {
        //console.log('v_codfic: ', v_codfic);
        //console.log('v_codver: ', v_codver);
        const data: any[] = await this.fichaService.busca_fichas_por_llave(v_codfic, v_codver);
        if (data.length === 1) {
            return data[0];
        }
        return data;

    }

    //-------------------------------------------------------------------------------------------------------------

    //**************************//
    @ApiHeader({
        name: 'Controlador: @Get(/encabezado/by_sol/:fic_codunisol)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/encabezado/by_sol/:fic_codunisol')
    async obtiene_fichas_por_sol(
        @Param('fic_codunisol') v_codunisol: number,
    ) {
        let v_codcelres = '';
        let v_codunieje: number = null;
        const data: any[] = await this.fichaService.busca_fichas_dinamica(v_codunisol, v_codunieje, v_codcelres);
        if (data.length === 1) {
            return data[0];
        }
        return data;
    }
    //-------------------------------------------------------------------------------------------------------------    
    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/by_ciauni/:usu_codcia/:emp_coduni)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/encabezado/by_eje/:fic_codunieje')
    async obtiene_fichas_por_eje(
        @Param('fic_codunieje') v_codunieje: number,
    ) {
        let v_codcelres = '';
        let v_codunisol: number = null;
        const data: any[] = await this.fichaService.busca_fichas_dinamica(v_codunisol, v_codunieje, v_codcelres);
        if (data.length === 1) {
            return data[0];
        }
        return data;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/usuemp/by_ciaent/:usu_codcia/:emp_codent)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/encabezado/by_res/:fic_codcelres')
    async obtiene_fichas_por_res(
        @Param('fic_codcelres') v_codcelres: string

    ) {
        let v_codunisol: number = null;
        let v_codunieje: number = null;
        const data: any[] = await this.fichaService.busca_fichas_dinamica(v_codunisol, v_codunieje, v_codcelres);
        if (data.length === 1) {
            return data[0];
        }
        return data;
    }
    //**************************//


    //------------ POST - Crea registro
    @ApiHeader({
        name: 'Controlador: @Post(/encabezado/)',
        description: 'Crea registro a partir del BODY',
    })
    @Post('/encabezado/')
    async creaFicha(@Body() datos: Create_Pri_Fic_Dto) {
        const data = await this.fichaService.creaFicha(datos);
        //return { message: 'Registro creado', data };
        return data;
    }

    //------------ PUT - Actualiza registro
    @ApiHeader({
        name: 'Controlador: @Put(/encabezado/:fic_codigo/:fic_version)',
        description: 'Actualiza registro, se define la llave en el URL y las modificaciones en el BODY',
    })
    @Put('/encabezado/:fic_codigo/:fic_version')
    async modificaFicha(
        @Param('fic_codigo') v_codfic: number,
        @Param('fic_version') v_codver: number,
        @Body() dto: Edit_Pri_Fic_Dto) {
        //console.log('v_codcia_@Put: ', v_codcia);
        //console.log('v_coduni_@Put: ', v_coduni);
        //console.log('v_codigo_@Put: ', v_codigo);
        //console.log('dto_@Put: ', dto);
        const data = await this.fichaService.modificaFicha(v_codfic, v_codver, dto);
        //console.log('data_controller: ', register);
        return { message: 'Registro actualizado', data };
    }

    //------------ DELETE - Borra registro
    @ApiHeader({
        name: 'Controlador: @Delete(/usuarios/:usu_codcia/:usu_usuario)',
        description: 'Borra registro del CATALOGO a partir de llave en el URL',
    })
    @Delete('/encabezado/:fic_codigo/:fic_version')
    async EliminaFicha(
        @Param('fic_codigo') v_codfic: number,
        @Param('fic_version') v_codver: number
    ) {
        const data = await this.fichaService.EliminaFicha(v_codfic, v_codver);
        return { message: 'Registro eliminado', data };
    }


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // FICHA DETALLE
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  

    @ApiHeader({
        name: 'Controlador: @Get()',
        description: 'OBTIENE TODOS LOS REGISTROS',
    })
    @Get('/detalle/')
    obtieneTodas_FicDet() {
        return this.fichaService.buscaTodas_FicDet();
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/detalle/by_pk/:fid_codfic/:fid_codver/:fid_codigo)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })

    @Get('/detalle/by_pk/:fid_codfic/:fid_codver/:fid_codigo')
    async obtiene_FicDet_por_llave(
        @Param('fid_codfic') v_codfic: number,
        @Param('fid_codver') v_codver: number,
        @Param('fid_codigo') v_codigo: number
    ) {
        const data: any[] = await this.fichaService.busca_FicDet_por_llave(v_codfic, v_codver, v_codigo);
        if (data.length === 1) {
            return data[0];
        }
        return data;

    }

    //-------------------------------------------------------------------------------------------------------------

    //**************************//
    @ApiHeader({
        name: 'Controlador: @Get(/detalle/by_ficver/:fid_codfic/:fid_codver/)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/detalle/by_ficver/:fid_codfic/:fid_codver/')
    async obtiene_FicDet_por_fk(
        @Param('fid_codfic') v_codfic: number,
        @Param('fid_codver') v_codver: number
    ) {
        let v_codigo: number = null;
        const data: any[] = await this.fichaService.busca_FicDet_dinamica(v_codfic, v_codver, v_codigo);
        if (data.length === 1) {
            return data[0];
        }
        return data;
    }
    //**************************//
    //-------------------------------------------------------------------------------------------------------------

    //------------ POST - Crea registro

        @ApiHeader({
            name: 'Controlador: @Post(/detalle/)',
            description: 'Crea registro a partir del BODY',
        })
        @Post('/detalle/')
        async creaFichaDet(@Body() datos: Create_Pri_Fid_Dto) {
            const data = await this.fichaService.creaFichaDet(datos);
            //return { message: 'Registro creado', data };
            return data;
        }

    //------------ PUT - Actualiza registro

        @ApiHeader({
            name: 'Controlador: @Put(/encabezado/:fic_codigo/:fic_version)',
            description: 'Actualiza registro, se define la llave en el URL y las modificaciones en el BODY',
        })
        @Put('/detalle/:fid_codfic/:fid_codver/:fid_codigo/')
        async modificaFichaDet(
            @Param('fid_codfic') v_codfic: number,
            @Param('fid_codver') v_codver: number,
            @Param('fid_codigo') v_codigo: number,
            @Body() dto: Edit_Pri_Fid_Dto) {
//console.log('PUT Controlador - fid_codfic: ', v_codfic);
//console.log('PUT Controlador - fid_codver: ', v_codver);
//console.log('PUT Controlador - fid_codigo: ', v_codigo);
//console.log('PUT Controlador - dto: ', dto);
            const data = await this.fichaService.modificaFichaDet(v_codfic, v_codver, v_codigo, dto);
            //console.log('data_controller: ', register);
//return { message: 'Hola Controlador' };
            return { message: 'Registro actualizado', data };
        }

    //------------ DELETE - Borra registro

        @ApiHeader({
            name: 'Controlador: @Delete(/usuarios/:usu_codcia/:usu_usuario)',
            description: 'Borra registro del CATALOGO a partir de llave en el URL',
        })
        @Delete('/detalle/:fid_codfic/:fid_codver/:fid_codigo/')
        async EliminaFichaDet(
            @Param('fid_codfic') v_codfic: number,
            @Param('fid_codver') v_codver: number,
            @Param('fid_codigo') v_codigo: number,
        ) {
console.log('DELETE Controlador - fid_codfic: ', v_codfic);
console.log('DELETE Controlador - fid_codver: ', v_codver);
console.log('DELETE Controlador - fid_codigo: ', v_codigo);            
            const data = await this.fichaService.EliminaFichaDet(v_codfic, v_codver,v_codigo);
            return { message: 'Registro eliminado', data };
        }


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // FICHA DETALLE - VISTA PROCESOS
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  

    @ApiHeader({
        name: 'Controlador:  @Get(/detalle/procesos/)',
        description: 'OBTIENE TODOS LOS REGISTROS DE LA VISTA DE PROCESOS A PARTIR DEL BODY',
    })
    @Get('/detalle/procesos/')
    obtieneTodos_ProV() {
        return this.fichaService.buscaTodos_ProV();
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Controlador: @Get(/empleados/by_pk/:emp_codcia/:emp_codcel)',
        description: 'Obtiene registro a partir de parametros enviados en el URL',
    })
    @Get('/detalle/procesos/by_pk/:cto_ciacodcia/:cto_correlativo')
    async obtiene_procesosV_por_llave(
        @Param('cto_ciacodcia') v_cto_ciacodcia: string,
        @Param('cto_correlativo') v_cto_correlativo: number
    ) {
        //console.log('v_codcia: ', v_codcia);
        //console.log('v_codcel: ', v_codcel);
        const data = await this.fichaService.busca_procesosV_por_llave(v_cto_ciacodcia, v_cto_correlativo);
        return data;
    }




} ///// PRINCIPAL
