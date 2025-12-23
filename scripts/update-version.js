const fs = require('fs');
const path = require('path');

// Read version from package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;
const buildDate = new Date().toISOString().split('T')[0];

// Update index.html
const indexPath = path.join(__dirname, '..', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Update APP_VERSION constant
indexContent = indexContent.replace(
    /const APP_VERSION = ['"](.*?)['"];?/,
    `const APP_VERSION = '${version}';`
);

// Update APP_BUILD_DATE
indexContent = indexContent.replace(
    /const APP_BUILD_DATE = ['"](.*?)['"];?/,
    `const APP_BUILD_DATE = '${buildDate}';`
);

fs.writeFileSync(indexPath, indexContent);

console.log(`✅ Version updated to ${version} (Build: ${buildDate})`);

