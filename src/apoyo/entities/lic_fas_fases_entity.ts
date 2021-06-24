import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("FAS_PK", ["fasCodigo"], { unique: true })
@Entity("LIC_FAS_FASES")

export class Lic_Fas_Fases_Entity {
    
    @PrimaryColumn()
    @Column("number", { primary: true, name: "FAS_CODIGO", precision: 2, })
    fasCodigo?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAS_NOMBRE", length: 50, })
    fasNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAS_ORDEN", length: 2, })
    fasOrden?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FAS_CDI", length: 1, })
    fasCdi?: string;
    //-----------------------------------------------------------------------------------------

}