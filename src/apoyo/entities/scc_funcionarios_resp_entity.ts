import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("SCC_FNR_PK", ["SccFunCodcia", "SccFunRespId"], { unique: true })
@Entity("SCC_FUNCIONARIOS_RESP")

export class Scc_Funcionarios_Resp_Entity {

    @PrimaryColumn()
    @Column("varchar2", {primary: true, name: "SCC_FUN_CODCIA", length: 3, })
    SccFunCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", {primary: true, name: "SCC_FUN_RESP_ID", precision: 20, })
    SccFunRespId?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "SCC_FUN_RESP_NOMBRE", length: 100, })
    SccFunRespNombre?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "SCC_FUN_RESP_USUARIO", length: 20, })
    SccFunRespUsuario?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "SCC_VISUALIZA_CTO", length: 1, })
    SccVisualizaCto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "SCC_FUN_JURIDICO", length: 1, })
    SccFunJuridico?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "SCC_VISUALIZA_EVA", length: 1, })
    SccVisualizaEva?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "SCC_DIGITA_CTO", length: 1, })
    SccDigitaCto?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "FUN_USRCREA", length: 30, })
    FunUsrcrea?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "FUN_FECCREA" , })
    FunFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "FUN_USRMOD", length: 30, })
    FunUsrmod?: string;
    //-----------------------------------------------------------------------------------------
    @Type(() => Date)
    @Column("timestamp", {name: "FUN_FECMOD" , })
    FunFecmod?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", {name: "FUN_ACTI_FIJO", length: 1, })
    FunActiFijo?: string;
    //-----------------------------------------------------------------------------------------
    
}