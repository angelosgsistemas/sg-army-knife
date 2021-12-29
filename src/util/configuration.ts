import { workspace } from 'vscode'

export const servidores : string[] = ['Harbour-Ubuntu', 'xHarbour', 'Harbourx64', 'Harbourx86', 'Extra']

export const caminhoTrunk = workspace.getConfiguration().get('Repositório')

export const pastasServidor : string[] = ['new' ,'src', 'include','programas_externos', 'frente']
