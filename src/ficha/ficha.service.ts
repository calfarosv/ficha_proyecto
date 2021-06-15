import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Create_Pri_Usu_Dto } from './dto/create_pri_usu_dto';
import { Edit_Pri_Usu_Dto } from './dto/edit_pri_usu_dto';
import { Pri_Uni_Unidad_Entity } from './entities/pri_uni_unidad.entity';

import { Pri_Emp_Empleado_V_Entity } from './entities/pri_emp_empleado_v.entity';
import { Pri_Usu_Usuarios_Entity } from './entities/pri_usu_usuarios.entity';


@Injectable()
export class FichaService {

    constructor(
        @InjectRepository(Pri_Usu_Usuarios_Entity) private usuariosRepository: Repository<Pri_Usu_Usuarios_Entity>,
        @InjectRepository(Pri_Emp_Empleado_V_Entity) private empleadosRepository: Repository<Pri_Emp_Empleado_V_Entity>,
        @InjectRepository(Pri_Uni_Unidad_Entity) private unidadesRepository: Repository<Pri_Uni_Unidad_Entity>,
        //@InjectRepository(Pri_Usu_Empleados) private usuempRepository: Repository<Pri_Usu_Empleados>,
        //private readonly usuariosService: UsuariosService,
        //private readonly unidadService: UnidadService
    ) { }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ESTRUCTURAS DE APOYO
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  

    @ApiHeader({
        name: 'Servicio: buscaTodos_Usu(): Promise<Pri_Usu_Usuarios_Entity[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async buscaTodas_Uni(): Promise<Pri_Uni_Unidad_Entity[]> {
        const register = await this.unidadesRepository.find(
            {
                order: {
                    uniCodcia: 'ASC',
                    uniNombre: 'ASC'
                }
            }
        );
        if (!register)
            throw new NotFoundException('No se ha encontrado ningún registro (buscaTodas_Uni)');
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
    })
    async busca_unidades_por_llave(v_codcia: string, v_coduni: number): Promise<Pri_Uni_Unidad_Entity> {
        const register = await this.unidadesRepository.findOne(
            {
                uniCodcia: v_codcia,
                uniCodigo: v_coduni
            }
        );

        if (!register)
            throw new HttpException('No existen registros para los parametros definidos en la consulta - (busca_unidades_por_llave)', HttpStatus.FORBIDDEN);
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // USUARIOS
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    @ApiHeader({
        name: 'Servicio: buscaTodos_Usu(): Promise<Pri_Usu_Usuarios_Entity[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async buscaTodos_Usu(): Promise<Pri_Usu_Usuarios_Entity[]> {
        const register = await this.usuariosRepository.find(
            {
                order: {
                    usuCodcia: 'ASC',
                    usuUsuario: 'ASC'
                }
            }
        );
        if (!register)
            throw new NotFoundException('No se ha encontrado ningún registro (buscaTodos_Usu)');
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
    })
    async busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity> {
        const register = await this.usuariosRepository.findOne(
            {
                usuCodcia: v_codcia,
                usuUsuario: v_usuario
            }
        );

        if (!register)
            throw new HttpException('No existen registros para los parametros definidos en la consulta - (busca_usuarios_por_llave)', HttpStatus.FORBIDDEN);
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_usuario(v_Codcia: string, v_Usuario: string, v_Coduni: number, v_Codcel: string) ',
        description: 'BÚSQUEDA DINÁMICA DE REGISTROS A PARTIR DE LA COMBINACIÓN DE CAMPOS (CREATE QUERY BUILDER)',
    })
    async busca_usuario(v_Codcia: string, v_Usuario: string, v_Coduni: number, v_Codcel: string) {
        let v_where = '';
        if (v_Codcia && v_Usuario && v_Coduni && v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Usu_Usuarios_Entity.usuCoduni = :par_coduni and Pri_Usu_Usuarios_Entity.usuCodcel = :par_codcel';
            //console.log('1', v_where);
        }

        else if (v_Codcia && v_Usuario && v_Coduni && !v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Usu_Usuarios_Entity.usuCoduni = :par_coduni';
            //console.log('2', v_where);
        }

        else if (v_Codcia && v_Usuario && !v_Coduni && v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Usu_Usuarios_Entity.usuCodcel = :par_codcel';
            //console.log('3', v_where);
        }

        else if (v_Codcia && v_Usuario && !v_Coduni && !v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario';
            //console.log('4', v_where);
        }

        else if (v_Codcia && !v_Usuario && v_Coduni && v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuCoduni = :par_coduni and Pri_Usu_Usuarios_Entity.usuCodcel = :par_codcel';
            //console.log('5', v_where);
        }

        else if (v_Codcia && !v_Usuario && v_Coduni && !v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuCoduni = :par_coduni';
            //console.log('6', v_where);
        }

        else if (v_Codcia && !v_Usuario && !v_Coduni && v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuCodcel = :par_codcel';
            //console.log('7', v_where);
        }

        else if (v_Codcia && !v_Usuario && !v_Coduni && !v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia';
            //console.log('8', v_where);
        }

        else if (!v_Codcia && !v_Usuario && !v_Coduni && !v_Codcel) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia';
            //console.log('9', v_where);
        }

        const register = await this.usuariosRepository
            .createQueryBuilder('Pri_Usu_Usuarios_Entity')
            .select('Pri_Usu_Usuarios_Entity.usuCodcia', 'usuCodcia')
            .addSelect('Pri_Usu_Usuarios_Entity.usuUsuario', 'usuUsuario')
            .addSelect('Pri_Usu_Usuarios_Entity.usuCoduni', 'usuCoduni')
            .addSelect('Pri_Usu_Usuarios_Entity.usuCodcel', 'usuCodcel')
            .addSelect('Pri_Usu_Usuarios_Entity.usuEmail', 'usuEmail')
            .addSelect('Pri_Usu_Usuarios_Entity.usuTipo', 'usuTipo')
            .where(v_where,
                {
                    par_codcia: v_Codcia,
                    par_usuario: v_Usuario,
                    par_coduni: v_Coduni,
                    par_codcel: v_Codcel
                })
            .orderBy('Pri_Usu_Usuarios_Entity.usuCodcia', 'ASC')
            .addOrderBy('Pri_Usu_Usuarios_Entity.usuUsuario', 'ASC')
            .getRawMany();
        //.getRawOne();
        //console.log('VARIABLE: ', variable);
        if (!register) {
            throw new HttpException('Registro nulo para los parametros definidos en la consulta - (busca_usuario)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------
    
    //------------ CREA REGISTRO
    @ApiHeader({
        name: 'Servicio: createCat(dto: Create_Mjucat_Dto): Promise<Mch_Mjc_Cat>',
        description: 'CREA UN REGISTRO DEL CATALOGO A PARTIR DE CAMPOS DE LA LLAVE PRIMARIA',
    })
    async creaUsuario(dto: Create_Pri_Usu_Dto): Promise<Pri_Usu_Usuarios_Entity> {
        const register = await this.usuariosRepository.findOne({
            usuCodcia: dto.usuCodcia,
            usuUsuario: dto.usuUsuario
        });
        if (register)
            throw new HttpException('NO SE PUEDE CREAR - El registro ya existe - (creaUsuario)', HttpStatus.FORBIDDEN);
        else {
            const model = this.usuariosRepository.create(dto);
            const newRegister = await this.usuariosRepository.save(model);
            return newRegister;
        }
    }

    //------------ ACTUALIZA UN REGISTRO
    @ApiHeader({
        name: 'Servicio: modificaUsuario(v_Codcia: string, v_Usuario: string, dto: Edit_Pri_Usu_Dto): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'ACTUALIZA UN REGISTRO',
    })
    async modificaUsuario(v_Codcia: string, v_Usuario: string, dto: Edit_Pri_Usu_Dto): Promise<Pri_Usu_Usuarios_Entity> {
        //console.log('mjcCodcia_editCat: ', mjcCodcia);
        //console.log('mjcCoduni_editCat: ', mjcCoduni);
        //console.log('mjcCodigo_editCat: ', mjcCodigo);
        //console.log('dto_editCat: ', dto);        
        const toUpdate = await this.busca_usuarios_por_llave(v_Codcia, v_Usuario);
        //console.log('Continua');
        //console.log('toUpdate_editCat: ', toUpdate);
        if (!toUpdate)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (modificaUsuario)', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(toUpdate, dto);
        return await this.usuariosRepository.save(modelToEdit);
        //return toUpdate;
    }    

    //------------ ELIMINA UN REGISTRO
    @ApiHeader({
        name: 'Servicio: deleteByKeyCat(vs_mjc_Codcia: string, vs_mjc_Coduni: number, vs_mjc_Codigo: string)',
        description: 'ELIMINA UN REGISTRO DEL CATALOGO UTILIZANDO LOS CAMPOS DE LA LLAVE PRIMARIA VIA URL',
    })
    async EliminaUsuario(v_Codcia: string, v_Usuario: string) {
        const register = await this.usuariosRepository.findOne({
            usuCodcia: v_Codcia,
            usuUsuario: v_Usuario
        });
        if (register) {
            const toDelete = this.usuariosRepository.create(register);
            this.usuariosRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (EliminaUsuario)', HttpStatus.FORBIDDEN);
        }
    }    

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // EMPLEADOS_V
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    @ApiHeader({
        name: 'Servicio: buscaTodos_Emp(): Promise<Pri_Emp_Empleado_V_Entity[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async buscaTodos_Emp(): Promise<Pri_Emp_Empleado_V_Entity[]> {
        const register = await this.empleadosRepository.find(
            {
                order: {
                    empCodcia: 'ASC',
                    empNombre: 'ASC'
                }
            }
        );
        if (!register)
            throw new NotFoundException('No se ha encontrado ningún registro (buscaTodos_Emp)');
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_empleados_por_llave(v_codcia: string, v_codcel: string): Promise<Pri_Emp_Empleado_V_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
    })
    async busca_empleados_por_llave(v_codcia: string, v_codcel: string): Promise<Pri_Emp_Empleado_V_Entity> {
        const register = await this.empleadosRepository.findOne(
            {
                empCodcia: v_codcia,
                empCodcel: v_codcel
            }
        );

        if (!register)
            throw new HttpException('No existen registros para los parametros definidos en la consulta - (busca_empleados_por_llave)', HttpStatus.FORBIDDEN);
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_empleado(v_Codcia: string, v_Codcel: string, v_Coduni: number, v_Codent: string) ',
        description: 'BÚSQUEDA DINÁMICA DE REGISTROS A PARTIR DE LA COMBINACIÓN DE CAMPOS (CREATE QUERY BUILDER)',
    })
    async busca_empleado(v_Codcia: string, v_Codcel: string, v_Coduni: number, v_Codent: string) {

        //console.log('busca_empleado_v_codcia: ', v_Codcia);
        //console.log('busca_empleado_v_codcel: ', v_Codcel);
        //console.log('busca_empleado_v_coduni: ', v_Coduni);
        //console.log('busca_empleado_v_codent: ', v_Codent);
        let v_where = '';
        if (v_Codcia && v_Codcel && v_Coduni && v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('1', v_where);
        }

        else if (v_Codcia && v_Codcel && v_Coduni && !v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni';
            //console.log('2', v_where);
        }

        else if (v_Codcia && v_Codcel && !v_Coduni && v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codceland Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('3', v_where);
        }

        else if (v_Codcia && v_Codcel && !v_Coduni && !v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel';
            //console.log('4', v_where);
        }

        else if (v_Codcia && !v_Codcel && v_Coduni && v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('5', v_where);
        }

        else if (v_Codcia && !v_Codcel && v_Coduni && !v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni';
            //console.log('6', v_where);
        }

        else if (v_Codcia && !v_Codcel && !v_Coduni && v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('7', v_where);
        }

        else if (v_Codcia && !v_Codcel && !v_Coduni && v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia';
            //console.log('8', v_where);
        }

        else if (!v_Codcia && !v_Codcel && !v_Coduni && !v_Codent) {
            v_where = 'Pri_Emp_Empleado_V_Entity.empCodcia = :par_codcia';
            //console.log('9', v_where);
        }
        //console.log('v_where: ', v_where);
        const register = await this.empleadosRepository
            .createQueryBuilder('Pri_Emp_Empleado_V_Entity')
            .select('Pri_Emp_Empleado_V_Entity.empCodcia', 'empCodcia')
            .addSelect('Pri_Emp_Empleado_V_Entity.empCodcel', 'empCodcel')
            .addSelect('Pri_Emp_Empleado_V_Entity.empNombre', 'empNombre')
            .addSelect('Pri_Emp_Empleado_V_Entity.empPlzNombre', 'empPlzNombre')
            .addSelect('Pri_Emp_Empleado_V_Entity.empCoduni', 'empCoduni')
            .addSelect('Pri_Emp_Empleado_V_Entity.empUniNombre', 'empUniNombre')
            .addSelect('Pri_Emp_Empleado_V_Entity.empCodenti', 'empCodenti')
            .addSelect('Pri_Emp_Empleado_V_Entity.empEstado', 'empEstado')
            .addSelect('Pri_Emp_Empleado_V_Entity.empSexo', 'empSexo')
            .addSelect('Pri_Emp_Empleado_V_Entity.empCorreo', 'empCorreo')
            .where(v_where,
                {
                    par_codcia: v_Codcia,
                    par_codcel: v_Codcel,
                    par_coduni: v_Coduni,
                    par_codent: v_Codent
                })
            .orderBy('Pri_Emp_Empleado_V_Entity.empCodcia', 'ASC')
            .addOrderBy('Pri_Emp_Empleado_V_Entity.empNombre', 'ASC')
            .getRawMany();
        //.getRawOne();
        //console.log('VARIABLE: ', variable);
        if (!register) {
            throw new HttpException('Registro nulo para los parametros definidos en la consulta - (busca_empleado)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // USUARIOS/EMPLEADOS_V
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    @ApiHeader({
        name: 'Servicio: buscaTodos_UsuEmp()',
        description: 'BUSCA TODOS LOS REGISTROS DE LA COMBINACION USUARIOS/EMPLEADOS',
    })
    //async findAll_UsuEmp(): Promise<Pri_Usu_Usuarios_Entity[]> {
    async buscaTodos_UsuEmp() {

        const register = await this.usuariosRepository.createQueryBuilder()
            .select("Pri_Usu_Usuarios_Entity.usuUsuario", "usuUsuario")
            //.innerJoinAndSelect("Pri_Usu_Usuarios.usuario", "usu", )
            //.leftJoinAndSelect("Pri_Usu_Usuarios.usuario", "usu" )
            .addSelect("Pri_Emp_Empleado_V_Entity.empCodcel", "empCodcel")
            .addSelect("Pri_Emp_Empleado_V_Entity.empNombre", "empNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empPlzNombre", "empPlzNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCoduni", "empCoduni")
            .addSelect("Pri_Emp_Empleado_V_Entity.empUniNombre", "empUniNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCodenti", "empCodenti")
            .addSelect("Pri_Emp_Empleado_V_Entity.empEstado", "empEstado")
            .addSelect("Pri_Emp_Empleado_V_Entity.empSexo", "empSexo")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCorreo", "empCorreo")
            .leftJoin(Pri_Emp_Empleado_V_Entity, "Pri_Emp_Empleado_V_Entity", "Pri_Usu_Usuarios_Entity.usuCodcia = Pri_Emp_Empleado_V_Entity.empCodcia and Pri_Usu_Usuarios_Entity.usuCodcel = Pri_Emp_Empleado_V_Entity.empCodcel")
            .orderBy('Pri_Usu_Usuarios_Entity.usuCoduni', 'ASC')
            .addOrderBy('Pri_Usu_Usuarios_Entity.usuUsuario', 'ASC')
            .getRawMany();
        if (!register) {
            throw new HttpException('No se encontraron datos - (buscaTodos_UsuEmp)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: buscaTodos_UsuEmp()',
        description: 'BUSCA TODOS LOS REGISTROS DE LA COMBINACION USUARIOS/EMPLEADOS',
    })
    //async findAll_UsuEmp(): Promise<Pri_Usu_Usuarios_Entity[]> {
    async busca_usuemp_por_llave(v_Codcia: string, v_Codcel: string) {

        const register = await this.usuariosRepository.createQueryBuilder()
            .select("Pri_Usu_Usuarios_Entity.usuCodcia", "usuCodcia")
            //.addSelect("Pri_Usu_Usuarios_Entity.usuCodcel", "usuCodcel")
            .addSelect("Pri_Usu_Usuarios_Entity.usuUsuario", "usuUsuario")
            //.innerJoinAndSelect("Pri_Usu_Usuarios.usuario", "usu", )
            //.leftJoinAndSelect("Pri_Usu_Usuarios.usuario", "usu" )
            .addSelect("Pri_Emp_Empleado_V_Entity.empCodcel", "empCodcel")
            .addSelect("Pri_Emp_Empleado_V_Entity.empNombre", "empNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empPlzNombre", "empPlzNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCoduni", "empCoduni")
            .addSelect("Pri_Emp_Empleado_V_Entity.empUniNombre", "empUniNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCodenti", "empCodenti")
            .addSelect("Pri_Emp_Empleado_V_Entity.empEstado", "empEstado")
            .addSelect("Pri_Emp_Empleado_V_Entity.empSexo", "empSexo")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCorreo", "empCorreo")
            .where("Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuCodcel = :par_codcel",
                {
                    par_codcia: v_Codcia,
                    par_codcel: v_Codcel
                })
            .leftJoin(Pri_Emp_Empleado_V_Entity, "Pri_Emp_Empleado_V_Entity", "Pri_Usu_Usuarios_Entity.usuCodcia = Pri_Emp_Empleado_V_Entity.empCodcia and Pri_Usu_Usuarios_Entity.usuCodcel = Pri_Emp_Empleado_V_Entity.empCodcel")
            .orderBy('Pri_Usu_Usuarios_Entity.usuCoduni', 'ASC')
            .addOrderBy('Pri_Usu_Usuarios_Entity.usuUsuario', 'ASC')
            .getRawMany();
        if (!register) {
            throw new HttpException('No se encontraron datos - (buscaTodos_UsuEmp)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_usuemp(v_Codcia: string, v_Codcel: string, v_Coduni: number, v_Codent: string) ',
        description: 'BÚSQUEDA DINÁMICA DE REGISTROS A PARTIR DE LA COMBINACIÓN DE CAMPOS (CREATE QUERY BUILDER)',
    })
    async busca_usuemp(v_Codcia: string, v_Usuario: string, v_Codcel: string, v_Coduni: number, v_Codent: string) {

        //console.log('busca_usuemp_v_codcia: ', v_Codcia);
        //console.log('busca_usuemp_v_usuario: ', v_Usuario);
        //console.log('busca_usuemp_v_codcel: ', v_Codcel);
        //console.log('busca_usuemp_v_coduni: ', v_Coduni);
        //console.log('busca_usuemp_v_codent: ', v_Codent);
        let v_where = '';
        if (v_Codcia && v_Usuario && v_Codcel && v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('1', v_where);
        }
        if (v_Codcia && v_Usuario && v_Codcel && v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni';
            //console.log('2', v_where);
        }
        if (v_Codcia && v_Usuario && v_Codcel && !v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('3', v_where);
        }
        if (v_Codcia && v_Usuario && v_Codcel && !v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel';
            //console.log('4', v_where);
        }
        if (v_Codcia && v_Usuario && !v_Codcel && v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('5', v_where);
        }
        if (v_Codcia && v_Usuario && !v_Codcel && v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni';
            //console.log('6', v_where);
        }
        if (v_Codcia && v_Usuario && !v_Codcel && !v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('7', v_where);
        }
        if (v_Codcia && v_Usuario && !v_Codcel && !v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Usu_Usuarios_Entity.usuUsuario = :par_usuario ';
            //console.log('8', v_where);
        }
        if (v_Codcia && !v_Usuario && v_Codcel && v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('9', v_where);
        }
        if (v_Codcia && !v_Usuario && v_Codcel && v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni';
            //console.log('10', v_where);
        }
        if (v_Codcia && !v_Usuario && v_Codcel && !v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('11', v_where);
        }
        if (v_Codcia && !v_Usuario && v_Codcel && !v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodcel = :par_codcel';
            //console.log('12', v_where);
        }
        if (v_Codcia && !v_Usuario && !v_Codcel && v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('13', v_where);
        }
        if (v_Codcia && !v_Usuario && !v_Codcel && v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCoduni = :par_coduni';
            //console.log('14', v_where);
        }
        if (v_Codcia && !v_Usuario && !v_Codcel && !v_Coduni && v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia and Pri_Emp_Empleado_V_Entity.empCodenti = :par_codent';
            //console.log('15', v_where);
        }
        if (v_Codcia && !v_Usuario && !v_Codcel && !v_Coduni && !v_Codent) {
            v_where = 'Pri_Usu_Usuarios_Entity.usuCodcia = :par_codcia';
            //console.log('16', v_where);
        }
        //console.log('v_where: ', v_where);
        const register = await this.usuariosRepository.createQueryBuilder()
            .select("Pri_Usu_Usuarios_Entity.usuCodcia", "usuCodcia")
            //.addSelect("Pri_Usu_Usuarios_Entity.usuCodcel", "usuCodcel")
            .addSelect("Pri_Usu_Usuarios_Entity.usuUsuario", "usuUsuario")
            //.innerJoinAndSelect("Pri_Usu_Usuarios.usuario", "usu", )
            //.leftJoinAndSelect("Pri_Usu_Usuarios.usuario", "usu" )
            .addSelect("Pri_Emp_Empleado_V_Entity.empCodcel", "empCodcel")
            .addSelect("Pri_Emp_Empleado_V_Entity.empNombre", "empNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empPlzNombre", "empPlzNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCoduni", "empCoduni")
            .addSelect("Pri_Emp_Empleado_V_Entity.empUniNombre", "empUniNombre")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCodenti", "empCodenti")
            .addSelect("Pri_Emp_Empleado_V_Entity.empEstado", "empEstado")
            .addSelect("Pri_Emp_Empleado_V_Entity.empSexo", "empSexo")
            .addSelect("Pri_Emp_Empleado_V_Entity.empCorreo", "empCorreo")
            .where(v_where,
                {
                    par_codcia: v_Codcia,
                    par_usuario: v_Usuario,
                    par_codcel: v_Codcel,
                    par_coduni: v_Coduni,
                    par_codent: v_Codent
                })
            .leftJoin(Pri_Emp_Empleado_V_Entity, "Pri_Emp_Empleado_V_Entity", "Pri_Usu_Usuarios_Entity.usuCodcia = Pri_Emp_Empleado_V_Entity.empCodcia and Pri_Usu_Usuarios_Entity.usuCodcel = Pri_Emp_Empleado_V_Entity.empCodcel")
            .orderBy('Pri_Usu_Usuarios_Entity.usuCoduni', 'ASC')
            .addOrderBy('Pri_Usu_Usuarios_Entity.usuUsuario', 'ASC')
            .getRawMany();
        //.getRawOne();
        //console.log('VARIABLE: ', variable);
        if (!register) {
            throw new HttpException('Registro nulo para los parametros definidos en la consulta - (busca_empleado)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }






}
