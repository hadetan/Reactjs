import React from 'react';

const Child2 = ({ countFromParent }) => {
	return (
		<div>
			<p>Inside of child 2: {countFromParent}</p>
		</div>
	);
};

export default Child2;
