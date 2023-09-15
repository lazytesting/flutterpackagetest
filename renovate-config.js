module.exports = {
    "branchPrefix": "test-renovate/",
    "username": "renovate-release",
    "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
    "onboarding": false,
    "platform": "github",
    "forkProcessing": "disabled",
    "dryRun": "full",
    "repositories": ["lazytesting/flutterpackagetest"],
    "packageRules": [
      {
        "description": "lockFileMaintenance",
        "matchUpdateTypes": [
          "pin",
          "digest",
          "patch",
          "minor",
          "major",
          "lockFileMaintenance"
        ],
        "dependencyDashboardApproval": false,
        "minimumReleaseAge": null
      }
    ]
  };