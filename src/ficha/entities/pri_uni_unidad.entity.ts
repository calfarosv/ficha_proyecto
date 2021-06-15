
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("PRI_UNI_PK", ["uniCodcia", "uniCodigo"], { unique: true })
@Entity("PRI_UNI_UNIDAD_V")

export class Pri_Uni_Unidad_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "UNI_CODCIA", length: 3 })
    uniCodcia?: string;

    @PrimaryColumn()
    @Column("number", {  primary: true, name: "UNI_CODIGO", precision: 5, scale: 0, })
    uniCodigo?: number;

    @Column("varchar2", { name: "UNI_NOMBRE", length: 80 })
    uniNombre?: string;

    @Column("varchar2", { name: "UNI_CODENTI", length: 5 })
    uniCodenti?: string;

    @Column("varchar2", { name: "UNI_ESTADO", length: 1 })
    uniEstado?: string;

}