import React, { useEffect } from 'react';
import { useState } from 'react';

export function Timer() {
	const [time, setTime] = useState({ m: 0, s: 0 });
	const handleChangeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTime({ ...time, s: Number(e.target.value) });
	};
	const handleChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTime({ ...time, m: Number(e.target.value) });
	};
	useEffect(() => {
		const interval = setInterval(() => {
			if (time.s === 0 && time.m === 0) {
				return () => clearInterval(interval);
			}
			decreaseTime();
		}, 1000);
		return () => clearInterval(interval);
	}, [time]);

	function decreaseTime() {
		setTime((time) => {
			if (time.m === 0 && time.s === 0)
				return {
					m: 0,
					s: 0,
				};
			if (time.s === 0) {
				return { m: time.m - 1, s: 60 };
			}
			return {
				...time,
				s: time.s - 1,
			};
		});
	}

	return (
		<div>
			<label htmlFor=''>Minuty</label>
			<input type='number' min='0' max='60' onChange={handleChangeMinutes} />
			<label htmlFor=''>Sekundy</label>
			<input type='number' min='0' max='60' onChange={handleChangeSeconds} />
			<p>
				{time.m} : {time.s}
			</p>
		</div>
	);
}
