import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Pla_Uni_Unidad_Entity } from './entities/pla_uni_unidad_entity';

@Injectable()
export class ApoyoService {

    constructor(
        @InjectRepository(Pla_Uni_Unidad_Entity) private unidadesRepository: Repository<Pla_Uni_Unidad_Entity>,
        //@InjectRepository(Pri_Usu_Empleados) private usuempRepository: Repository<Pri_Usu_Empleados>,
        //private readonly usuariosService: UsuariosService,
        //private readonly unidadService: UnidadService
    ) { }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ESTRUCTURAS DE APOYO
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: buscaTodos_Usu(): Promise<Pri_Usu_Usuarios_Entity[]>',
        description: 'BUSCA TODOS LOS REGISTROS DEL MAESTRO DE USUARIOS',
    })
    async buscaTodas_Uni(): Promise<Pla_Uni_Unidad_Entity[]> {
        const register = await this.unidadesRepository.find(
            {
                order: {
                    uniCodcia: 'ASC',
                    uniNombre: 'ASC'
                },
            where: {
                uniCodcia: '001',
                uniEstado: In(['A'])
            },            
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
    async busca_unidades_por_llave(v_codcia: string, v_coduni: number): Promise<Pla_Uni_Unidad_Entity> {
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



}
