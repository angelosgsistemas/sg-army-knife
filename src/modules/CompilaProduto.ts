import {commands, QuickPickOptions, window, workspace } from 'vscode';
import { enviaComandoTerminalWindows } from '../util/util'
import { caminhoTrunk,opcoesdebuild } from '../util/configuration'
import * as SG from '../compilacoes.json'

export const compilador = commands.registerCommand('sg-army-knife.compilador', async () => {

    const equipe = await window.showQuickPick(SG.compilacoes.map(compilacao => compilacao.equipe), {
        canPickMany: false
    })

    const produtos = SG.compilacoes.filter(produto => produto.equipe === equipe)[0]

    const produtosselecionados: string[] | undefined = await window.showQuickPick(produtos.produtos.map(produtos => produtos.nome), {
        canPickMany: true
    })
    const build = await window.showQuickPick( opcoesdebuild, {
        canPickMany: false
    })

    if (produtosselecionados) {
        enviaComandoTerminalWindows(`${caminhoTrunk}\\maker\\bin\\maker.ex ${produtos.libs}`)
        produtosselecionados.forEach(produto => envia( produto, equipe, build ) )
    }

});
export const envia= ( escolha : string, equipe : string | undefined, build : string | undefined ) => {

    const produtos = SG.compilacoes.filter(produto => produto.equipe === equipe)[0]
    const produto  = produtos.produtos.filter(produto => produto.nome === escolha)[0]
    let rebuild = ''
    if( build === 'rebuild'){
        rebuild = ' --rebuild'
    }

    enviaComandoTerminalWindows(`${caminhoTrunk}\\maker\\bin\\maker.ex ${produto.comando}${rebuild}`)
}