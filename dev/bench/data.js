window.BENCHMARK_DATA = {
  "lastUpdate": 1792545901254,
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
      }
    ]
  }
}