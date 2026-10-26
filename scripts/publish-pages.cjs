// Publish only compiled public files. The source checkout, working branch, and
// normal Git index remain untouched. Enabling GitHub Pages is a separate setting.
const { execFileSync } = require('node:child_process');
const { mkdtempSync, rmSync, existsSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { resolve, join } = require('node:path');
const root = resolve(__dirname, '..');
const dist = join(root, 'dist');
const run = (args, options = {}) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'], ...options }).trim();
if (!existsSync(join(dist, 'index.html'))) throw new Error('Run npm run build first.');
const temporary = mkdtempSync(join(tmpdir(), 'expla-pages-index-'));
try {
  const source = run(['rev-parse', 'HEAD']);
  const remote = run(['ls-remote', 'origin', 'refs/heads/gh-pages']);
  let parent;
  if (remote) {
    run(['fetch', 'origin', 'refs/heads/gh-pages']);
    parent = run(['rev-parse', 'FETCH_HEAD']);
  }
  const gitDir = run(['rev-parse', '--absolute-git-dir']);
  const environment = { ...process.env, GIT_INDEX_FILE: join(temporary, 'index') };
  const stage = args => run([`--git-dir=${gitDir}`, `--work-tree=${dist}`, ...args], { cwd: dist, env: environment });
  stage(['read-tree', '--empty']);
  stage(['add', '--all', '--force', '.']);
  const tree = stage(['write-tree']);
  const commit = run(['commit-tree', tree, ...(parent ? ['-p', parent] : []), '-m', `Publish expla website from ${source.slice(0, 12)}`]);
  run(['push', 'origin', `${commit}:refs/heads/gh-pages`]);
  const saved = run(['ls-remote', 'origin', 'refs/heads/gh-pages']).split(/\s/)[0];
  if (saved !== commit) throw new Error('Remote publication commit was not confirmed.');
  console.log(`Compiled website pushed to gh-pages: ${commit}`);
  console.log('GitHub Pages must use: Deploy from a branch → gh-pages → / (root).');
  console.log('Expected public URL after Pages is enabled: https://uliarazina.github.io/expla-3d-globe/');
} finally { rmSync(temporary, { recursive: true, force: true }); }
