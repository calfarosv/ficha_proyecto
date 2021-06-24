import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Pla_Uni_Unidad_Entity } from 'src/apoyo/entities/pla_uni_unidad_entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { Create_Pri_Fic_Dto } from './dto/create_pri_fic_dto';
import { Create_Pri_Usu_Dto } from './dto/create_pri_usu_dto';
import { Edit_Pri_Fic_Dto } from './dto/edit_pri_fic_dto';
import { Edit_Pri_Usu_Dto } from './dto/edit_pri_usu_dto';

import { Pri_Emp_Empleado_V_Entity } from './entities/pri_emp_empleado_v_entity';
import { Pri_Fic_Ficha_Entity } from './entities/pri_fic_ficha_entity';
import { Pri_Fic_Ficha_Max_V_Entity } from './entities/pri_fic_ficha_max_v_entity';
import { Pri_Usu_Usuarios_Entity } from './entities/pri_usu_usuarios.entity';

@Injectable()
export class FichaService {

    constructor(
        @InjectRepository(Pri_Usu_Usuarios_Entity) private usuariosRepository: Repository<Pri_Usu_Usuarios_Entity>,
        @InjectRepository(Pri_Emp_Empleado_V_Entity) private empleadosRepository: Repository<Pri_Emp_Empleado_V_Entity>,
        @InjectRepository(Pri_Fic_Ficha_Entity) private fichasRepository: Repository<Pri_Fic_Ficha_Entity>,
        @InjectRepository(Pri_Fic_Ficha_Max_V_Entity) private fichasMaxRepository: Repository<Pri_Fic_Ficha_Max_V_Entity>,
        //@InjectRepository(Pri_Usu_Empleados) private usuempRepository: Repository<Pri_Usu_Empleados>,
        //private readonly usuariosService: UsuariosService,
        //private readonly unidadService: UnidadService
    ) { }


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
        //console.log('register: ', register);
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


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // FICHAS
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /*
        @ApiHeader({
            name: 'Servicio: buscaTodas_Fic(): Promise<Pri_Fic_Ficha_Entity[]>',
            description: 'BUSCA TODOS LOS REGISTROS DEL ENCABEZADO DE FICHAS',
        })
        async buscaTodas_Fic(): Promise<Pri_Fic_Ficha_Entity[]> {
            const register = await this.fichasRepository.find(
                {
                    order: {
                        ficCodigo: 'ASC',
                        ficVersion: 'ASC'
                    }
                }
            );
            if (!register)
                throw new NotFoundException('No se ha encontrado ningún registro (buscaTodas_Fic)');
            else
                return register;
        }
    */

    @ApiHeader({
        name: 'Servicio: buscaTodas_Fic()',
        description: 'BUSCA TODOS LOS REGISTROS DE LA COMBINACION USUARIOS/EMPLEADOS',
    })
    async buscaTodas_Fic() {

        const register = await this.fichasRepository.createQueryBuilder()
            .select("Pri_Fic_Ficha_Entity.ficCodigo", "ficCodigo")
            .addSelect("Pri_Fic_Ficha_Entity.ficVersion", "ficVersion")
            .addSelect("Pri_Fic_Ficha_Entity.ficNombre", "ficNombre")
            .addSelect("Pri_Fic_Ficha_Entity.ficDescripcion", "ficDescripcion")
            .addSelect("Pri_Fic_Ficha_Entity.ficCoduniSol", "ficCoduniSol")
            .addSelect("Pri_Fic_Ficha_Entity.ficCoduniEje", "ficCoduniEje")
            .addSelect("Pri_Fic_Ficha_Entity.ficCodcelRes", "ficCodcelRes")
            .addSelect("Pri_Fic_Ficha_Entity.ficFormulSn", "ficFormulSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFepini", "ficForFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFepfin", "ficForFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFerini", "ficForFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFerfin", "ficForFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbienSn", "ficAmbienSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFepini", "ficAmbFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFepfin", "ficAmbFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFerini", "ficAmbFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFerfin", "ficAmbFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficContraSn", "ficContraSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFepini", "ficConFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFepfin", "ficConFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFerini", "ficConFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFerfin", "ficConFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjecutSn", "ficEjecutSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFepini", "ficEjeFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFepfin", "ficEjeFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFerini", "ficEjeFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFerfin", "ficEjeFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiquidSn", "ficLiquidSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFepini", "ficLiqFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFepfin", "ficLiqFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFerini", "ficLiqFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFerfin", "ficLiqFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEsptecSn", "ficEsptecSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEsptecPor", "ficEsptecPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficFortecSn", "ficFortecSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficFortecPor", "ficFortecPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPlanosSn", "ficPlanosSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPlanosPor", "ficPlanosPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPresupSn", "ficPresupSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPresupPor", "ficPresupPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficBaslicSn", "ficBaslicSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficBaslicPor", "ficBaslicPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficForambSn", "ficForambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficForambPor", "ficForambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficCatambSn", "ficCatambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficCatambPor", "ficCatambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstimpSn", "ficEstimpSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstimpPor", "ficEstimpPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerambSn", "ficPerambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerambPor", "ficPerambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerconSn", "ficPerconSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerconPor", "ficPerconPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficObservFic", "ficObservFic")
            .addSelect("Pri_Fic_Ficha_Entity.ficFechaVer", "ficFechaVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstadoVer", "ficEstadoVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioVer", "ficUsuarioVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficObservVer", "ficObservVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioCrea", "ficUsuarioCrea")
            .addSelect("Pri_Fic_Ficha_Entity.ficFecCrea", "ficFecCrea")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioMod", "ficUsuarioMod")
            .addSelect("Pri_Fic_Ficha_Entity.ficFecMod", "ficFecMod")
            //
            .addSelect("Pla_Uni_Unidad_Entity.uniNombre", "uniNombre_sol")
            .addSelect("Pla_Uni_Unidad_Entity_b.uniNombre", "uniNombre_eje")
            .addSelect("Pri_Emp_Empleado_V_Entity.empNombre", "empNombre_res")
            //
            .leftJoin(Pri_Emp_Empleado_V_Entity, "Pri_Emp_Empleado_V_Entity", "Pri_Fic_Ficha_Entity.ficCodcelRes = Pri_Emp_Empleado_V_Entity.empCodcel")
            .leftJoin(Pla_Uni_Unidad_Entity, "Pla_Uni_Unidad_Entity", "Pri_Fic_Ficha_Entity.ficCoduniSol = Pla_Uni_Unidad_Entity.uniCodigo")
            .leftJoin(Pla_Uni_Unidad_Entity, "Pla_Uni_Unidad_Entity_b", "Pri_Fic_Ficha_Entity.ficCoduniEje = Pla_Uni_Unidad_Entity_b.uniCodigo")
            .orderBy('Pri_Fic_Ficha_Entity.ficCodigo', 'ASC')
            .addOrderBy('Pri_Fic_Ficha_Entity.ficVersion', 'ASC')
            .getRawMany();
        if (!register) {
            throw new HttpException('No se encontraron datos - (buscaTodas_FicDet)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------
    /*
        @ApiHeader({
            name: 'Servicio: buscaTodas_Fic()',
            description: 'BUSCA TODOS LOS REGISTROS DE LA COMBINACION USUARIOS/EMPLEADOS',
        })
        //////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////   MAX()
        //////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////
        async buscaListado_Fic() {
    
            const register = await this.fichasRepository
                .createQueryBuilder()
                .select("Pri_Fic_Ficha_Entity.ficCodigo", "ficCodigo")
                .addSelect("MAX(Pri_Fic_Ficha_Entity.ficVersion)", "ficVersion")
                .addSelect("Pri_Fic_Ficha_Entity.ficNombre", "ficNombre")
                .groupBy("Pri_Fic_Ficha_Entity.ficCodigo")
                .addGroupBy("Pri_Fic_Ficha_Entity.ficNombre")
                .orderBy('Pri_Fic_Ficha_Entity.ficCodigo', 'ASC')
                .getRawMany();
            console.log('register: ', register);
            if (!register) {
                throw new HttpException('No se encontraron datos - (buscaTodas_FicDet)', HttpStatus.FORBIDDEN);
            }
            else
                return register;
        }
    */

    @ApiHeader({
        name: 'Servicio: buscaListado_Fic()>',
        description: 'BUSCA TODOS LOS REGISTROS DE LA COMBINACION FIC/FIC_MAX',
    })

    async buscaListado_Fic() {

        const register = await this.fichasMaxRepository.createQueryBuilder()
            .select("Pri_Fic_Ficha_Max_V_Entity.ficCodigoMax", "ficCodigoMax")
            .addSelect("Pri_Fic_Ficha_Max_V_Entity.ficVersionMax", "ficVersionMax")
            .addSelect("Pri_Fic_Ficha_Entity.ficNombre", "ficNombre")
            .leftJoin(Pri_Fic_Ficha_Entity, "Pri_Fic_Ficha_Entity", "Pri_Fic_Ficha_Max_V_Entity.ficCodigoMax = Pri_Fic_Ficha_Entity.ficCodigo and Pri_Fic_Ficha_Max_V_Entity.ficVersionMax = Pri_Fic_Ficha_Entity.ficVersion")
            .orderBy('Pri_Fic_Ficha_Max_V_Entity.ficCodigoMax', 'ASC')
            .addOrderBy('Pri_Fic_Ficha_Max_V_Entity.ficVersionMax', 'ASC')
            .getRawMany();
        if (!register) {
            throw new HttpException('No se encontraron datos - (buscaListado_Fic)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_fichas_por_key(v_codfic: number, v_codver: number): Promise<Pri_Fic_Ficha_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
    })
    async busca_fichas_por_fk(v_codfic: number, v_codver: number): Promise<Pri_Fic_Ficha_Entity> {
        const register = await this.fichasRepository.findOne(
            {
                ficCodigo: v_codfic,
                ficVersion: v_codver
            }
        );

        if (!register)
            throw new HttpException('No existen registros para los parametros definidos en la consulta - (busca_fichas_por_fk)', HttpStatus.FORBIDDEN);
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------
    /*
        @ApiHeader({
            name: 'Servicio: buscaTodas_FicDet()',
            description: 'BUSCA TODOS LOS REGISTROS DEL ENCABEZADO DE FICHAS CON DETALLE INCLUIDO',
        })
        //async busca_Fic(): Promise<Pri_Fic_Ficha_Entity[]> {
        async buscaTodas_FicDet() {
    
            const register = await this.fichasRepository.createQueryBuilder()
                .leftJoinAndSelect("Pri_Fic_Ficha_Entity.detalles", "v_fid")
                .getMany();
    
            if (!register) {
                throw new HttpException('No se encontraron datos - (buscaTodas_FicDet)', HttpStatus.FORBIDDEN);
            }
            else
                return register;
        }
    */
    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: busca_fichas_por_llave(v_codfic: number, v_codver: number)',
        description: 'BUSCA TODOS LOS REGISTROS DE LA COMBINACION USUARIOS/EMPLEADOS',
    })
    async busca_fichas_por_llave(v_codfic: number, v_codver: number) {

        const register = await this.fichasRepository.createQueryBuilder()
            .select("Pri_Fic_Ficha_Entity.ficCodigo", "ficCodigo")
            .addSelect("Pri_Fic_Ficha_Entity.ficVersion", "ficVersion")
            .addSelect("Pri_Fic_Ficha_Entity.ficNombre", "ficNombre")
            .addSelect("Pri_Fic_Ficha_Entity.ficDescripcion", "ficDescripcion")
            .addSelect("Pri_Fic_Ficha_Entity.ficCoduniSol", "ficCoduniSol")
            .addSelect("Pri_Fic_Ficha_Entity.ficCoduniEje", "ficCoduniEje")
            .addSelect("Pri_Fic_Ficha_Entity.ficCodcelRes", "ficCodcelRes")
            .addSelect("Pri_Fic_Ficha_Entity.ficFormulSn", "ficFormulSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFepini", "ficForFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFepfin", "ficForFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFerini", "ficForFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFerfin", "ficForFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbienSn", "ficAmbienSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFepini", "ficAmbFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFepfin", "ficAmbFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFerini", "ficAmbFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFerfin", "ficAmbFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficContraSn", "ficContraSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFepini", "ficConFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFepfin", "ficConFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFerini", "ficConFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFerfin", "ficConFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjecutSn", "ficEjecutSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFepini", "ficEjeFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFepfin", "ficEjeFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFerini", "ficEjeFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFerfin", "ficEjeFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiquidSn", "ficLiquidSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFepini", "ficLiqFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFepfin", "ficLiqFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFerini", "ficLiqFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFerfin", "ficLiqFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEsptecSn", "ficEsptecSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEsptecPor", "ficEsptecPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficFortecSn", "ficFortecSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficFortecPor", "ficFortecPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPlanosSn", "ficPlanosSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPlanosPor", "ficPlanosPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPresupSn", "ficPresupSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPresupPor", "ficPresupPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficBaslicSn", "ficBaslicSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficBaslicPor", "ficBaslicPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficForambSn", "ficForambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficForambPor", "ficForambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficCatambSn", "ficCatambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficCatambPor", "ficCatambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstimpSn", "ficEstimpSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstimpPor", "ficEstimpPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerambSn", "ficPerambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerambPor", "ficPerambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerconSn", "ficPerconSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerconPor", "ficPerconPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficObservFic", "ficObservFic")
            .addSelect("Pri_Fic_Ficha_Entity.ficFechaVer", "ficFechaVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstadoVer", "ficEstadoVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioVer", "ficUsuarioVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficObservVer", "ficObservVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioCrea", "ficUsuarioCrea")
            .addSelect("Pri_Fic_Ficha_Entity.ficFecCrea", "ficFecCrea")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioMod", "ficUsuarioMod")
            .addSelect("Pri_Fic_Ficha_Entity.ficFecMod", "ficFecMod")
            //
            .addSelect("Pla_Uni_Unidad_Entity.uniNombre", "uniNombre_sol")
            .addSelect("Pla_Uni_Unidad_Entity_b.uniNombre", "uniNombre_eje")
            .addSelect("Pri_Emp_Empleado_V_Entity.empNombre", "empNombre_res")
            //
            .where("Pri_Fic_Ficha_Entity.ficCodigo = :par_codfic and Pri_Fic_Ficha_Entity.ficVersion = :par_codver",
                {
                    par_codfic: v_codfic,
                    par_codver: v_codver
                })
            .leftJoin(Pri_Emp_Empleado_V_Entity, "Pri_Emp_Empleado_V_Entity", "Pri_Fic_Ficha_Entity.ficCodcelRes = Pri_Emp_Empleado_V_Entity.empCodcel")
            .leftJoin(Pla_Uni_Unidad_Entity, "Pla_Uni_Unidad_Entity", "Pri_Fic_Ficha_Entity.ficCoduniSol = Pla_Uni_Unidad_Entity.uniCodigo")
            .leftJoin(Pla_Uni_Unidad_Entity, "Pla_Uni_Unidad_Entity_b", "Pri_Fic_Ficha_Entity.ficCoduniEje = Pla_Uni_Unidad_Entity_b.uniCodigo")
            .orderBy('Pri_Fic_Ficha_Entity.ficCodigo', 'ASC')
            .addOrderBy('Pri_Fic_Ficha_Entity.ficVersion', 'ASC')
            .getRawMany();
        if (!register) {
            throw new HttpException('No se encontraron datos - (buscaTodas_FicDet)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: buscaTodos_UsuEmp()',
        description: 'BUSCA TODOS LOS REGISTROS DE LA COMBINACION USUARIOS/EMPLEADOS',
    })
    async busca_fichas_dinamica(v_codunisol: number, v_codunieje: number, v_codcelres: string) {
        //console.log('v_codunisol: ', v_codunisol);
        //console.log('v_codunieje: ', v_codunieje);
        //console.log('v_codcelres: ', v_codcelres);

        let v_where = '';

        if (v_codunisol && v_codunieje && v_codcelres) {
            v_where = 'Pri_Fic_Ficha_Entity.ficCoduniSol = :par_codunisol and Pri_Fic_Ficha_Entity.ficCoduniEje = :par_codunieje and Pri_Fic_Ficha_Entity.ficCodcelRes = :par_codcelres';
            //console.log('1', v_where);
        }
        if (v_codunisol && v_codunieje && !v_codcelres) {
            v_where = 'Pri_Fic_Ficha_Entity.ficCoduniSol = :par_codunisol and Pri_Fic_Ficha_Entity.ficCoduniEje = :par_codunieje';
            //console.log('2', v_where);
        }
        if (v_codunisol && !v_codunieje && v_codcelres) {
            v_where = 'Pri_Fic_Ficha_Entity.ficCoduniSol = :par_codunisol and Pri_Fic_Ficha_Entity.ficCodcelRes = :par_codcelres';
            //console.log('3', v_where);
        }
        if (v_codunisol && !v_codunieje && !v_codcelres) {
            v_where = 'Pri_Fic_Ficha_Entity.ficCoduniSol = :par_codunisol';
            //console.log('4', v_where);
        }
        if (!v_codunisol && v_codunieje && v_codcelres) {
            v_where = 'Pri_Fic_Ficha_Entity.ficCoduniEje = :par_codunieje and Pri_Fic_Ficha_Entity.ficCodcelRes = :par_codcelres';
            //console.log('5', v_where);
        }
        if (!v_codunisol && v_codunieje && !v_codcelres) {
            v_where = 'Pri_Fic_Ficha_Entity.ficCoduniEje = :par_codunieje';
            //console.log('6', v_where);
        }
        if (!v_codunisol && !v_codunieje && v_codcelres) {
            v_where = 'Pri_Fic_Ficha_Entity.ficCodcelRes = :par_codcelres';
            //console.log('7', v_where);
        }
        if (!v_codunisol && !v_codunieje && !v_codcelres) {
            v_where = '';
            //console.log('8', v_where);
        }
        const register = await this.fichasRepository.createQueryBuilder()
            .select("Pri_Fic_Ficha_Entity.ficCodigo", "ficCodigo")
            .addSelect("Pri_Fic_Ficha_Entity.ficVersion", "ficVersion")
            .addSelect("Pri_Fic_Ficha_Entity.ficNombre", "ficNombre")
            .addSelect("Pri_Fic_Ficha_Entity.ficDescripcion", "ficDescripcion")
            .addSelect("Pri_Fic_Ficha_Entity.ficCoduniSol", "ficCoduniSol")
            .addSelect("Pri_Fic_Ficha_Entity.ficCoduniEje", "ficCoduniEje")
            .addSelect("Pri_Fic_Ficha_Entity.ficCodcelRes", "ficCodcelRes")
            .addSelect("Pri_Fic_Ficha_Entity.ficFormulSn", "ficFormulSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFepini", "ficForFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFepfin", "ficForFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFerini", "ficForFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficForFerfin", "ficForFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbienSn", "ficAmbienSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFepini", "ficAmbFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFepfin", "ficAmbFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFerini", "ficAmbFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficAmbFerfin", "ficAmbFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficContraSn", "ficContraSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFepini", "ficConFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFepfin", "ficConFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFerini", "ficConFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficConFerfin", "ficConFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjecutSn", "ficEjecutSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFepini", "ficEjeFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFepfin", "ficEjeFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFerini", "ficEjeFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficEjeFerfin", "ficEjeFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiquidSn", "ficLiquidSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFepini", "ficLiqFepini")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFepfin", "ficLiqFepfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFerini", "ficLiqFerini")
            .addSelect("Pri_Fic_Ficha_Entity.ficLiqFerfin", "ficLiqFerfin")
            .addSelect("Pri_Fic_Ficha_Entity.ficEsptecSn", "ficEsptecSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEsptecPor", "ficEsptecPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficFortecSn", "ficFortecSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficFortecPor", "ficFortecPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPlanosSn", "ficPlanosSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPlanosPor", "ficPlanosPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPresupSn", "ficPresupSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPresupPor", "ficPresupPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficBaslicSn", "ficBaslicSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficBaslicPor", "ficBaslicPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficForambSn", "ficForambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficForambPor", "ficForambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficCatambSn", "ficCatambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficCatambPor", "ficCatambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstimpSn", "ficEstimpSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstimpPor", "ficEstimpPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerambSn", "ficPerambSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerambPor", "ficPerambPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerconSn", "ficPerconSn")
            .addSelect("Pri_Fic_Ficha_Entity.ficPerconPor", "ficPerconPor")
            .addSelect("Pri_Fic_Ficha_Entity.ficObservFic", "ficObservFic")
            .addSelect("Pri_Fic_Ficha_Entity.ficFechaVer", "ficFechaVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficEstadoVer", "ficEstadoVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioVer", "ficUsuarioVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficObservVer", "ficObservVer")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioCrea", "ficUsuarioCrea")
            .addSelect("Pri_Fic_Ficha_Entity.ficFecCrea", "ficFecCrea")
            .addSelect("Pri_Fic_Ficha_Entity.ficUsuarioMod", "ficUsuarioMod")
            .addSelect("Pri_Fic_Ficha_Entity.ficFecMod", "ficFecMod")
            //
            .addSelect("Pla_Uni_Unidad_Entity.uniNombre", "uniNombre_sol")
            .addSelect("Pla_Uni_Unidad_Entity_b.uniNombre", "uniNombre_eje")
            .addSelect("Pri_Emp_Empleado_V_Entity.empNombre", "empNombre_res")
            //
            .where(v_where,
                {
                    par_codunisol: v_codunisol,
                    par_codunieje: v_codunieje,
                    par_codcelres: v_codcelres
                })
            .leftJoin(Pri_Emp_Empleado_V_Entity, "Pri_Emp_Empleado_V_Entity", "Pri_Fic_Ficha_Entity.ficCodcelRes = Pri_Emp_Empleado_V_Entity.empCodcel")
            .leftJoin(Pla_Uni_Unidad_Entity, "Pla_Uni_Unidad_Entity", "Pri_Fic_Ficha_Entity.ficCoduniSol = Pla_Uni_Unidad_Entity.uniCodigo")
            .leftJoin(Pla_Uni_Unidad_Entity, "Pla_Uni_Unidad_Entity_b", "Pri_Fic_Ficha_Entity.ficCoduniEje = Pla_Uni_Unidad_Entity_b.uniCodigo")
            .getRawMany();
        //console.log('register: ', register);            
        if (!register) {
            throw new HttpException('No se encontraron datos - (busca_fichas_dinamica)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
    }

    //-------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------

    //------------ CREA REGISTRO
    @ApiHeader({
        name: 'Servicio: creaFicha(dto: Create_Pri_Fic_Dto): Promise<Pri_Fic_Ficha_Entity>',
        description: 'CREA UN REGISTRO A PARTIR DE CAMPOS DE LA LLAVE PRIMARIA',
    })
    async creaFicha(dto: Create_Pri_Fic_Dto)//: Promise<Pri_Fic_Ficha_Entity> 
    {
        // CREACIÓN DE NUEVO CODIGO
        //if ((dto.ficCodigo == 99999 && dto.ficVersion == 1) || (dto.ficCodigo == 99999 && dto.ficVersion == 99999))
        if (dto.ficCodigo == 99999) {
            // Obtengo el código máximo
            const register = await this.fichasRepository
                .createQueryBuilder()
                .select("MAX(Pri_Fic_Ficha_Entity.ficCodigo)", "ficCodigo")
                .getRawOne();
            // Sumo 1 al código obtenido
            dto.ficCodigo = register.ficCodigo + 1
            // La versión siempre será 1 para un nuevo Código
            dto.ficVersion = 1
            // Guardo el registro
            const model = this.fichasRepository.create(dto);
            const newRegister = await this.fichasRepository.save(model);
            //return newRegister;
            return { message: 'Registro creado', newRegister };
        }
            // CREACIÓN DE NUEVA VERSIÓN
        else if (dto.ficCodigo && dto.ficVersion == 99999) {
            // Verifico que el código exista
            const valida = await this.fichasRepository
                .createQueryBuilder()
                .select("Pri_Fic_Ficha_Entity.ficCodigo", "ficCodigo")
                .where('Pri_Fic_Ficha_Entity.ficCodigo = :par_ficCodigo',
                    {
                        par_ficCodigo: dto.ficCodigo
                    })
                .getRawOne();
            if (valida) {
                // Si el código existe, obtengo la versión máxima
                const register = await this.fichasRepository
                    .createQueryBuilder()
                    .select("MAX(Pri_Fic_Ficha_Entity.ficVersion)", "ficVersion")
                    .where('Pri_Fic_Ficha_Entity.ficCodigo = :par_ficCodigo',
                        {
                            par_ficCodigo: dto.ficCodigo
                        })
                    .getRawOne();
                // Sumo 1 a la versión obtenida
                dto.ficVersion = register.ficVersion + 1
                // Guardo el registro
                const model = this.fichasRepository.create(dto);
                const newRegister = await this.fichasRepository.save(model);
                //return newRegister;
                return { message: 'Registro creado', newRegister };
            }

            else {
                throw new HttpException('NO se encontro el codigo - (nueva ficha)', HttpStatus.FORBIDDEN);
            }
        }
        else {
            throw new HttpException('Combinación de CODIGO/VERSION errada - (nueva ficha)', HttpStatus.FORBIDDEN);
        }
    }

    //------------ ACTUALIZA UN REGISTRO
    @ApiHeader({
        name: 'Servicio: modificaUsuario(v_Codcia: string, v_Usuario: string, dto: Edit_Pri_Usu_Dto): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'ACTUALIZA UN REGISTRO',
    })
    async modificaFicha(v_codfic: number, v_codver: number, dto: Edit_Pri_Fic_Dto): Promise<Pri_Fic_Ficha_Entity> {
        //console.log('mjcCodcia_editCat: ', mjcCodcia);
        //console.log('mjcCoduni_editCat: ', mjcCoduni);
        //console.log('mjcCodigo_editCat: ', mjcCodigo);
        //console.log('dto_editCat: ', dto);        
        const toUpdate = await this.busca_fichas_por_fk(v_codfic, v_codver);
        //console.log('Continua');
        //console.log('toUpdate_editCat: ', toUpdate);
        if (!toUpdate)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (modificaFicha)', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(toUpdate, dto);
        return await this.fichasRepository.save(modelToEdit);
        //return toUpdate;
    }

    //------------ ELIMINA UN REGISTRO
    @ApiHeader({
        name: 'Servicio: EliminaFicha(v_codfic: number, v_codver: number)',
        description: 'ELIMINA UN REGISTRO DEL CATALOGO UTILIZANDO LOS CAMPOS DE LA LLAVE PRIMARIA VIA URL',
    })
    async EliminaFicha(v_codfic: number, v_codver: number) {
        const register = await this.fichasRepository.findOne({
            ficCodigo: v_codfic,
            ficVersion: v_codver
        });
        if (register) {
            const toDelete = this.fichasRepository.create(register);
            this.fichasRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (EliminaFicha)', HttpStatus.FORBIDDEN);
        }
    }


}
