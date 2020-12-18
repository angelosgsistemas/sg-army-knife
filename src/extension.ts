import * as vscode from 'vscode';
import {compilador} from './modules/CompilaProduto'
import {exportaArquivo, exportaTodosArquivos} from './modules/ExportaArquivo'
import {pegaIndices} from './modules/CarregaIndices'

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(exportaArquivo);
	context.subscriptions.push(exportaTodosArquivos);
	context.subscriptions.push(compilador);
	context.subscriptions.push(pegaIndices)
}

export function deactivate() {}

