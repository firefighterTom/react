import { RefObject, useEffect } from 'react';

export function useClickOutside(
	divElement: RefObject<HTMLElement>,
	cb: Function
) {
	useEffect(() => {
		const handleClick = (e: Event) => {
			if (
				divElement.current &&
				!divElement.current.contains(e.currentTarget as HTMLElement)
			) {
				cb();
			}
		};
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
}
