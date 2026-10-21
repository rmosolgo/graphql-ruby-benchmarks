window.BENCHMARK_DATA = {
  "lastUpdate": 1792546202141,
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
      }
    ]
  }
}