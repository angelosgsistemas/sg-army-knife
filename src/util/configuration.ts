import { workspace } from 'vscode'

export const servidores : string[] = ['232', '230']

export const caminhoTrunk = workspace.getConfiguration().get('Repositório')

export const pastasServidor : string[] = ['new' ,'src', 'include','programas_externos', 'frente']
