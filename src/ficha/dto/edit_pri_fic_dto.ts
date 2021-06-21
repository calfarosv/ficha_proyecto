import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Pri_Fic_Dto } from './create_pri_fic_dto';

export class Edit_Pri_Fic_Dto extends PartialType(
    OmitType(Create_Pri_Fic_Dto, [

    ] as const),
) { }