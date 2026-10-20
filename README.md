# GraphQL-Ruby Benchmarks

Benchmark results for [GraphQL-Ruby](https://github.com/rmosolgo/graphql-ruby), tracked over time.

**Charts: https://rmosolgo.github.io/graphql-ruby-benchmarks/dev/bench/**

This repository only stores results. The benchmarks themselves live in GraphQL-Ruby, and a workflow there
runs them on each push to `master`. It records the results here with
[github-action-benchmark](https://github.com/rmosolgo/github-action-benchmark/tree/ruby-benchmark-ips),
using its `rubyruntime` (benchmark-ips) and `rubymemory` (benchmark-memory) tools.

Results are committed to the [`gh-pages`](../../tree/gh-pages) branch:

- `dev/bench/data.js` — every recorded result, keyed by benchmark name
- `dev/bench/index.html` — the chart page, created on the first run

## Caveats

- Runtime results come from shared GitHub Actions runners, so they are noisy. Look for sustained changes, not single points.
- Memory results (allocated and retained bytes and objects) are nearly deterministic, but they change with the Ruby version.
