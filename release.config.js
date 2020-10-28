module.exports = {
    release: { branches: ['master'] },
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', { changelogFile: 'docs/CHANGELOG.md' }],
        [
            '@semantic-release/git',
            {
                assets: ['docs/CHANGELOG.md'],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: [{ path: 'dist/*', label: 'source' }],
            },
        ],
        [
            '@semantic-release/npm',
            {
                pkgRoot: 'dist',
            },
        ],
    ],
};
