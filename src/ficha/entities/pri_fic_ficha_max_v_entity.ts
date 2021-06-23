
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Pri_Fic_Ficha_Entity } from "./pri_fic_ficha_entity";

//@Index("PRI_FIC_PK", ["ficCodigoMax", "ficVersionMax"], { unique: true })
@Entity("PRI_FIC_FICHA_MAX_V")

export class Pri_Fic_Ficha_Max_V_Entity {

    @PrimaryColumn()
    @Column("number", { primary: true, name: "FIC_CODIGO_MAX", precision: 5, scale: 0, })
    ficCodigoMax?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "FIC_VERSION_MAX", precision: 5, scale: 0, })
    ficVersionMax?: number;
    //-----------------------------------------------------------------------------------------


    @OneToOne
        (
            () => Pri_Fic_Ficha_Entity
        )
    @JoinColumn
        ([
            { name: "FIC_CODIGO_MAX", referencedColumnName: "ficCodigo" },
            { name: "FIC_VERSION_MAX", referencedColumnName: "ficVersion" },
        ])
    usuario: Pri_Fic_Ficha_Entity;

}