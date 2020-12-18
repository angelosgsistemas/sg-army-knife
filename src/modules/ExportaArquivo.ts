import {commands, window, workspace, TextEditor } from 'vscode';
import { selecionaServidor, enviaComandoTerminalWindows } from '../util/util'
import { caminhoTrunk, pastasServidor } from '../util/configuration'

const exportaArquivo = commands.registerCommand('sg-army-knife.exportaArquivo', async () => {

    const file: TextEditor | undefined = window.activeTextEditor

    if(!file){
        return 
    }  
    
    let caminhoServidor = workspace
        .getConfiguration()
        .get(`Caminho ${await selecionaServidor()}`)

    let comando : string = `${caminhoTrunk}\\exportbranch\\bin\\exportbranch.ex -s `

    let endereco : string[] = file.document.fileName.split('\\')

    let pasta = pastasServidor
                    .filter( pasta => endereco.includes(pasta) )
    

    comando += `${caminhoTrunk}\\${pasta[0]}; -d ${caminhoServidor} -f ${endereco[endereco.length -1 ]}`

    enviaComandoTerminalWindows(comando)

})


const exportaTodosArquivos = commands.registerCommand('sg-army-knife.exportaTodosArquivos', async () => {
      
    const pastas : string[] | undefined = await window.showQuickPick( pastasServidor, {canPickMany: true} )

    let caminhoServidor = workspace.getConfiguration().get(`Caminho ${await selecionaServidor()}`)

    if (pastas) {
        let comando : string = `${caminhoTrunk}\\exportbranch\\bin\\exportbranch.ex -s `

        pastas.forEach( pasta => comando += `${caminhoTrunk}\\${pasta};` )

        comando += ` -d ${caminhoServidor}`

        enviaComandoTerminalWindows(comando)
    }
    
})

export { exportaArquivo, exportaTodosArquivos }