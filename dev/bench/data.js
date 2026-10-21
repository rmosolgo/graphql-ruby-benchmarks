window.BENCHMARK_DATA = {
  "lastUpdate": 1792597395400,
  "repoUrl": "https://github.com/rmosolgo/graphql-ruby",
  "entries": {
    "Runtime": [
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0d24c9691f39d553a7e0c71d58f4d87e89340df",
          "message": "Merge pull request #5815 from rmosolgo/claude/graphql-ruby-perf-tracking-d06211\n\nTrack benchmark results over time",
          "timestamp": "2026-10-20T21:22:28-04:00",
          "tree_id": "e2194ec59c396bb81b671c8b1235db87702aa128",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/f0d24c9691f39d553a7e0c71d58f4d87e89340df"
        },
        "date": 1792545900925,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 6221,
            "range": "±2.2%",
            "unit": "i/s",
            "extra": "31.416k iterations in 5.050289s (160.76 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 997.584,
            "range": "±5.1%",
            "unit": "i/s",
            "extra": "5.049k iterations in 5.061227s (1.00 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2814,
            "range": "±6.7%",
            "unit": "i/s",
            "extra": "14.200k iterations in 5.046319s (355.37 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 240.965,
            "range": "±5.0%",
            "unit": "i/s",
            "extra": "1.224k iterations in 5.079580s (4.15 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 55.972,
            "range": "±5.4%",
            "unit": "i/s",
            "extra": "280.000 iterations in 5.002511s (17.87 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 42.813,
            "range": "±4.7%",
            "unit": "i/s",
            "extra": "216.000 iterations in 5.045153s (23.36 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 5661,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "28.380k iterations in 5.013321s (176.65 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 6.646,
            "range": "±15.0%",
            "unit": "i/s",
            "extra": "34.000 iterations in 5.116009s (150.47 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "distinct": true,
          "id": "c55e2c0ba6549ee7c9479793ac88eaa039c6210a",
          "message": "Fix benchmarks workflow: remove data clone between store steps\n\nThe benchmark action leaves ./benchmark-data-repository behind after a\nsuccessful push, so the second store step failed to clone.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:28:39-04:00",
          "tree_id": "564f9c482f4563f075da11590b4445515b4caedb",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/c55e2c0ba6549ee7c9479793ac88eaa039c6210a"
        },
        "date": 1792546200480,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3379,
            "range": "±2.6%",
            "unit": "i/s",
            "extra": "17.187k iterations in 5.086002s (295.92 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 553.026,
            "range": "±2.5%",
            "unit": "i/s",
            "extra": "2.805k iterations in 5.072095s (1.81 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1598,
            "range": "±4.2%",
            "unit": "i/s",
            "extra": "8.036k iterations in 5.029011s (625.81 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 142.01,
            "range": "±3.5%",
            "unit": "i/s",
            "extra": "715.000 iterations in 5.034859s (7.04 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.045,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "162.000 iterations in 5.055343s (31.21 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.055,
            "range": "±4.2%",
            "unit": "i/s",
            "extra": "122.000 iterations in 5.071659s (41.57 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3291,
            "range": "±4.5%",
            "unit": "i/s",
            "extra": "16.665k iterations in 5.063738s (303.85 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.271,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "22.000 iterations in 5.150571s (234.12 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b952851f84329330657bd1c3de859126b1bcffa5",
          "message": "Merge pull request #5816 from rmosolgo/claude/sorbet-batch-6-70056c\n\nMove 9 more files to typed: true",
          "timestamp": "2026-10-20T22:04:28-04:00",
          "tree_id": "ff16c9f99fe896ea2c9fbf147cf8702f3e0b4673",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/b952851f84329330657bd1c3de859126b1bcffa5"
        },
        "date": 1792548348559,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3368,
            "range": "±2.2%",
            "unit": "i/s",
            "extra": "17.108k iterations in 5.078994s (296.88 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 549.951,
            "range": "±2.0%",
            "unit": "i/s",
            "extra": "2.754k iterations in 5.007723s (1.82 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1576,
            "range": "±4.3%",
            "unit": "i/s",
            "extra": "8.003k iterations in 5.077383s (634.43 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 145.853,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "742.000 iterations in 5.087328s (6.86 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 31.083,
            "range": "±3.2%",
            "unit": "i/s",
            "extra": "156.000 iterations in 5.018896s (32.17 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.893,
            "range": "±4.0%",
            "unit": "i/s",
            "extra": "126.000 iterations in 5.061750s (40.17 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3236,
            "range": "±4.9%",
            "unit": "i/s",
            "extra": "16.308k iterations in 5.039285s (309.01 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.348,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "22.000 iterations in 5.059289s (229.97 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28e1c977749b0447511d45473af2a6b6a6188023",
          "message": "Merge pull request #5817 from rmosolgo/dependabot/github_actions/ruby/setup-ruby-1.329.0\n\nBump ruby/setup-ruby from 1.321.0 to 1.329.0",
          "timestamp": "2026-10-20T22:04:52-04:00",
          "tree_id": "286e36d8f0f7ebbdfe93ad733f467020c1357f2f",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/28e1c977749b0447511d45473af2a6b6a6188023"
        },
        "date": 1792548432175,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3470,
            "range": "±2.3%",
            "unit": "i/s",
            "extra": "17.646k iterations in 5.085219s (288.18 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 560.659,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "2.856k iterations in 5.094008s (1.78 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1845,
            "range": "±3.3%",
            "unit": "i/s",
            "extra": "9.350k iterations in 5.067850s (542.02 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 155.499,
            "range": "±1.9%",
            "unit": "i/s",
            "extra": "780.000 iterations in 5.016106s (6.43 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 31.254,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "159.000 iterations in 5.087269s (32.00 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 30.325,
            "range": "±3.3%",
            "unit": "i/s",
            "extra": "153.000 iterations in 5.045358s (32.98 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3931,
            "range": "±3.2%",
            "unit": "i/s",
            "extra": "19.796k iterations in 5.035336s (254.36 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 5.091,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "26.000 iterations in 5.106845s (196.42 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3b01c8df3ef0120c242cee5ac74c20a5a42c6a6",
          "message": "Merge pull request #5822 from rmosolgo/claude/charming-hamilton-38ae11\n\nMove Dataloader and Visibility::Profile to typed: true",
          "timestamp": "2026-10-21T07:05:50-04:00",
          "tree_id": "fc4230c1a9e632dc7e54e17fce5e377b19f5e6fb",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/b3b01c8df3ef0120c242cee5ac74c20a5a42c6a6"
        },
        "date": 1792580929067,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3463,
            "range": "±1.6%",
            "unit": "i/s",
            "extra": "17.493k iterations in 5.052003s (288.80 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 563.59,
            "range": "±1.4%",
            "unit": "i/s",
            "extra": "2.860k iterations in 5.074607s (1.77 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1563,
            "range": "±3.5%",
            "unit": "i/s",
            "extra": "7.840k iterations in 5.015125s (639.68 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 141.136,
            "range": "±5.0%",
            "unit": "i/s",
            "extra": "714.000 iterations in 5.058938s (7.09 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 31.675,
            "range": "±3.2%",
            "unit": "i/s",
            "extra": "159.000 iterations in 5.019762s (31.57 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.728,
            "range": "±4.0%",
            "unit": "i/s",
            "extra": "124.000 iterations in 5.014626s (40.44 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3005,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "15.045k iterations in 5.005925s (332.73 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.252,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "22.000 iterations in 5.173809s (235.17 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf549a5644d073d49a2c8a273404e40ed9b84881",
          "message": "Merge pull request #5775 from drhops/relation-connection-peek-next-page\n\nPeek an extra row so hasNextPage avoids a second query",
          "timestamp": "2026-10-21T07:06:34-04:00",
          "tree_id": "fd28978122fe405ffd8fff80d7163982d6f5c377",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/cf549a5644d073d49a2c8a273404e40ed9b84881"
        },
        "date": 1792581012839,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3474,
            "range": "±1.2%",
            "unit": "i/s",
            "extra": "17.493k iterations in 5.034947s (287.83 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 564.219,
            "range": "±1.2%",
            "unit": "i/s",
            "extra": "2.860k iterations in 5.068955s (1.77 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1545,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "7.852k iterations in 5.081090s (647.11 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 134.989,
            "range": "±4.4%",
            "unit": "i/s",
            "extra": "676.000 iterations in 5.007832s (7.41 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 31.842,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "162.000 iterations in 5.087630s (31.41 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.036,
            "range": "±4.2%",
            "unit": "i/s",
            "extra": "122.000 iterations in 5.075809s (41.60 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3209,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "16.300k iterations in 5.080054s (311.66 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.11,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "21.000 iterations in 5.109176s (243.29 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20a03a840bf337f01c79d4ec01f5628f939195a9",
          "message": "Merge pull request #5776 from a-lavis/fix-connection-complexity-skipped-typename\n\nFix connection complexity when `__typename` is skipped by `count_introspection_fields: false`",
          "timestamp": "2026-10-21T07:09:54-04:00",
          "tree_id": "e16f69edbb182bcfa9ffc24071ee3b2371898e99",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/20a03a840bf337f01c79d4ec01f5628f939195a9"
        },
        "date": 1792581096812,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 4498,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "22.695k iterations in 5.045061s (222.30 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 712.651,
            "range": "±2.0%",
            "unit": "i/s",
            "extra": "3.621k iterations in 5.081026s (1.40 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2250,
            "range": "±3.0%",
            "unit": "i/s",
            "extra": "11.373k iterations in 5.053867s (444.37 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 199.348,
            "range": "±1.5%",
            "unit": "i/s",
            "extra": "1.007k iterations in 5.051478s (5.02 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 38.717,
            "range": "±2.6%",
            "unit": "i/s",
            "extra": "195.000 iterations in 5.036539s (25.83 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 37.294,
            "range": "±2.7%",
            "unit": "i/s",
            "extra": "189.000 iterations in 5.067823s (26.81 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 4667,
            "range": "±4.3%",
            "unit": "i/s",
            "extra": "23.595k iterations in 5.055764s (214.27 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 5.915,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "30.000 iterations in 5.071870s (169.06 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08ecb97120b0117e0cec868b70cdb206d0a42ad6",
          "message": "Merge pull request #5777 from ydah/fix-nested-list-null-errors\n\nPrevent TypeError for null items in nested lists",
          "timestamp": "2026-10-21T11:02:50-04:00",
          "tree_id": "ee94df04e45e7642a6ceaef92f3e58e22a0a43c7",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/08ecb97120b0117e0cec868b70cdb206d0a42ad6"
        },
        "date": 1792595114045,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 6274,
            "range": "±2.6%",
            "unit": "i/s",
            "extra": "31.500k iterations in 5.021101s (159.40 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 1021,
            "range": "±2.4%",
            "unit": "i/s",
            "extra": "5.151k iterations in 5.042674s (978.97 μs/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2915,
            "range": "±2.8%",
            "unit": "i/s",
            "extra": "14.612k iterations in 5.013138s (343.08 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 256.292,
            "range": "±5.5%",
            "unit": "i/s",
            "extra": "1.296k iterations in 5.056726s (3.90 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 62.991,
            "range": "±1.6%",
            "unit": "i/s",
            "extra": "320.000 iterations in 5.080051s (15.88 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 47.009,
            "range": "±2.1%",
            "unit": "i/s",
            "extra": "236.000 iterations in 5.020368s (21.27 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 6522,
            "range": "±2.7%",
            "unit": "i/s",
            "extra": "32.823k iterations in 5.032371s (153.32 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 7.97,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "40.000 iterations in 5.018512s (125.46 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b644fea56575659281b69d3098a64d32484714c4",
          "message": "Merge pull request #5828 from rmosolgo/claude/benchmark-memory-results-missing-ce3ac5\n\nFix missing memory benchmark results",
          "timestamp": "2026-10-21T11:37:49-04:00",
          "tree_id": "2b5137167a9fbfb51798894293a3d559f2d8a2cc",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/b644fea56575659281b69d3098a64d32484714c4"
        },
        "date": 1792597234593,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3871,
            "range": "±0.9%",
            "unit": "i/s",
            "extra": "19.635k iterations in 5.072478s (258.34 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 631.218,
            "range": "±1.3%",
            "unit": "i/s",
            "extra": "3.162k iterations in 5.009365s (1.58 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1838,
            "range": "±3.0%",
            "unit": "i/s",
            "extra": "9.350k iterations in 5.086206s (543.98 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 155.04,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "780.000 iterations in 5.030968s (6.45 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 36.082,
            "range": "±2.8%",
            "unit": "i/s",
            "extra": "183.000 iterations in 5.071841s (27.71 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 27.281,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "138.000 iterations in 5.058382s (36.65 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3834,
            "range": "±3.6%",
            "unit": "i/s",
            "extra": "19.208k iterations in 5.009495s (260.80 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.685,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "24.000 iterations in 5.122633s (213.44 ms/i)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "233bccc9f5bab5182f95f293f1dda4c2dfdfa82c",
          "message": "Merge pull request #5826 from rmosolgo/claude/rdoc-build-performance-308964\n\nInstall only docs gems in the RDoc CI job",
          "timestamp": "2026-10-21T11:41:56-04:00",
          "tree_id": "569625c3a89ae696eb5a6b6efada4860894fef61",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/233bccc9f5bab5182f95f293f1dda4c2dfdfa82c"
        },
        "date": 1792597395121,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 5854,
            "range": "±5.0%",
            "unit": "i/s",
            "extra": "29.563k iterations in 5.050246s (170.83 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 916.765,
            "range": "±3.4%",
            "unit": "i/s",
            "extra": "4.608k iterations in 5.026369s (1.09 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2612,
            "range": "±4.3%",
            "unit": "i/s",
            "extra": "13.064k iterations in 5.000771s (382.79 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 226.467,
            "range": "±6.2%",
            "unit": "i/s",
            "extra": "1.152k iterations in 5.086830s (4.42 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 54.064,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "275.000 iterations in 5.086565s (18.50 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 41.52,
            "range": "±4.8%",
            "unit": "i/s",
            "extra": "208.000 iterations in 5.009588s (24.08 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 5819,
            "range": "±3.3%",
            "unit": "i/s",
            "extra": "29.214k iterations in 5.020660s (171.86 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 6.524,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "33.000 iterations in 5.058630s (153.29 ms/i)"
          }
        ]
      }
    ],
    "Memory": [
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "distinct": true,
          "id": "c55e2c0ba6549ee7c9479793ac88eaa039c6210a",
          "message": "Fix benchmarks workflow: remove data clone between store steps\n\nThe benchmark action leaves ./benchmark-data-repository behind after a\nsuccessful push, so the second store step failed to clone.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-20T21:28:39-04:00",
          "tree_id": "564f9c482f4563f075da11590b4445515b4caedb",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/c55e2c0ba6549ee7c9479793ac88eaa039c6210a"
        },
        "date": 1792546201979,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "parse - introspection - allocated memsize",
            "value": 29104,
            "unit": "bytes"
          },
          {
            "name": "parse - introspection - retained memsize",
            "value": 16624,
            "unit": "bytes"
          },
          {
            "name": "parse - introspection - allocated objects",
            "value": 259,
            "unit": "objects"
          },
          {
            "name": "parse - introspection - retained objects",
            "value": 181,
            "unit": "objects"
          },
          {
            "name": "parse - introspection - allocated strings",
            "value": 27,
            "unit": "strings"
          },
          {
            "name": "parse - introspection - retained strings",
            "value": 27,
            "unit": "strings"
          },
          {
            "name": "parse - big query - allocated memsize",
            "value": 180744,
            "unit": "bytes"
          },
          {
            "name": "parse - big query - retained memsize",
            "value": 99784,
            "unit": "bytes"
          },
          {
            "name": "parse - big query - allocated objects",
            "value": 1622,
            "unit": "objects"
          },
          {
            "name": "parse - big query - retained objects",
            "value": 1116,
            "unit": "objects"
          },
          {
            "name": "parse - big query - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "parse - big query - retained strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "validate - abstract fragments - allocated memsize",
            "value": 40608,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 434,
            "unit": "objects"
          },
          {
            "name": "validate - abstract fragments - retained objects",
            "value": 76,
            "unit": "objects"
          },
          {
            "name": "validate - abstract fragments - allocated strings",
            "value": 23,
            "unit": "strings"
          },
          {
            "name": "validate - abstract fragments - retained strings",
            "value": 9,
            "unit": "strings"
          },
          {
            "name": "validate - big query - allocated memsize",
            "value": 380008,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3232,
            "unit": "objects"
          },
          {
            "name": "validate - big query - retained objects",
            "value": 322,
            "unit": "objects"
          },
          {
            "name": "validate - big query - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "validate - big query - retained strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - allocated memsize",
            "value": 2136000,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - retained memsize",
            "value": 235000,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 48,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 0,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - allocated memsize",
            "value": 1487000,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 200,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 13618,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 3,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 0,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 24408,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 225,
            "unit": "objects"
          },
          {
            "name": "execute - small query on large schema - retained objects",
            "value": 5,
            "unit": "objects"
          },
          {
            "name": "execute - small query on large schema - allocated strings",
            "value": 3,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - retained strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "execute - large result - allocated memsize",
            "value": 9425000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 680,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 75381,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 15,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 13,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 12,
            "unit": "strings"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b644fea56575659281b69d3098a64d32484714c4",
          "message": "Merge pull request #5828 from rmosolgo/claude/benchmark-memory-results-missing-ce3ac5\n\nFix missing memory benchmark results",
          "timestamp": "2026-10-21T11:37:49-04:00",
          "tree_id": "2b5137167a9fbfb51798894293a3d559f2d8a2cc",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/b644fea56575659281b69d3098a64d32484714c4"
        },
        "date": 1792597237012,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "parse - introspection - allocated memsize",
            "value": 29104,
            "unit": "bytes"
          },
          {
            "name": "parse - introspection - retained memsize",
            "value": 16624,
            "unit": "bytes"
          },
          {
            "name": "parse - introspection - allocated objects",
            "value": 259,
            "unit": "objects"
          },
          {
            "name": "parse - introspection - retained objects",
            "value": 181,
            "unit": "objects"
          },
          {
            "name": "parse - introspection - allocated strings",
            "value": 27,
            "unit": "strings"
          },
          {
            "name": "parse - introspection - retained strings",
            "value": 27,
            "unit": "strings"
          },
          {
            "name": "parse - big query - allocated memsize",
            "value": 180744,
            "unit": "bytes"
          },
          {
            "name": "parse - big query - retained memsize",
            "value": 99784,
            "unit": "bytes"
          },
          {
            "name": "parse - big query - allocated objects",
            "value": 1622,
            "unit": "objects"
          },
          {
            "name": "parse - big query - retained objects",
            "value": 1116,
            "unit": "objects"
          },
          {
            "name": "parse - big query - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "parse - big query - retained strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "validate - abstract fragments - allocated memsize",
            "value": 40608,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 434,
            "unit": "objects"
          },
          {
            "name": "validate - abstract fragments - retained objects",
            "value": 76,
            "unit": "objects"
          },
          {
            "name": "validate - abstract fragments - allocated strings",
            "value": 23,
            "unit": "strings"
          },
          {
            "name": "validate - abstract fragments - retained strings",
            "value": 9,
            "unit": "strings"
          },
          {
            "name": "validate - big query - allocated memsize",
            "value": 380008,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3232,
            "unit": "objects"
          },
          {
            "name": "validate - big query - retained objects",
            "value": 322,
            "unit": "objects"
          },
          {
            "name": "validate - big query - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "validate - big query - retained strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - allocated memsize",
            "value": 2136000,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - retained memsize",
            "value": 235000,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 48,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 0,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - allocated memsize",
            "value": 1487000,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 200,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 13618,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 3,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 0,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 24408,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 225,
            "unit": "objects"
          },
          {
            "name": "execute - small query on large schema - retained objects",
            "value": 5,
            "unit": "objects"
          },
          {
            "name": "execute - small query on large schema - allocated strings",
            "value": 3,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - retained strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "execute - large result - allocated memsize",
            "value": 9425000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 680,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 75381,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 15,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 13,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 12,
            "unit": "strings"
          }
        ]
      }
    ]
  }
}