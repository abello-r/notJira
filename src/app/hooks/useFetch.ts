'use client';

// Fetching and caching:
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function useFetch<T>(url: string) {
	const { data, error } = useSWR<T>(url, fetcher);
	return { data, error };
}
