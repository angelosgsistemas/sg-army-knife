import {commands, QuickPickOptions, window, workspace } from 'vscode';
import { enviaComandoTerminalWindows } from '../util/util'
import { caminhoTrunk } from '../util/configuration'
import * as SG from '../produtos.json'

export const compilador = commands.registerCommand('sg-army-knife.compilador', async () => {

    const options : QuickPickOptions = {
        canPickMany: false
    }

    const escolha = await window.showQuickPick( SG.produtos.map( produto => produto.nome ), options )

    const produto = SG.produtos.filter( produto => produto.nome === escolha )[0]
      
    enviaComandoTerminalWindows(`${caminhoTrunk}\\maker\\bin\\maker.ex ${produto.comando}`)

});
