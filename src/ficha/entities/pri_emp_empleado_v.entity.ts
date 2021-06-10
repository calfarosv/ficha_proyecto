
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Pri_Usu_Usuarios } from "./pri_usu_usuarios.entity";

@Index("PRI_USU_PK", ["empCodcia", "empCodcel"], { unique: true })
@Entity("PRI_EMP_EMPLEADO_V")

export class Pri_Emp_Empleado_V {

    @Column("varchar2", { primary: true, name: "EMP_CODCIA", length: 3 })
    empCodcia?: string;

    @Column("varchar2", { primary: true, name: "EMP_CODCEL", length: 8 })
    empCodcel?: string;

    @Column("varchar2", { name: "EMP_NOMBRE", length: 60 })
    empNombre?: string;

    @Column("varchar2", { name: "EMP_PLZ_NOMBRE", length: 80 })
    empPlzNombre?: string;

    @Column("number", { name: "EMP_CODUNI", precision: 5, scale: 0, })
    empCoduni?: number;

    @Column("varchar2", { name: "EMP_UNI_NOMBRE", length: 80 })
    empUniNombre?: string;

    @Column("varchar2", { name: "EMP_CODENTI", length: 3 })
    empCodenti?: string;

    @Column("varchar2", { name: "EMP_ESTADO", length: 1 })
    empEstado?: string;

    @Column("varchar2", { name: "EMP_SEXO", length: 1 })
    empSexo?: string;

    @Column("varchar2", { name: "EMP_CORREO", length: 25 })
    empCorreo?: string;

    @Column("varchar2", {name: "EMP_CODCEL", length: 8 })
    empCodcel2?: string;
    /*
    @OneToOne(() => Pri_Usu_Usuarios)
    @JoinColumn({ name: "empCodcel2" })
    usuario: Pri_Usu_Usuarios;
*/

}