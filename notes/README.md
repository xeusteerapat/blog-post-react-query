# Note taken from videos

## `useQuery`

`useQuery` take some arguments

- query `key` what we are going to name the query.
- fetch function should be asynchronous function that fetch the data.

Other properties that return from `useQuery` hook

- `isLoading` no cached data + `isFetching === true`
- `isError` react-query will retry 3 times before return errors
- `isFetching` async query function hasn't resolved yet

## Stale Time

Data refetch only triggers for stale data eg. component remount, window re-focus. `staleTime` is mean **max age** (of those data). Another meaning is How to tolerate data potentially being out of date.

`staleTime` vs. `cacheTime`

- `staleTime` is for **re-fetching**
- **Cache** is for data that might be **re-used** later
  - query goes into **cold storage** if there is no active `useQuery`
  - and will expires after `cacheTime` (default 5 mins) since the last active `useQuery`

## Array of `query key`

- Pass array for query key and treat the query key as **dependency** array
- When key changes, create new query
- Query function values should be part of the key

## Pagination

Normally we'll provide `currentPage` and add it to dependencies array.

## Pre-fetching

As you  can see, we have a little bit `loading` status before render the posts of particular page. So we can make use of `Pre-fetching` to add data to cache and automatically stale and show while re-fetching.

```javascript
const queryClient = useQueryClient();

  // Prefetching
  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchInfiniteQuery([
        'posts',
        nextPage,
        () => fetchPosts(nextPage), // keep data on the previous page
      ]);
    }
  }, [currentPage, queryClient]);
```

## Mutation

`useMutation` require a function that performs an asynchronous task and returns a promise.
