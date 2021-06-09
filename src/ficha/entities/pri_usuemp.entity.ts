
import { Connection, ViewColumn, ViewEntity } from "typeorm";
import { Pri_Emp_Empleado_V } from "./pri_emp_empleado_v.entity";
import { Pri_Usu_Usuarios } from "./pri_usu_usuarios.entity";


@ViewEntity({
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("Pri_Usu_Usuarios.usuCodcia", "usuCodcia")
        .addSelect("Pri_Usu_Usuarios.usuUsuario", "usu_usuario")
        .addSelect("Pri_Usu_Usuarios.usuCodcel", "usuCodcel")
        .addSelect("Pri_Emp_Empleado_V.empNombre", "empNombre")
        .addSelect("Pri_Emp_Empleado_V.empPlzNombre", "empPlzNombre")
        .addSelect("Pri_Emp_Empleado_V.empCoduni", "empCoduni")
        .addSelect("Pri_Emp_Empleado_V.empUniNombre", "empUniNombre")
        .addSelect("Pri_Emp_Empleado_V.empCodenti", "empCodenti")
        .addSelect("Pri_Emp_Empleado_V.empEstado", "empEstado")
        .addSelect("Pri_Emp_Empleado_V.empSexo", "empSexo")
        .addSelect("Pri_Emp_Empleado_V.empCorreo", "empCorreo")
        .from(Pri_Emp_Empleado_V, "Pri_Emp_Empleado_V")
        //.leftJoin(Pri_Usu_Usuarios, "Pri_Usu_Usuarios", "Pri_Usu_Usuarios.usuCodcia = Pri_Emp_Empleado_V.empCodcia and Pri_Usu_Usuarios.usuCodcel = Pri_Emp_Empleado_V.empCodcel")
        .leftJoin(Pri_Usu_Usuarios, "Pri_Usu_Usuarios", "Pri_Usu_Usuarios.usuCodcel = Pri_Emp_Empleado_V.empCodcel")
})
export class Pri_Usu_Empleados {

    @ViewColumn()
    usuCodcia: string;

    @ViewColumn()
    usuUsuario: string;

    @ViewColumn()
    usuCodcel: string;

    @ViewColumn()
    empNombre: string;

    @ViewColumn()
    empPlzNombre: string;

    @ViewColumn()
    empCoduni: number;

    @ViewColumn()
    empUniNombre: string;

    @ViewColumn()
    empCodenti: string;

    @ViewColumn()
    empEstado: string;

    @ViewColumn()
    empSexo: string;

    @ViewColumn()
    empCorreo: string;

}