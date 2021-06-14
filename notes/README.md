# Note taken from videos

## `useQuery`

`useQuery` take some arguments

- query `key` what we are going to name the query.
- fetch function should be asynchronous function that fetch the data.

Other properties that return from `useQuery` hook

- `isLoading` no cached data + `isFetching`
- `isError` react-query will retry 3 times before return errors
- `isFetching` async query function hasn't resolved yet

## Stale Time

Data refetch only triggers for stale data eg. component remount, window re-focus. `staleTime` is mean **max age** (of those data). Another meaning is How to tolerate data potentially being out of date.

`staleTime` vs. `cacheTime`

- `staleTime` is for **re-fetching**
- **Cache** is for data that might be **re-used** later
  - query goes into **cold storage** if there is no active `useQuery`
  - and will expires after `cacheTime` (default 5 mins) since the last active `useQuery`