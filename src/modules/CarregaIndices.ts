import * as vscode from 'vscode';

let fs = require('fs')

export const pegaIndices = vscode.commands.registerCommand('sg-army-knife.pegaindices', async () => {

    const indices = fs.readFileSync('T:\\indices.json', 'utf8')

    let indicesJSON = JSON.parse(indices)[0]

    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    let selectedWord = GetSelectedWord(editor);
    
    if (selectedWord === "") {
        return;
    }

    let indice : string[] = indicesJSON[selectedWord]
    console.log(indicesJSON)

    await vscode.window.showQuickPick( indice, { canPickMany: false } )

});


const GetSelectedWord = (editor: vscode.TextEditor) : string => {
    
    const select = editor.selection;
    let selectedWord = editor.document.getText(select);

    if (!selectedWord) {
        const range = editor.document.getWordRangeAtPosition(select.start);
        if (range) {
            selectedWord = editor.document.getText(range);
        }
    }

    if (!selectedWord) {
        return "";
    }

    return selectedWord.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}