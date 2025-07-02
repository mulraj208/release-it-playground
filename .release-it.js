module.exports = {
  git: {
    // eslint-disable-next-line no-template-curly-in-string
    commitMessage: 'chore: release v${version} [ci skip]',
    requireCleanWorkingDir: false
  },
  npm: false,
  plugins: {
    // IMPORTANT!
    // Uncomment this plugin to use "CalVer" (yyyy.mm.dd.minor) as versioning
    // or leave it commented to use "SemVer" (major.minor.patch)
    // '@csmith/release-it-calver-plugin': {
    //   // Documentation about version format:
    //   // https://github.com/casmith/release-it-calver-plugin
    //   // https://calver.org/
    //   //
    //   // NB: patch is not ignored (not working in this version)
    //   // https://github.com/casmith/release-it-calver-plugin/issues/39
    //   format: 'yyyy.mm.dd.minor.patch',
    //   increment: 'calendar.minor.patch',
    //   fallbackIncrement: 'calendar.minor'
    // },
    '@release-it/bumper': {
      in: {
        file: 'package.json',
        path: 'version'
      },
      out: {
        file: 'package.json',
        path: 'version'
      }
    },
    "@release-it/conventional-changelog": {
      "preset": {
        "name": "conventionalcommits",
        types: [
          // Exampe configuration for sections generated in CHANGELOG.md
          { type: 'feat', section: 'Features' },
          { type: 'fix', section: 'Bug Fixes' },
          { type: 'perf', section: 'Performance Improvements', hidden: false },
          { type: 'refactor', section: 'Code Refactoring', hidden: true },
          { type: 'revert', section: 'Reverts' },
          { type: 'deprecate', section: 'Deprecations', hidden: false },
          { type: 'remove', section: 'Removals', hidden: false },
          { type: 'a11y', section: 'Accessibility', hidden: false },
          { type: 'test', section: 'Tests', hidden: true },
          { type: 'build', section: 'Build System', hidden: true },
          { type: 'ci', section: 'Continuous Integration', hidden: true },
          { type: 'docs', section: 'Documentation', hidden: false },
          { type: 'style', section: 'Styles', hidden: true },
          { type: 'change', section: 'Miscellaneous Changes', hidden: false },
          { type: 'chore', section: 'Miscellaneous Chores', hidden: false },
          { type: 'revert', section: 'Reverts', hidden: true },
          { type: 'security', section: 'Security', hidden: false }
        ]
      },
      "infile": "CHANGELOG.md"
    }
  }
}
