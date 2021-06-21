import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Pri_Fid_Dto } from './create_pri_fid_dto';

export class Edit_Pri_Fid_Dto extends PartialType(
    OmitType(Create_Pri_Fid_Dto, [

    ] as const),
) { }