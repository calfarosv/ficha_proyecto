
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Pri_Emp_Empleado_V_Entity } from "./pri_emp_empleado_v.entity";

@Index("PRI_USU_PK", ["usuCodcia", "usuUsuario"], { unique: true })
@Entity("PRI_USU_USUARIOS")

export class Pri_Usu_Usuarios_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "USU_CODCIA", length: 3 })
    usuCodcia?: string;

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "USU_USUARIO", length: 30 })
    usuUsuario?: string;

    @Column("number", { name: "USU_CODUNI", precision: 5, scale: 0, })
    usuCoduni?: number;

    @Column("varchar2", { name: "USU_CODCEL", length: 7 })
    usuCodcel?: string;

    @Column("varchar2", { name: "USU_EMAIL", length: 100 })
    usuEmail?: string;

    @Column("varchar2", { name: "USU_TIPO", length: 3 })
    usuTipo?: string;
/*
    //@OneToOne(()=> Pri_Emp_Empleado_V, {eager: true}) //lazy //eager
    @OneToOne(() => Pri_Emp_Empleado_V_Entity) //lazy //eager
    @JoinColumn({ name: "USU_CODCEL", referencedColumnName: "empCodcel" })
    @JoinColumn({ name: "USU_CODCIA", referencedColumnName: "empCodcia" })
    //@JoinColumn([{ name: 'USU_CODCIA' }, { name: 'USU_CODCEL' }])
    usuario: Pri_Emp_Empleado_V_Entity;
    */
}