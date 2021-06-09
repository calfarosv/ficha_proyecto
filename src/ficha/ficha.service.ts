import { Injectable } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pri_Usu_Usuarios } from './entities/pri_usu_usuarios.entity';

@Injectable()
export class FichaService {

    constructor(
        @InjectRepository(Pri_Usu_Usuarios) private usuariosRepository: Repository<Pri_Usu_Usuarios>,
        //@InjectRepository(Mch_Pzf_Fec) private pzoFecRepository: Repository<Mch_Pzf_Fec>,
        //@InjectRepository(Mch_Pzd_Det) private pzoDetRepository: Repository<Mch_Pzd_Det>,
        //private readonly usuariosService: UsuariosService,
        //private readonly unidadService: UnidadService
    ) { }

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

}
