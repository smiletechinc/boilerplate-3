import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme) => ({
	text: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
	},
}))

const ResetCompleted = ({ resetcompleted }) => {
	const classes = useStyles()

	return (
			<Fab
				variant = "extended"
                aria-label="Reset Todo"
				onClick={() => resetcompleted()}
				color="secondary"
				size="small"
			>
                Reset completed
			</Fab>
	)
}

export default ResetCompleted;