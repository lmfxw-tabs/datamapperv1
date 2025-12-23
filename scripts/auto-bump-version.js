const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Read current version from package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

// Parse version (e.g., "1.0.1" -> [1, 0, 1])
const versionParts = currentVersion.split('.').map(Number);
versionParts[2] = (versionParts[2] || 0) + 1; // Increment patch version
const newVersion = versionParts.join('.');

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

// Update index.html using the existing script
const updateScriptPath = path.join(__dirname, 'update-version.js');
try {
    execSync(`node "${updateScriptPath}"`, { stdio: 'inherit' });
} catch (error) {
    console.error('Error running update-version.js:', error.message);
    process.exit(1);
}

console.log(`✅ Version auto-incremented: ${currentVersion} → ${newVersion}`);

