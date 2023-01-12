import { useState, useEffect } from 'react';

export function useInfoFetch(link) {
	const [infoFetch, setInfoFetch] = useState({
		isLoading: true,
		data: undefined,
		error: undefined,
	});

	useEffect(() => {
		fetch(link)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error('Something went wrong');
			})
			.then((data) => {
				setInfoFetch({ isLoading: false, data: data, error: undefined });
			})
			.catch((error) => {
				setInfoFetch({ isLoading: false, data: undefined, error: error });
			});
	}, []);
	return infoFetch;
}
