// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "quack-comments" is now active!');

	let disposable = vscode.commands.registerCommand('quack-comments.helloWorld', function () {

		vscode.window.showInformationMessage('Hello World from quack-comments!');

		const { exec } = require('child_process');

	const exePath = 'path/to/your/file.exe';

	exec(exePath, (error, stdout, stderr) => {
	if (error) {
		console.error(`Error: ${error.message}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.error(`stderr: ${stderr}`);
	});

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
