import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Pri_Emp_V_Dto } from './create_pri_emp_v_dto';


export class Edit_Pri_Emp_V_Dto extends PartialType(
    OmitType(Create_Pri_Emp_V_Dto, [

    ] as const),
) { }