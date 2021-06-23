import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("BD_UBD_UK", ["ubdUsrname"], { unique: true })
@Entity("SIS_UBD_USUARIOS_BD")

export class Sis_Ubd_Usuarios_Bd_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "UBD_USRNAME", length: 30, })
    ubdUsrname?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_NOMBRE", length: 50, })
    ubdNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_EMPLEADO", length: 1, })
    ubdEmpleado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_DEPTO", length: 40, })
    ubdDepto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_ESTADO", length: 1, })
    ubdEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_CODCEL", length: 8, })
    ubdCodcel?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "UBD_FECELIM", })
    ubdFecelim?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_USERRED", length: 30, })
    ubdUserred?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_USRCORREO", length: 30, })
    ubdUsrcorreo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "UBD_CODINT", precision: 2, })
    ubdCodint?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "UBD_EXCLUIDO", length: 1, })
    ubdExcluido?: string;
    //-----------------------------------------------------------------------------------------

}