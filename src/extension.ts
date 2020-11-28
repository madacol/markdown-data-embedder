// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import getIndicatorData from './helpers/getIndicatorData';
import getIndicators from './helpers/getIndicators';
import searchIndicators from './helpers/searchIndicators';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "markdown-data-embedder" is now active!');

	const allIndicators = await getIndicators();

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('markdown-data-embedder.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed

		const indicators = searchIndicators('expectancy', allIndicators);
		const indicatorId = indicators[0].id;
		const data = getIndicatorData(indicatorId);

		const snippet: vscode.SnippetString = 'adsasf';

		vscode.window.activeTextEditor?.insertSnippet(snippet);

		// Display a message box to the user
		vscode.window.showInformationMessage(JSON.stringify(indicators[0]));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
