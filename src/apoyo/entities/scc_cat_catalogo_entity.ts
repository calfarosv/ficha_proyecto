import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_CAT_PK", ["catCiaCodcia", "catTipoInfo", "catLlave"], { unique: true })
@Entity("SCC_CAT_CATALOGO")

export class Scc_Cat_Catalogo_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "CAT_CIA_CODCIA", length: 3, })
    catCiaCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "CAT_TIPO_INFO", length: 2, })
    catTipoInfo?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "CAT_LLAVE", precision: 2, })
    catLlave?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CAT_CODIGO", length: 15, })
    catCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "CAT_DESCRIPCION", length: 50, })
    catDescripcion?: string;
    //-----------------------------------------------------------------------------------------


}