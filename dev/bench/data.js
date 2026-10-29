window.BENCHMARK_DATA = {
  "lastUpdate": 1793286705139,
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
          "id": "a5c51dd635b1286d8b6478b1afd681081ccd0432",
          "message": "Merge pull request #5827 from rmosolgo/fix-indirect-interface-possible-types\n\nAdd possible types for interfaces implemented through a late-bound interface",
          "timestamp": "2026-10-21T11:43:19-04:00",
          "tree_id": "757d483f14a5cd5757f07f4c2579d71eae29c18f",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/a5c51dd635b1286d8b6478b1afd681081ccd0432"
        },
        "date": 1792597479331,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 5551,
            "range": "±4.6%",
            "unit": "i/s",
            "extra": "27.881k iterations in 5.022926s (180.16 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 922.321,
            "range": "±2.9%",
            "unit": "i/s",
            "extra": "4.655k iterations in 5.047051s (1.08 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2624,
            "range": "±5.3%",
            "unit": "i/s",
            "extra": "13.176k iterations in 5.020440s (381.03 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 216.709,
            "range": "±5.1%",
            "unit": "i/s",
            "extra": "1.104k iterations in 5.094400s (4.61 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 52.142,
            "range": "±3.8%",
            "unit": "i/s",
            "extra": "265.000 iterations in 5.082298s (19.18 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 37.894,
            "range": "±5.3%",
            "unit": "i/s",
            "extra": "192.000 iterations in 5.066720s (26.39 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 4869,
            "range": "±5.6%",
            "unit": "i/s",
            "extra": "24.650k iterations in 5.062480s (205.37 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 6.091,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "31.000 iterations in 5.089326s (164.17 ms/i)"
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
          "id": "40c991b88acfad4367b35ad53c98822b880d66b3",
          "message": "Merge pull request #5829 from rmosolgo/fix-sorbet-runtime-parent-result\n\nFix Sorbet lint error in Runtime#continue_value",
          "timestamp": "2026-10-21T11:42:26-04:00",
          "tree_id": "5256673f791e20294eab9ac867de670f79a7095b",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/40c991b88acfad4367b35ad53c98822b880d66b3"
        },
        "date": 1792597563437,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3541,
            "range": "±2.1%",
            "unit": "i/s",
            "extra": "17.748k iterations in 5.012282s (282.41 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 579.988,
            "range": "±0.9%",
            "unit": "i/s",
            "extra": "2.907k iterations in 5.012170s (1.72 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1670,
            "range": "±3.5%",
            "unit": "i/s",
            "extra": "8.415k iterations in 5.039470s (598.87 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 146.928,
            "range": "±2.7%",
            "unit": "i/s",
            "extra": "742.000 iterations in 5.050079s (6.81 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.334,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "162.000 iterations in 5.010191s (30.93 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.228,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "122.000 iterations in 5.035570s (41.28 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3307,
            "range": "±3.3%",
            "unit": "i/s",
            "extra": "16.856k iterations in 5.096404s (302.35 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.345,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "22.000 iterations in 5.063261s (230.15 ms/i)"
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
          "id": "fde3264e68c0f8c6b851815f073ce4410b4bddbc",
          "message": "Merge pull request #5820 from rmosolgo/field-initialize-keyword-order\n\nOptimize Field#initialize to avoid hash allocation",
          "timestamp": "2026-10-21T12:06:00-04:00",
          "tree_id": "1e8fba565e26d56bc7b8f22a36c4780f00a15d8e",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/fde3264e68c0f8c6b851815f073ce4410b4bddbc"
        },
        "date": 1792598844212,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3514,
            "range": "±2.2%",
            "unit": "i/s",
            "extra": "17.799k iterations in 5.065000s (284.57 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 572.97,
            "range": "±1.0%",
            "unit": "i/s",
            "extra": "2.907k iterations in 5.073564s (1.75 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1637,
            "range": "±2.9%",
            "unit": "i/s",
            "extra": "8.232k iterations in 5.028079s (610.80 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 144.608,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "735.000 iterations in 5.082694s (6.92 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.991,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "165.000 iterations in 5.001327s (30.31 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.576,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "124.000 iterations in 5.045579s (40.69 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3380,
            "range": "±6.5%",
            "unit": "i/s",
            "extra": "16.950k iterations in 5.015170s (295.88 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.327,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "22.000 iterations in 5.083822s (231.08 ms/i)"
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
          "id": "485c4540b188de8dce49a36583705be9289800ec",
          "message": "Merge pull request #5831 from rmosolgo/claude/benchmark-flow-extensions-5e4269\n\nTrack retained memory of a large schema in benchmarks",
          "timestamp": "2026-10-22T06:10:02-04:00",
          "tree_id": "f51c5b2089a92d1338f8e5c6af919ace07326bc1",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/485c4540b188de8dce49a36583705be9289800ec"
        },
        "date": 1792663886879,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 4448,
            "range": "±0.7%",
            "unit": "i/s",
            "extra": "22.250k iterations in 5.001758s (224.80 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 722.174,
            "range": "±0.8%",
            "unit": "i/s",
            "extra": "3.621k iterations in 5.014027s (1.38 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2149,
            "range": "±2.9%",
            "unit": "i/s",
            "extra": "10.950k iterations in 5.096028s (465.39 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 179.606,
            "range": "±1.7%",
            "unit": "i/s",
            "extra": "901.000 iterations in 5.016544s (5.57 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 41.495,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "208.000 iterations in 5.012662s (24.10 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 31.438,
            "range": "±3.2%",
            "unit": "i/s",
            "extra": "159.000 iterations in 5.057551s (31.81 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 4509,
            "range": "±4.0%",
            "unit": "i/s",
            "extra": "22.914k iterations in 5.082097s (221.79 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 5.624,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "29.000 iterations in 5.156132s (177.80 ms/i)"
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
          "id": "0f93d4ee253bf5180cbb98f6f659c5953c2f0cf2",
          "message": "Merge pull request #5830 from rmosolgo/remove-unused-field-underscored-name\n\nRemove unused Field@underscored_name",
          "timestamp": "2026-10-22T07:19:25-04:00",
          "tree_id": "fe794b8693d24f7344683873c626cd0d2d8a20d1",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/0f93d4ee253bf5180cbb98f6f659c5953c2f0cf2"
        },
        "date": 1792668050381,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3480,
            "range": "±1.7%",
            "unit": "i/s",
            "extra": "17.442k iterations in 5.011410s (287.32 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 571.043,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "2.856k iterations in 5.001376s (1.75 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1673,
            "range": "±3.5%",
            "unit": "i/s",
            "extra": "8.477k iterations in 5.068268s (597.88 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 149.405,
            "range": "±2.0%",
            "unit": "i/s",
            "extra": "750.000 iterations in 5.019919s (6.69 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.673,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "165.000 iterations in 5.050003s (30.61 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 25.224,
            "range": "±4.0%",
            "unit": "i/s",
            "extra": "128.000 iterations in 5.074632s (39.65 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3484,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "17.472k iterations in 5.015376s (287.05 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.342,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "22.000 iterations in 5.067083s (230.32 ms/i)"
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
          "id": "e0539fc1c0f2c6d84380758d453e87bb7465f855",
          "message": "Merge pull request #5796 from rmosolgo/fix-variable-usages-in-fragments\n\nMake VariableUsagesAreAllowed check fragments, `= null` defaults and nested lists",
          "timestamp": "2026-10-22T12:39:19-04:00",
          "tree_id": "11d1cd94fa6980069b111b4765eecc93ee5fa5a6",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e0539fc1c0f2c6d84380758d453e87bb7465f855"
        },
        "date": 1792687257117,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3455,
            "range": "±1.5%",
            "unit": "i/s",
            "extra": "17.400k iterations in 5.035530s (289.40 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 565.59,
            "range": "±1.2%",
            "unit": "i/s",
            "extra": "2.856k iterations in 5.049599s (1.77 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1582,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "7.956k iterations in 5.028784s (632.07 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 136.234,
            "range": "±4.4%",
            "unit": "i/s",
            "extra": "689.000 iterations in 5.057458s (7.34 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 31.967,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "162.000 iterations in 5.067717s (31.28 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 23.02,
            "range": "±4.3%",
            "unit": "i/s",
            "extra": "116.000 iterations in 5.039075s (43.44 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3131,
            "range": "±4.6%",
            "unit": "i/s",
            "extra": "15.808k iterations in 5.049320s (319.42 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.118,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "21.000 iterations in 5.099996s (242.86 ms/i)"
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
          "id": "328da6c90286459bdfa20219936e2c3955e98b01",
          "message": "Merge pull request #5797 from rmosolgo/fix-fields-will-merge-uneven-scopes\n\nMake FieldsWillMerge follow the spec for mutually exclusive fields and response shapes",
          "timestamp": "2026-10-22T12:48:44-04:00",
          "tree_id": "2203b218023ec4b810055a445fe2b4f9774b5b1f",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/328da6c90286459bdfa20219936e2c3955e98b01"
        },
        "date": 1792687832717,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3919,
            "range": "±0.8%",
            "unit": "i/s",
            "extra": "19.941k iterations in 5.088417s (255.17 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 638.367,
            "range": "±0.9%",
            "unit": "i/s",
            "extra": "3.233k iterations in 5.064484s (1.57 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1821,
            "range": "±3.6%",
            "unit": "i/s",
            "extra": "9.231k iterations in 5.069572s (549.19 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 147.892,
            "range": "±3.4%",
            "unit": "i/s",
            "extra": "750.000 iterations in 5.071261s (6.76 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 36.746,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "186.000 iterations in 5.061780s (27.21 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 27.003,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "136.000 iterations in 5.036415s (37.03 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3651,
            "range": "±2.8%",
            "unit": "i/s",
            "extra": "18.300k iterations in 5.012583s (273.91 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.691,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "24.000 iterations in 5.116260s (213.18 ms/i)"
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
          "id": "dfeb632efa235de75aa05c06d71a6de30b9dbadb",
          "message": "2.6.13",
          "timestamp": "2026-10-22T13:00:44-04:00",
          "tree_id": "67344e2eb96868e92e0bcede71df1243353b9c25",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/dfeb632efa235de75aa05c06d71a6de30b9dbadb"
        },
        "date": 1792688529025,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 6917,
            "range": "±1.0%",
            "unit": "i/s",
            "extra": "34.731k iterations in 5.020920s (144.57 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 1120,
            "range": "±0.7%",
            "unit": "i/s",
            "extra": "5.661k iterations in 5.056590s (893.23 μs/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 3235,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "16.320k iterations in 5.044293s (309.09 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 263.042,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "1.326k iterations in 5.041029s (3.80 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 65.681,
            "range": "±1.5%",
            "unit": "i/s",
            "extra": "330.000 iterations in 5.024273s (15.23 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 48.814,
            "range": "±2.0%",
            "unit": "i/s",
            "extra": "248.000 iterations in 5.080553s (20.49 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 6934,
            "range": "±1.5%",
            "unit": "i/s",
            "extra": "34.832k iterations in 5.023170s (144.21 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 8.397,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "42.000 iterations in 5.001801s (119.09 ms/i)"
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
          "id": "a523cb0cfc48001c800052992c68a0afd6000cca",
          "message": "Merge pull request #5833 from rmosolgo/claude/build-failure-diagnosis-440200\n\nBuild the website with Ruby 3.3 so it gets RDoc 8",
          "timestamp": "2026-10-22T16:08:23-04:00",
          "tree_id": "e30c730b0f0e609ab28e9a80a2d430ef77d9f037",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/a523cb0cfc48001c800052992c68a0afd6000cca"
        },
        "date": 1792699789391,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3528,
            "range": "±1.2%",
            "unit": "i/s",
            "extra": "17.898k iterations in 5.072950s (283.44 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 575.453,
            "range": "±1.0%",
            "unit": "i/s",
            "extra": "2.907k iterations in 5.051670s (1.74 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1675,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "8.379k iterations in 5.001581s (596.92 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 143.377,
            "range": "±2.1%",
            "unit": "i/s",
            "extra": "728.000 iterations in 5.077515s (6.97 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.729,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "165.000 iterations in 5.041345s (30.55 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.724,
            "range": "±4.0%",
            "unit": "i/s",
            "extra": "124.000 iterations in 5.015270s (40.45 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3424,
            "range": "±2.9%",
            "unit": "i/s",
            "extra": "17.187k iterations in 5.019577s (292.06 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.414,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "23.000 iterations in 5.210251s (226.53 ms/i)"
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
          "id": "e2d74fa6939e35ef7f4ac46f4cbd89c2dc1b44cc",
          "message": "Merge pull request #5838 from ydah/fix-connection-argument-analysis\n\nPreserve query limits when connection arguments fail",
          "timestamp": "2026-10-26T07:03:06-04:00",
          "tree_id": "4c03afdc585717e99810e95e8d1b8958c9c1b91d",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e2d74fa6939e35ef7f4ac46f4cbd89c2dc1b44cc"
        },
        "date": 1793012765538,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3474,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "17.697k iterations in 5.094319s (287.86 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 567.856,
            "range": "±1.2%",
            "unit": "i/s",
            "extra": "2.856k iterations in 5.029448s (1.76 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1607,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "8.164k iterations in 5.080654s (622.32 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 139.806,
            "range": "±3.6%",
            "unit": "i/s",
            "extra": "700.000 iterations in 5.006941s (7.15 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.637,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "165.000 iterations in 5.055615s (30.64 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.794,
            "range": "±4.0%",
            "unit": "i/s",
            "extra": "124.000 iterations in 5.001301s (40.33 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3173,
            "range": "±5.6%",
            "unit": "i/s",
            "extra": "16.023k iterations in 5.050158s (315.18 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.42,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "23.000 iterations in 5.203766s (226.25 ms/i)"
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
          "id": "6e91ee052f5f8b28f371982085294c1f8c424850",
          "message": "Merge pull request #5839 from ydah/fix-max-complexity-calculation-mode\n\nHonor complexity calculation modes when enforcing limits",
          "timestamp": "2026-10-26T07:04:13-04:00",
          "tree_id": "91143c3b87940113e87135d7ac8eb8ab0c12f358",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/6e91ee052f5f8b28f371982085294c1f8c424850"
        },
        "date": 1793012852090,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3464,
            "range": "±4.4%",
            "unit": "i/s",
            "extra": "17.400k iterations in 5.022616s (288.66 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 569.931,
            "range": "±1.4%",
            "unit": "i/s",
            "extra": "2.862k iterations in 5.021658s (1.75 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1597,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "8.050k iterations in 5.042162s (626.36 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 140.803,
            "range": "±2.1%",
            "unit": "i/s",
            "extra": "714.000 iterations in 5.070913s (7.10 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.242,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "162.000 iterations in 5.024571s (31.02 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 24.299,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "122.000 iterations in 5.020722s (41.15 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3223,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "16.415k iterations in 5.092372s (310.23 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 4.389,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "22.000 iterations in 5.012167s (227.83 ms/i)"
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
          "id": "fb13c82005695457a9cd7fdf6a9f72fb5f8940bd",
          "message": "Merge pull request #5840 from ydah/fix-pagination-relation-limits\n\nKeep relation pagination within application-provided limits",
          "timestamp": "2026-10-26T07:37:23-04:00",
          "tree_id": "1faa6749a29db18ed8aded4c55235eccbfdf83ac",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/fb13c82005695457a9cd7fdf6a9f72fb5f8940bd"
        },
        "date": 1793014736129,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 4412,
            "range": "±1.6%",
            "unit": "i/s",
            "extra": "22.150k iterations in 5.020742s (226.67 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 709.625,
            "range": "±1.0%",
            "unit": "i/s",
            "extra": "3.550k iterations in 5.002644s (1.41 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2250,
            "range": "±2.9%",
            "unit": "i/s",
            "extra": "11.450k iterations in 5.089013s (444.46 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 185.874,
            "range": "±2.2%",
            "unit": "i/s",
            "extra": "936.000 iterations in 5.035657s (5.38 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 38.715,
            "range": "±2.6%",
            "unit": "i/s",
            "extra": "195.000 iterations in 5.036747s (25.83 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 35.795,
            "range": "±2.8%",
            "unit": "i/s",
            "extra": "180.000 iterations in 5.028606s (27.94 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 4483,
            "range": "±3.2%",
            "unit": "i/s",
            "extra": "22.464k iterations in 5.010546s (223.05 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 5.521,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "28.000 iterations in 5.071656s (181.13 ms/i)"
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
          "id": "988aa6233a3b324d0d815e29085cf78eda1e739b",
          "message": "Merge pull request #5842 from rmosolgo/claude/benchmark-execution-next-a31797\n\nRecord execution benchmarks with Execution::Next",
          "timestamp": "2026-10-26T12:46:55-04:00",
          "tree_id": "d07788173c0866209126c8d241479442b729d4bf",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/988aa6233a3b324d0d815e29085cf78eda1e739b"
        },
        "date": 1793033303648,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3445,
            "range": "±2.8%",
            "unit": "i/s",
            "extra": "17.300k iterations in 5.021449s (290.26 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 563.766,
            "range": "±1.2%",
            "unit": "i/s",
            "extra": "2.856k iterations in 5.065933s (1.77 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1546,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "7.750k iterations in 5.012442s (646.77 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 129.405,
            "range": "±4.6%",
            "unit": "i/s",
            "extra": "649.000 iterations in 5.015278s (7.73 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 30.596,
            "range": "±3.3%",
            "unit": "i/s",
            "extra": "153.000 iterations in 5.000716s (32.68 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 91.641,
            "range": "±3.3%",
            "unit": "i/s",
            "extra": "464.000 iterations in 5.063233s (10.91 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3026,
            "range": "±5.2%",
            "unit": "i/s",
            "extra": "15.386k iterations in 5.084165s (330.44 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 25.468,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "128.000 iterations in 5.025900s (39.26 ms/i)"
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
          "id": "7494c3da687302e92ab51cefa1f09f8a76e13774",
          "message": "Merge pull request #5784 from fuzzyrichie/next-batch-field-authorization\n\nExec-next: batch Dataloader loads made by field `authorized?` across objects",
          "timestamp": "2026-10-26T14:39:54-04:00",
          "tree_id": "ee2d64de891170da609a2b10ac5a04e7e3f47554",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/7494c3da687302e92ab51cefa1f09f8a76e13774"
        },
        "date": 1793040079427,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3481,
            "range": "±2.0%",
            "unit": "i/s",
            "extra": "17.500k iterations in 5.027720s (287.30 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 568.358,
            "range": "±1.2%",
            "unit": "i/s",
            "extra": "2.856k iterations in 5.025000s (1.76 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1587,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "7.950k iterations in 5.009930s (630.18 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 140.287,
            "range": "±2.1%",
            "unit": "i/s",
            "extra": "714.000 iterations in 5.089556s (7.13 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 32.353,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "162.000 iterations in 5.007293s (30.91 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 101.141,
            "range": "±2.0%",
            "unit": "i/s",
            "extra": "513.000 iterations in 5.072121s (9.89 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3241,
            "range": "±5.0%",
            "unit": "i/s",
            "extra": "16.219k iterations in 5.004716s (308.57 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 28.371,
            "range": "±3.5%",
            "unit": "i/s",
            "extra": "142.000 iterations in 5.005056s (35.25 ms/i)"
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
          "id": "4f06842eea64d5dea633b6c629fb0d70da67893e",
          "message": "Merge pull request #5832 from rmosolgo/build-from-definition-perf\n\nMake Schema.from_definition about 45% faster on large schemas",
          "timestamp": "2026-10-26T15:35:36-04:00",
          "tree_id": "2b2470e8029cec5cbf76cfca4418138ef81e6440",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/4f06842eea64d5dea633b6c629fb0d70da67893e"
        },
        "date": 1793043417247,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3612,
            "range": "±0.7%",
            "unit": "i/s",
            "extra": "18.411k iterations in 5.097232s (276.86 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 587.251,
            "range": "±0.9%",
            "unit": "i/s",
            "extra": "2.958k iterations in 5.037031s (1.70 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1703,
            "range": "±3.4%",
            "unit": "i/s",
            "extra": "8.624k iterations in 5.063255s (587.11 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 147.994,
            "range": "±0.7%",
            "unit": "i/s",
            "extra": "742.000 iterations in 5.013713s (6.76 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 33.223,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "168.000 iterations in 5.056712s (30.10 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 104.81,
            "range": "±1.0%",
            "unit": "i/s",
            "extra": "531.000 iterations in 5.066328s (9.54 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3396,
            "range": "±4.6%",
            "unit": "i/s",
            "extra": "17.250k iterations in 5.079826s (294.48 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 29.169,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "146.000 iterations in 5.005311s (34.28 ms/i)"
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
          "id": "e9a55cc4172cbd9929c62c7451df5cab1238131b",
          "message": "Merge pull request #5825 from rmosolgo/claude/sorbet-build-from-definition\n\nMove Schema::BuildFromDefinition to typed: true",
          "timestamp": "2026-10-26T19:35:29-04:00",
          "tree_id": "f837cbb8abe6954880e280dc2c73bf557b6d8793",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e9a55cc4172cbd9929c62c7451df5cab1238131b"
        },
        "date": 1793057812327,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3481,
            "range": "±2.1%",
            "unit": "i/s",
            "extra": "17.732k iterations in 5.094343s (287.30 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 567.018,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "2.856k iterations in 5.036876s (1.76 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1624,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "8.262k iterations in 5.086814s (615.69 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 143.039,
            "range": "±1.4%",
            "unit": "i/s",
            "extra": "728.000 iterations in 5.089523s (6.99 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 31.974,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "162.000 iterations in 5.066613s (31.28 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 99.327,
            "range": "±2.0%",
            "unit": "i/s",
            "extra": "504.000 iterations in 5.074129s (10.07 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3101,
            "range": "±5.4%",
            "unit": "i/s",
            "extra": "15.744k iterations in 5.076973s (322.47 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 28.23,
            "range": "±3.5%",
            "unit": "i/s",
            "extra": "142.000 iterations in 5.030092s (35.42 ms/i)"
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
          "id": "f771a894d25c1db8c25fee71fa2f3aca13af9dec",
          "message": "Merge pull request #5824 from rmosolgo/claude/sorbet-field-resolve-step\n\nMove Execution::FieldResolveStep to typed: true",
          "timestamp": "2026-10-26T20:35:17-04:00",
          "tree_id": "f584dcdf2e8d73b91e550f9e560d8086923edd97",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/f771a894d25c1db8c25fee71fa2f3aca13af9dec"
        },
        "date": 1793061402704,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3466,
            "range": "±1.0%",
            "unit": "i/s",
            "extra": "17.395k iterations in 5.019328s (288.55 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 566.127,
            "range": "±1.1%",
            "unit": "i/s",
            "extra": "2.850k iterations in 5.034204s (1.77 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1695,
            "range": "±2.8%",
            "unit": "i/s",
            "extra": "8.477k iterations in 5.002644s (590.14 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 139.15,
            "range": "±2.9%",
            "unit": "i/s",
            "extra": "700.000 iterations in 5.030539s (7.19 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 30.946,
            "range": "±0.0%",
            "unit": "i/s",
            "extra": "156.000 iterations in 5.041030s (32.31 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 97.928,
            "range": "±3.1%",
            "unit": "i/s",
            "extra": "495.000 iterations in 5.054741s (10.21 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3191,
            "range": "±4.1%",
            "unit": "i/s",
            "extra": "16.219k iterations in 5.083209s (313.41 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 26.792,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "134.000 iterations in 5.001536s (37.32 ms/i)"
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
          "id": "edbd65fbe09f88f5bd22b32c42690dc99487cb9e",
          "message": "Merge pull request #5852 from rmosolgo/claude/graphql-ruby-5851-replicate-a420c6\n\nSorbet: fix requires_ancestor annotations that break Tapioca RBIs, add consumer RBI check",
          "timestamp": "2026-10-27T14:00:51-04:00",
          "tree_id": "6a8f10434497630404cb55d369f3f768a56bd65c",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/edbd65fbe09f88f5bd22b32c42690dc99487cb9e"
        },
        "date": 1793124200112,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 5895,
            "range": "±5.0%",
            "unit": "i/s",
            "extra": "29.631k iterations in 5.026237s (169.63 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 932.733,
            "range": "±5.5%",
            "unit": "i/s",
            "extra": "4.700k iterations in 5.038956s (1.07 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 2737,
            "range": "±4.2%",
            "unit": "i/s",
            "extra": "13.821k iterations in 5.050181s (365.40 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 231.393,
            "range": "±2.2%",
            "unit": "i/s",
            "extra": "1.173k iterations in 5.069308s (4.32 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 54.551,
            "range": "±1.8%",
            "unit": "i/s",
            "extra": "276.000 iterations in 5.059496s (18.33 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 160.458,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "810.000 iterations in 5.048063s (6.23 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 5557,
            "range": "±5.1%",
            "unit": "i/s",
            "extra": "28.000k iterations in 5.038862s (179.96 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 49.956,
            "range": "±6.0%",
            "unit": "i/s",
            "extra": "250.000 iterations in 5.004403s (20.02 ms/i)"
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
          "id": "23a5d6595ef9f6e14d89a05e97e260fc8c9c1962",
          "message": "Merge pull request #5837 from austinjb32/fix-argument-validation-error-leak\n\nFix rescue_from return values leaking into resolve as argument values",
          "timestamp": "2026-10-28T17:38:59-04:00",
          "tree_id": "69ce11b3417d1ea66f91612ddfa27c8aa11b6a25",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/23a5d6595ef9f6e14d89a05e97e260fc8c9c1962"
        },
        "date": 1793223630500,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3461,
            "range": "±1.0%",
            "unit": "i/s",
            "extra": "17.472k iterations in 5.048811s (288.97 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 553.527,
            "range": "±2.9%",
            "unit": "i/s",
            "extra": "2.805k iterations in 5.067508s (1.81 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1569,
            "range": "±3.8%",
            "unit": "i/s",
            "extra": "7.865k iterations in 5.013778s (637.48 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 126.832,
            "range": "±2.4%",
            "unit": "i/s",
            "extra": "636.000 iterations in 5.014519s (7.88 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 29.117,
            "range": "±3.4%",
            "unit": "i/s",
            "extra": "146.000 iterations in 5.014223s (34.34 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 88.816,
            "range": "±3.4%",
            "unit": "i/s",
            "extra": "448.000 iterations in 5.044126s (11.26 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3116,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "15.600k iterations in 5.005903s (320.89 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 26.032,
            "range": "±3.8%",
            "unit": "i/s",
            "extra": "132.000 iterations in 5.070648s (38.41 ms/i)"
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
          "id": "6da4b368a226c083594908e0a0c1cbc8df37d815",
          "message": "Merge pull request #5845 from yskttm/fix/raw-value-connection-lookahead\n\nFix RawValue connection responses in the legacy interpreter",
          "timestamp": "2026-10-29T11:08:41-04:00",
          "tree_id": "61e17e673d17176161b64613a67ecb878f2e4119",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/6da4b368a226c083594908e0a0c1cbc8df37d815"
        },
        "date": 1793286701196,
        "tool": "rubyruntime",
        "benches": [
          {
            "name": "parse - introspection",
            "value": 3455,
            "range": "±0.8%",
            "unit": "i/s",
            "extra": "17.544k iterations in 5.078220s (289.46 μs/i)"
          },
          {
            "name": "parse - big query",
            "value": 558.33,
            "range": "±0.9%",
            "unit": "i/s",
            "extra": "2.805k iterations in 5.023915s (1.79 ms/i)"
          },
          {
            "name": "validate - abstract fragments",
            "value": 1596,
            "range": "±3.9%",
            "unit": "i/s",
            "extra": "8.085k iterations in 5.064704s (626.43 μs/i)"
          },
          {
            "name": "validate - big query",
            "value": 138.3,
            "range": "±1.4%",
            "unit": "i/s",
            "extra": "702.000 iterations in 5.075923s (7.23 ms/i)"
          },
          {
            "name": "validate - fields will merge",
            "value": 29.477,
            "range": "±3.4%",
            "unit": "i/s",
            "extra": "150.000 iterations in 5.088709s (33.92 ms/i)"
          },
          {
            "name": "execute - introspection",
            "value": 94.536,
            "range": "±2.1%",
            "unit": "i/s",
            "extra": "480.000 iterations in 5.077448s (10.58 ms/i)"
          },
          {
            "name": "execute - small query on large schema",
            "value": 3133,
            "range": "±4.5%",
            "unit": "i/s",
            "extra": "15.912k iterations in 5.078642s (319.17 μs/i)"
          },
          {
            "name": "execute - large result",
            "value": 27.006,
            "range": "±3.7%",
            "unit": "i/s",
            "extra": "136.000 iterations in 5.035858s (37.03 ms/i)"
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
        "date": 1792597397820,
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
            "value": 235040,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 49,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 1,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - allocated memsize",
            "value": 1487000,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 680,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 13618,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 12,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 9,
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
          "id": "a5c51dd635b1286d8b6478b1afd681081ccd0432",
          "message": "Merge pull request #5827 from rmosolgo/fix-indirect-interface-possible-types\n\nAdd possible types for interfaces implemented through a late-bound interface",
          "timestamp": "2026-10-21T11:43:19-04:00",
          "tree_id": "757d483f14a5cd5757f07f4c2579d71eae29c18f",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/a5c51dd635b1286d8b6478b1afd681081ccd0432"
        },
        "date": 1792597482131,
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
            "value": 235040,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 49,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 1,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - allocated memsize",
            "value": 1487000,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 680,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 13618,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 12,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 9,
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
          "id": "40c991b88acfad4367b35ad53c98822b880d66b3",
          "message": "Merge pull request #5829 from rmosolgo/fix-sorbet-runtime-parent-result\n\nFix Sorbet lint error in Runtime#continue_value",
          "timestamp": "2026-10-21T11:42:26-04:00",
          "tree_id": "5256673f791e20294eab9ac867de670f79a7095b",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/40c991b88acfad4367b35ad53c98822b880d66b3"
        },
        "date": 1792597565185,
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
          "id": "fde3264e68c0f8c6b851815f073ce4410b4bddbc",
          "message": "Merge pull request #5820 from rmosolgo/field-initialize-keyword-order\n\nOptimize Field#initialize to avoid hash allocation",
          "timestamp": "2026-10-21T12:06:00-04:00",
          "tree_id": "1e8fba565e26d56bc7b8f22a36c4780f00a15d8e",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/fde3264e68c0f8c6b851815f073ce4410b4bddbc"
        },
        "date": 1792598846032,
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
          "id": "485c4540b188de8dce49a36583705be9289800ec",
          "message": "Merge pull request #5831 from rmosolgo/claude/benchmark-flow-extensions-5e4269\n\nTrack retained memory of a large schema in benchmarks",
          "timestamp": "2026-10-22T06:10:02-04:00",
          "tree_id": "f51c5b2089a92d1338f8e5c6af919ace07326bc1",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/485c4540b188de8dce49a36583705be9289800ec"
        },
        "date": 1792663888613,
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
            "value": 235040,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 49,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 1,
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
          "id": "0f93d4ee253bf5180cbb98f6f659c5953c2f0cf2",
          "message": "Merge pull request #5830 from rmosolgo/remove-unused-field-underscored-name\n\nRemove unused Field@underscored_name",
          "timestamp": "2026-10-22T07:19:25-04:00",
          "tree_id": "fe794b8693d24f7344683873c626cd0d2d8a20d1",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/0f93d4ee253bf5180cbb98f6f659c5953c2f0cf2"
        },
        "date": 1792668052154,
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
          "id": "e0539fc1c0f2c6d84380758d453e87bb7465f855",
          "message": "Merge pull request #5796 from rmosolgo/fix-variable-usages-in-fragments\n\nMake VariableUsagesAreAllowed check fragments, `= null` defaults and nested lists",
          "timestamp": "2026-10-22T12:39:19-04:00",
          "tree_id": "11d1cd94fa6980069b111b4765eecc93ee5fa5a6",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e0539fc1c0f2c6d84380758d453e87bb7465f855"
        },
        "date": 1792687260255,
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
            "value": 40784,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 433,
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
            "value": 393208,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 15156,
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
            "value": 13615,
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
            "value": 24664,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 226,
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
            "value": 9426000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 680,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 75382,
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
          "id": "328da6c90286459bdfa20219936e2c3955e98b01",
          "message": "Merge pull request #5797 from rmosolgo/fix-fields-will-merge-uneven-scopes\n\nMake FieldsWillMerge follow the spec for mutually exclusive fields and response shapes",
          "timestamp": "2026-10-22T12:48:44-04:00",
          "tree_id": "2203b218023ec4b810055a445fe2b4f9774b5b1f",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/328da6c90286459bdfa20219936e2c3955e98b01"
        },
        "date": 1792687835931,
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
            "value": 40528,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393208,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 13614,
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
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "distinct": true,
          "id": "dfeb632efa235de75aa05c06d71a6de30b9dbadb",
          "message": "2.6.13",
          "timestamp": "2026-10-22T13:00:44-04:00",
          "tree_id": "67344e2eb96868e92e0bcede71df1243353b9c25",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/dfeb632efa235de75aa05c06d71a6de30b9dbadb"
        },
        "date": 1792688532993,
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
            "value": 40528,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393208,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 235040,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 49,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 1,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - allocated memsize",
            "value": 1487000,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 680,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 13614,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 12,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 9,
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
          "id": "a523cb0cfc48001c800052992c68a0afd6000cca",
          "message": "Merge pull request #5833 from rmosolgo/claude/build-failure-diagnosis-440200\n\nBuild the website with Ruby 3.3 so it gets RDoc 8",
          "timestamp": "2026-10-22T16:08:23-04:00",
          "tree_id": "e30c730b0f0e609ab28e9a80a2d430ef77d9f037",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/a523cb0cfc48001c800052992c68a0afd6000cca"
        },
        "date": 1792699791351,
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
            "value": 40528,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393208,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 13614,
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
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 75371,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 5,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 3,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 2,
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
          "id": "e2d74fa6939e35ef7f4ac46f4cbd89c2dc1b44cc",
          "message": "Merge pull request #5838 from ydah/fix-connection-argument-analysis\n\nPreserve query limits when connection arguments fail",
          "timestamp": "2026-10-26T07:03:06-04:00",
          "tree_id": "4c03afdc585717e99810e95e8d1b8958c9c1b91d",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e2d74fa6939e35ef7f4ac46f4cbd89c2dc1b44cc"
        },
        "date": 1793012767628,
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
            "value": 40528,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393208,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 13614,
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
          "id": "6e91ee052f5f8b28f371982085294c1f8c424850",
          "message": "Merge pull request #5839 from ydah/fix-max-complexity-calculation-mode\n\nHonor complexity calculation modes when enforcing limits",
          "timestamp": "2026-10-26T07:04:13-04:00",
          "tree_id": "91143c3b87940113e87135d7ac8eb8ab0c12f358",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/6e91ee052f5f8b28f371982085294c1f8c424850"
        },
        "date": 1793012853785,
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
            "value": 40528,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393208,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 13614,
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
          "id": "fb13c82005695457a9cd7fdf6a9f72fb5f8940bd",
          "message": "Merge pull request #5840 from ydah/fix-pagination-relation-limits\n\nKeep relation pagination within application-provided limits",
          "timestamp": "2026-10-26T07:37:23-04:00",
          "tree_id": "1faa6749a29db18ed8aded4c55235eccbfdf83ac",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/fb13c82005695457a9cd7fdf6a9f72fb5f8940bd"
        },
        "date": 1793014738372,
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
            "value": 40528,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11416,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393208,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94816,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 235040,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 49,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 1,
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
            "value": 13614,
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
          "id": "988aa6233a3b324d0d815e29085cf78eda1e739b",
          "message": "Merge pull request #5842 from rmosolgo/claude/benchmark-execution-next-a31797\n\nRecord execution benchmarks with Execution::Next",
          "timestamp": "2026-10-26T12:46:55-04:00",
          "tree_id": "d07788173c0866209126c8d241479442b729d4bf",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/988aa6233a3b324d0d815e29085cf78eda1e739b"
        },
        "date": 1793033305446,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234920,
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
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 200,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 3,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 0,
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
          "id": "7494c3da687302e92ab51cefa1f09f8a76e13774",
          "message": "Merge pull request #5784 from fuzzyrichie/next-batch-field-authorization\n\nExec-next: batch Dataloader loads made by field `authorized?` across objects",
          "timestamp": "2026-10-26T14:39:54-04:00",
          "tree_id": "ee2d64de891170da609a2b10ac5a04e7e3f47554",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/7494c3da687302e92ab51cefa1f09f8a76e13774"
        },
        "date": 1793040081369,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234920,
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
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 640,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 14,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 11,
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
          "id": "4f06842eea64d5dea633b6c629fb0d70da67893e",
          "message": "Merge pull request #5832 from rmosolgo/build-from-definition-perf\n\nMake Schema.from_definition about 45% faster on large schemas",
          "timestamp": "2026-10-26T15:35:36-04:00",
          "tree_id": "2b2470e8029cec5cbf76cfca4418138ef81e6440",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/4f06842eea64d5dea633b6c629fb0d70da67893e"
        },
        "date": 1793043419072,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234920,
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
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 200,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 3,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 0,
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
          "id": "e9a55cc4172cbd9929c62c7451df5cab1238131b",
          "message": "Merge pull request #5825 from rmosolgo/claude/sorbet-build-from-definition\n\nMove Schema::BuildFromDefinition to typed: true",
          "timestamp": "2026-10-26T19:35:29-04:00",
          "tree_id": "f837cbb8abe6954880e280dc2c73bf557b6d8793",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e9a55cc4172cbd9929c62c7451df5cab1238131b"
        },
        "date": 1793057813957,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234920,
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
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 640,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 14,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 11,
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
          "id": "f771a894d25c1db8c25fee71fa2f3aca13af9dec",
          "message": "Merge pull request #5824 from rmosolgo/claude/sorbet-field-resolve-step\n\nMove Execution::FieldResolveStep to typed: true",
          "timestamp": "2026-10-26T20:35:17-04:00",
          "tree_id": "f584dcdf2e8d73b91e550f9e560d8086923edd97",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/f771a894d25c1db8c25fee71fa2f3aca13af9dec"
        },
        "date": 1793061404523,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234920,
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
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 200,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 3,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 0,
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
          "id": "edbd65fbe09f88f5bd22b32c42690dc99487cb9e",
          "message": "Merge pull request #5852 from rmosolgo/claude/graphql-ruby-5851-replicate-a420c6\n\nSorbet: fix requires_ancestor annotations that break Tapioca RBIs, add consumer RBI check",
          "timestamp": "2026-10-27T14:00:51-04:00",
          "tree_id": "6a8f10434497630404cb55d369f3f768a56bd65c",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/edbd65fbe09f88f5bd22b32c42690dc99487cb9e"
        },
        "date": 1793124202723,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234960,
            "unit": "bytes"
          },
          {
            "name": "validate - fields will merge - allocated objects",
            "value": 15155,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - retained objects",
            "value": 49,
            "unit": "objects"
          },
          {
            "name": "validate - fields will merge - allocated strings",
            "value": 2,
            "unit": "strings"
          },
          {
            "name": "validate - fields will merge - retained strings",
            "value": 1,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - allocated memsize",
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 640,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 14,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 11,
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
          "id": "23a5d6595ef9f6e14d89a05e97e260fc8c9c1962",
          "message": "Merge pull request #5837 from austinjb32/fix-argument-validation-error-leak\n\nFix rescue_from return values leaking into resolve as argument values",
          "timestamp": "2026-10-28T17:38:59-04:00",
          "tree_id": "69ce11b3417d1ea66f91612ddfa27c8aa11b6a25",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/23a5d6595ef9f6e14d89a05e97e260fc8c9c1962"
        },
        "date": 1793223632512,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234920,
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
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 200,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 3,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 0,
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
          "id": "6da4b368a226c083594908e0a0c1cbc8df37d815",
          "message": "Merge pull request #5845 from yskttm/fix/raw-value-connection-lookahead\n\nFix RawValue connection responses in the legacy interpreter",
          "timestamp": "2026-10-29T11:08:41-04:00",
          "tree_id": "61e17e673d17176161b64613a67ecb878f2e4119",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/6da4b368a226c083594908e0a0c1cbc8df37d815"
        },
        "date": 1793286703076,
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
            "value": 40448,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - retained memsize",
            "value": 11336,
            "unit": "bytes"
          },
          {
            "name": "validate - abstract fragments - allocated objects",
            "value": 432,
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
            "value": 393128,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - retained memsize",
            "value": 94736,
            "unit": "bytes"
          },
          {
            "name": "validate - big query - allocated objects",
            "value": 3334,
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
            "value": 234920,
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
            "value": 991793,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - retained memsize",
            "value": 600,
            "unit": "bytes"
          },
          {
            "name": "execute - introspection - allocated objects",
            "value": 4925,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - retained objects",
            "value": 11,
            "unit": "objects"
          },
          {
            "name": "execute - introspection - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "execute - introspection - retained strings",
            "value": 8,
            "unit": "strings"
          },
          {
            "name": "execute - small query on large schema - allocated memsize",
            "value": 26784,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - retained memsize",
            "value": 280,
            "unit": "bytes"
          },
          {
            "name": "execute - small query on large schema - allocated objects",
            "value": 237,
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
            "value": 1879000,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - retained memsize",
            "value": 200,
            "unit": "bytes"
          },
          {
            "name": "execute - large result - allocated objects",
            "value": 6414,
            "unit": "objects"
          },
          {
            "name": "execute - large result - retained objects",
            "value": 3,
            "unit": "objects"
          },
          {
            "name": "execute - large result - allocated strings",
            "value": 12,
            "unit": "strings"
          },
          {
            "name": "execute - large result - retained strings",
            "value": 0,
            "unit": "strings"
          }
        ]
      }
    ],
    "Schema memory": [
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
          "id": "485c4540b188de8dce49a36583705be9289800ec",
          "message": "Merge pull request #5831 from rmosolgo/claude/benchmark-flow-extensions-5e4269\n\nTrack retained memory of a large schema in benchmarks",
          "timestamp": "2026-10-22T06:10:02-04:00",
          "tree_id": "f51c5b2089a92d1338f8e5c6af919ace07326bc1",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/485c4540b188de8dce49a36583705be9289800ec"
        },
        "date": 1792663890190,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8884000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4676000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 54664,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "0f93d4ee253bf5180cbb98f6f659c5953c2f0cf2",
          "message": "Merge pull request #5830 from rmosolgo/remove-unused-field-underscored-name\n\nRemove unused Field@underscored_name",
          "timestamp": "2026-10-22T07:19:25-04:00",
          "tree_id": "fe794b8693d24f7344683873c626cd0d2d8a20d1",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/0f93d4ee253bf5180cbb98f6f659c5953c2f0cf2"
        },
        "date": 1792668053866,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4675000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "e0539fc1c0f2c6d84380758d453e87bb7465f855",
          "message": "Merge pull request #5796 from rmosolgo/fix-variable-usages-in-fragments\n\nMake VariableUsagesAreAllowed check fragments, `= null` defaults and nested lists",
          "timestamp": "2026-10-22T12:39:19-04:00",
          "tree_id": "11d1cd94fa6980069b111b4765eecc93ee5fa5a6",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e0539fc1c0f2c6d84380758d453e87bb7465f855"
        },
        "date": 1792687263156,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4676000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "328da6c90286459bdfa20219936e2c3955e98b01",
          "message": "Merge pull request #5797 from rmosolgo/fix-fields-will-merge-uneven-scopes\n\nMake FieldsWillMerge follow the spec for mutually exclusive fields and response shapes",
          "timestamp": "2026-10-22T12:48:44-04:00",
          "tree_id": "2203b218023ec4b810055a445fe2b4f9774b5b1f",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/328da6c90286459bdfa20219936e2c3955e98b01"
        },
        "date": 1792687839094,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4676000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
            "email": "rdmosolgo@gmail.com",
            "name": "Robert Mosolgo",
            "username": "rmosolgo"
          },
          "distinct": true,
          "id": "dfeb632efa235de75aa05c06d71a6de30b9dbadb",
          "message": "2.6.13",
          "timestamp": "2026-10-22T13:00:44-04:00",
          "tree_id": "67344e2eb96868e92e0bcede71df1243353b9c25",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/dfeb632efa235de75aa05c06d71a6de30b9dbadb"
        },
        "date": 1792688535287,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4676000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "a523cb0cfc48001c800052992c68a0afd6000cca",
          "message": "Merge pull request #5833 from rmosolgo/claude/build-failure-diagnosis-440200\n\nBuild the website with Ruby 3.3 so it gets RDoc 8",
          "timestamp": "2026-10-22T16:08:23-04:00",
          "tree_id": "e30c730b0f0e609ab28e9a80a2d430ef77d9f037",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/a523cb0cfc48001c800052992c68a0afd6000cca"
        },
        "date": 1792699793136,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4676000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "e2d74fa6939e35ef7f4ac46f4cbd89c2dc1b44cc",
          "message": "Merge pull request #5838 from ydah/fix-connection-argument-analysis\n\nPreserve query limits when connection arguments fail",
          "timestamp": "2026-10-26T07:03:06-04:00",
          "tree_id": "4c03afdc585717e99810e95e8d1b8958c9c1b91d",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e2d74fa6939e35ef7f4ac46f4cbd89c2dc1b44cc"
        },
        "date": 1793012769571,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4675000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "6e91ee052f5f8b28f371982085294c1f8c424850",
          "message": "Merge pull request #5839 from ydah/fix-max-complexity-calculation-mode\n\nHonor complexity calculation modes when enforcing limits",
          "timestamp": "2026-10-26T07:04:13-04:00",
          "tree_id": "91143c3b87940113e87135d7ac8eb8ab0c12f358",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/6e91ee052f5f8b28f371982085294c1f8c424850"
        },
        "date": 1793012855456,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4675000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "fb13c82005695457a9cd7fdf6a9f72fb5f8940bd",
          "message": "Merge pull request #5840 from ydah/fix-pagination-relation-limits\n\nKeep relation pagination within application-provided limits",
          "timestamp": "2026-10-26T07:37:23-04:00",
          "tree_id": "1faa6749a29db18ed8aded4c55235eccbfdf83ac",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/fb13c82005695457a9cd7fdf6a9f72fb5f8940bd"
        },
        "date": 1793014740509,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4675000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "988aa6233a3b324d0d815e29085cf78eda1e739b",
          "message": "Merge pull request #5842 from rmosolgo/claude/benchmark-execution-next-a31797\n\nRecord execution benchmarks with Execution::Next",
          "timestamp": "2026-10-26T12:46:55-04:00",
          "tree_id": "d07788173c0866209126c8d241479442b729d4bf",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/988aa6233a3b324d0d815e29085cf78eda1e739b"
        },
        "date": 1793033307233,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4675000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "7494c3da687302e92ab51cefa1f09f8a76e13774",
          "message": "Merge pull request #5784 from fuzzyrichie/next-batch-field-authorization\n\nExec-next: batch Dataloader loads made by field `authorized?` across objects",
          "timestamp": "2026-10-26T14:39:54-04:00",
          "tree_id": "ee2d64de891170da609a2b10ac5a04e7e3f47554",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/7494c3da687302e92ab51cefa1f09f8a76e13774"
        },
        "date": 1793040083218,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8790000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4675000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 52324,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "4f06842eea64d5dea633b6c629fb0d70da67893e",
          "message": "Merge pull request #5832 from rmosolgo/build-from-definition-perf\n\nMake Schema.from_definition about 45% faster on large schemas",
          "timestamp": "2026-10-26T15:35:36-04:00",
          "tree_id": "2b2470e8029cec5cbf76cfca4418138ef81e6440",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/4f06842eea64d5dea633b6c629fb0d70da67893e"
        },
        "date": 1793043420698,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8774000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4673000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 51058,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "e9a55cc4172cbd9929c62c7451df5cab1238131b",
          "message": "Merge pull request #5825 from rmosolgo/claude/sorbet-build-from-definition\n\nMove Schema::BuildFromDefinition to typed: true",
          "timestamp": "2026-10-26T19:35:29-04:00",
          "tree_id": "f837cbb8abe6954880e280dc2c73bf557b6d8793",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/e9a55cc4172cbd9929c62c7451df5cab1238131b"
        },
        "date": 1793057815460,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8773000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4673000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 51058,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "f771a894d25c1db8c25fee71fa2f3aca13af9dec",
          "message": "Merge pull request #5824 from rmosolgo/claude/sorbet-field-resolve-step\n\nMove Execution::FieldResolveStep to typed: true",
          "timestamp": "2026-10-26T20:35:17-04:00",
          "tree_id": "f584dcdf2e8d73b91e550f9e560d8086923edd97",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/f771a894d25c1db8c25fee71fa2f3aca13af9dec"
        },
        "date": 1793061406216,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8773000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4673000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 51058,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "edbd65fbe09f88f5bd22b32c42690dc99487cb9e",
          "message": "Merge pull request #5852 from rmosolgo/claude/graphql-ruby-5851-replicate-a420c6\n\nSorbet: fix requires_ancestor annotations that break Tapioca RBIs, add consumer RBI check",
          "timestamp": "2026-10-27T14:00:51-04:00",
          "tree_id": "6a8f10434497630404cb55d369f3f768a56bd65c",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/edbd65fbe09f88f5bd22b32c42690dc99487cb9e"
        },
        "date": 1793124205633,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8774000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4673000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 51058,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "23a5d6595ef9f6e14d89a05e97e260fc8c9c1962",
          "message": "Merge pull request #5837 from austinjb32/fix-argument-validation-error-leak\n\nFix rescue_from return values leaking into resolve as argument values",
          "timestamp": "2026-10-28T17:38:59-04:00",
          "tree_id": "69ce11b3417d1ea66f91612ddfa27c8aa11b6a25",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/23a5d6595ef9f6e14d89a05e97e260fc8c9c1962"
        },
        "date": 1793223634041,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8774000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4673000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 51058,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
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
          "id": "6da4b368a226c083594908e0a0c1cbc8df37d815",
          "message": "Merge pull request #5845 from yskttm/fix/raw-value-connection-lookahead\n\nFix RawValue connection responses in the legacy interpreter",
          "timestamp": "2026-10-29T11:08:41-04:00",
          "tree_id": "61e17e673d17176161b64613a67ecb878f2e4119",
          "url": "https://github.com/rmosolgo/graphql-ruby/commit/6da4b368a226c083594908e0a0c1cbc8df37d815"
        },
        "date": 1793286704970,
        "tool": "rubymemory",
        "benches": [
          {
            "name": "build large schema - allocated memsize",
            "value": 8773000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - retained memsize",
            "value": 4673000,
            "unit": "bytes"
          },
          {
            "name": "build large schema - allocated objects",
            "value": 51058,
            "unit": "objects"
          },
          {
            "name": "build large schema - retained objects",
            "value": 13841,
            "unit": "objects"
          },
          {
            "name": "build large schema - allocated strings",
            "value": 50,
            "unit": "strings"
          },
          {
            "name": "build large schema - retained strings",
            "value": 50,
            "unit": "strings"
          }
        ]
      }
    ]
  }
}