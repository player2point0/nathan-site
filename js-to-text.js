var fs = require("fs");
const jsTextFilesFolderName = "./public/javascriptTextFiles";

fs.rmdirSync(jsTextFilesFolderName, { recursive: true, force: true });
fs.mkdirSync(jsTextFilesFolderName, { recursive: true });

const jsFilenames = retrieveJsFilenames("./src", []);

jsFilenames.forEach((filename) => {
	const fileContent = fs.readFileSync(filename);
	const newFilename = extractFilename(filename);
	fs.writeFileSync(jsTextFilesFolderName + "/" + newFilename, fileContent);
});

function extractFilename(filename) {
	const lastDash = filename.lastIndexOf("/");
	return filename.substring(lastDash, filename.length - 3) + ".txt";
}

function retrieveJsFilenames(path, filenames) {
	const files = fs.readdirSync(path);

	files.forEach((file) => {
		const extension = file.substring(file.length - 3);
		const currentPath = path + "/" + file;

		if (extension === ".js") {
			filenames.push(currentPath);
		} else {
			try {
				retrieveJsFilenames(currentPath, filenames);
			} catch (error) {}
		}
	});

	return filenames;
}

// TODO call this when we build the project
// TODO ignore code we didn't write e.g. reportWebVitals
