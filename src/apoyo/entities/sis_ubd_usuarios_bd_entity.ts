import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("BD_UBD_UK", ["UbdUsrname"], { unique: true })
@Entity("SIS_UBD_USUARIOS_BD")

export class Sis_Ubd_Usuarios_Bd_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "UBD_USRNAME", length: 30, })
    UbdUsrname?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_NOMBRE", length: 50, })
    UbdNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_EMPLEADO", length: 1, })
    UbdEmpleado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_DEPTO", length: 40, })
    UbdDepto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_ESTADO", length: 1, })
    UbdEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_CODCEL", length: 8, })
    UbdCodcel?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "UBD_FECELIM", })
    UbdFecelim?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_USERRED", length: 30, })
    UbdUserred?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_USRCORREO", length: 30, })
    UbdUsrcorreo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "UBD_CODINT", precision: 2, })
    UbdCodint?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_EXCLUIDO", length: 1, })
    UbdExcluido?: string;
    //-----------------------------------------------------------------------------------------

}