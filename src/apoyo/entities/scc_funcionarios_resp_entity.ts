import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_FNR_PK", ["sccFunCodcia", "sccFunRespId"], { unique: true })
@Entity("SCC_FUNCIONARIOS_RESP")

export class Scc_Funcionarios_Resp_Entity {

    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "SCC_FUN_CODCIA", length: 3, })
    sccFunCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "SCC_FUN_RESP_ID", precision: 20, })
    sccFunRespId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "SCC_FUN_RESP_NOMBRE", length: 100, })
    sccFunRespNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "SCC_FUN_RESP_USUARIO", length: 20, })
    sccFunRespUsuario?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "SCC_VISUALIZA_CTO", length: 1, })
    sccVisualizaCto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "SCC_FUN_JURIDICO", length: 1, })
    sccFunJuridico?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "SCC_VISUALIZA_EVA", length: 1, })
    sccVisualizaEva?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "SCC_DIGITA_CTO", length: 1, })
    sccDigitaCto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FUN_USRCREA", length: 30, })
    funUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FUN_FECCREA", })
    funFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FUN_USRMOD", length: 30, })
    funUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", { name: "FUN_FECMOD", })
    funFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "FUN_ACTI_FIJO", length: 1, })
    funActiFijo?: string;
    //-----------------------------------------------------------------------------------------

}