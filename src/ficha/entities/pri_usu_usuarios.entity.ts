
import { Column, Entity, Index } from "typeorm";

@Index("PRI_USU_PK", ["usuCodcia", "usuUsuario"], { unique: true })
@Entity("PRI_USU_USUARIOS")

export class Pri_Usu_Usuarios {
@Column("varchar2", { primary: true, name: "USU_CODCIA", length: 3 })
usuCodcia?: string;

@Column("varchar2", { primary: true, name: "USU_USUARIO", length: 30 })
usuUsuario?: string;

@Column("number", { name: "USU_CODUNI", precision: 5, scale: 0, })
usuCoduni?: number;

@Column("varchar2", { name: "USU_CODCEL", length: 7 })
usuCodcel?: string;

@Column("varchar2", { name: "USU_EMAIL", length: 100 })
usuEmail?: string;

@Column("varchar2", { name: "USU_TIPO", length: 3 }) 
usuTipo?: string;

}