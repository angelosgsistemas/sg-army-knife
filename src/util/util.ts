import { window, QuickPickOptions } from 'vscode'
import { servidores, caminhoTrunk } from './configuration'

export const selecionaServidor = () => {
    
    const options : QuickPickOptions = {
        canPickMany: false
    }

    return window.showQuickPick( servidores, options )
}

export const enviaComandoTerminalWindows= (comando : string) => {

    let terminal = window.activeTerminal

    if (!terminal){
        terminal = window.createTerminal() 
    }

    terminal.sendText(`${caminhoTrunk}`)
    terminal.sendText('cd new')
    terminal.sendText(comando)
    terminal.show()

}
