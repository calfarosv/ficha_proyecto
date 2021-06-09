import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Pri_Usu_Dto } from './create_pri_usu_dto';


export class Edit_Pri_Usu_Dto extends PartialType(
    OmitType(Create_Pri_Usu_Dto, [

    ] as const),
) { }