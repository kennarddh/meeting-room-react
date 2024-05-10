import { FC } from 'react'

import DateTimePicker from 'Components/DateTimePicker/DateTimePicker'

const Home: FC = () => {
	return (
		<div>
			<DateTimePicker value={new Date()} />
		</div>
	)
}

export default Home
