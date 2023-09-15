module.exports = {
    "branchPrefix": "test-renovate/",
    "username": "renovate-release",
    "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
    "onboarding": true,
    "platform": "github",
    "forkProcessing": "disabled",
    "repositories": ["lazytesting/flutterpackagetest"],
    "packageRules": [
          {
            "matchDatasources": ["dart"],
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
        ],
        
  };