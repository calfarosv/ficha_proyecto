import { Injectable } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pri_Emp_Empleado_V } from './entities/pri_emp_empleado_v.entity';
import { Pri_Usu_Empleados } from './entities/pri_usuemp.entity';
import { Pri_Usu_Usuarios } from './entities/pri_usu_usuarios.entity';

@Injectable()
export class FichaService {

    constructor(
        @InjectRepository(Pri_Usu_Usuarios) private usuariosRepository: Repository<Pri_Usu_Usuarios>,
        @InjectRepository(Pri_Emp_Empleado_V) private empleadosRepository: Repository<Pri_Emp_Empleado_V>,
        @InjectRepository(Pri_Usu_Empleados) private usuempRepository: Repository<Pri_Usu_Empleados>,
        //private readonly usuariosService: UsuariosService,
        //private readonly unidadService: UnidadService
    ) { }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // USUARIOS
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //------------ BUSCA TODOS LOS REGISTROS DEL CATALOGO
    @ApiHeader({
        name: 'Servicio: findAllFic(): Promise<Mch_Usn_Usuarios[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async findAllUsu(): Promise<Pri_Usu_Usuarios[]> {
        return await this.usuariosRepository.find(
            {
                order: {
                    usuCodcia: 'ASC',
                    usuUsuario: 'ASC'
                }
            }
        );
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // EMPLEADOS_V
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //------------ BUSCA TODOS LOS REGISTROS DEL CATALOGO
    @ApiHeader({
        name: 'Servicio: findAllFic(): Promise<Mch_Usn_Usuarios[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async findAllEmp(): Promise<Pri_Emp_Empleado_V[]> {
        return await this.empleadosRepository.find(
            {
                order: {
                    empCodcia: 'ASC',
                    empNombre: 'ASC'
                }
            }
        );
    }


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // USUARIOS/EMPLEADOS_V
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    //------------ BUSCA TODOS LOS REGISTROS DEL CATALOGO
    @ApiHeader({
        name: 'Servicio: findAllFic(): Promise<Mch_Usn_Usuarios[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async findAllUsuEmp(): Promise<Pri_Usu_Empleados[]> {

        return await  this.usuariosRepository.createQueryBuilder()
         .select("Pri_Usu_Usuarios.usuCoduni", "usuCoduni")
        .addSelect("Pri_Usu_Usuarios.usuUsuario", "usu_usuario222")
        .leftJoinAndSelect("Pri_Usu_Usuarios.usuario", "usuario")

       /* .addSelect("Pri_Emp_Empleado_V.empNombre", "empNombre")
        .addSelect("Pri_Emp_Empleado_V.empPlzNombre", "empPlzNombre")
        .addSelect("Pri_Emp_Empleado_V.empCoduni", "empCoduni")
        .addSelect("Pri_Emp_Empleado_V.empUniNombre", "empUniNombre")
        .addSelect("Pri_Emp_Empleado_V.empCodenti", "empCodenti")
        .addSelect("Pri_Emp_Empleado_V.empEstado", "empEstado")
        .addSelect("Pri_Emp_Empleado_V.empSexo", "empSexo")
        .addSelect("Pri_Emp_Empleado_V.empCorreo", "empCorreo")*/

        .execute();
        //.leftJoin(Pri_Usu_Usuarios, "Pri_Usu_Usuarios", "Pri_Usu_Usuarios.usuCodcia = Pri_Emp_Empleado_V.empCodcia and Pri_Usu_Usuarios.usuCodcel = Pri_Emp_Empleado_V.empCodcel")
       // .leftJoin(Pri_Emp_Empleado_V, "Pri_Emp_Empleado_V", "Pri_Usu_Usuarios.usuCodcel = Pri_Emp_Empleado_V.empCodcel")
        return await this.usuempRepository.find(
            {
                order: {
                    usuCodcia: 'ASC',
                    usuUsuario: 'ASC'
                }
            }
        );
    }


//-----
}
