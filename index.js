const tc = require('@actions/tool-cache');
const core = require('@actions/core');
const os = require('os');
const fs = require('fs');
const path = require('path');

const name = 'fun';
const platform = os.platform();
const version = core.getInput('fun-version') ? core.getInput('fun-version') : '3.6.17';

async function run() {
    const [ext, extractFunc, executable] = (function () {
        switch (platform) {
            case 'linux':
                return ['zip', 'extractZip', `${name}-v${version}-linux`];
            case 'darwin':
                return ['zip', 'extractZip', `${name}-v${version}-macos`];
            case 'win32':
                return ['zip', 'extractZip', `${name}-v${version}-win.exe`];
            default:
                throw new Error(`Unexpected OS ${platform}`);
        }
    })();

    const url = `https://funcruft-release.oss-accelerate.aliyuncs.com/fun/${executable}.${ext}`;
    const downloadedPath = await tc.downloadTool(url);
    const extractedPath = await tc[extractFunc](downloadedPath);

    fs.copyFileSync(path.normalize(`${extractedPath}/${executable}`), path.normalize(`${extractedPath}/fun`))

    const cachedPath = await tc.cacheDir(extractedPath, name, version);
    core.addPath(cachedPath);
}

run().catch(function (e) {
    core.setFailed(`Action failed with error: ${e}`);
});
