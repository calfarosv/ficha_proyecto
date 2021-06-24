import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("CG_ENT_PK", ["entCia", "entCodigo", "entAnio"], { unique: true })
@Entity("CG_ENT_ENTIDAD")

export class Cg_Ent_Entidad_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "ENT_CIA", length: 3, })
    entCia?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_CODUNI", length: 2, })
    entCoduni?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_CODLIN", length: 2, })
    entCodlin?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "ENT_CODIGO", length: 3, })
    entCodigo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_DESCRIPCION", length: 80, })
    entDescripcion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_INDICADOR", length: 1, })
    entIndicador?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_CODAREA", length: 2, })
    entCodarea?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_ACTIVO", length: 1, })
    entActivo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_PADRE", length: 3, })
    entPadre?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "ENT_ANIO", precision: 4, })
    entAnio?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_CODAFC", length: 2, })
    entCodafc?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "ENT_CODRFC", length: 2, })
    entCodrfc?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "ENT_FECHA_CREACION", })
    entFechaCreacion?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ENT_CODTCA", precision: 2, })
    entCodtca?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ENT_CODCAP", precision: 3, })
    entCodcap?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "ENT_CODDCP", precision: 2, })
    entCoddcp?: number;
    //-----------------------------------------------------------------------------------------


}