// eslint-disable-next-line jsx-a11y/click-events-have-key-events

import React from 'react'
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Hidden from '@material-ui/core/Hidden'
import Poppers from '@material-ui/core/Popper'

// @material-ui/icons
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'
// core components
import Button from '../customButtons/CustomButtons'
import CustomInput from '../customInput/CustomInput'

import styles from './NavBarLinks.styles'

const useStyles = makeStyles(styles)

const NavbarLinks: React.FC = () => {
	const classes = useStyles()
	const [openNotification, setOpenNotification] =
		React.useState<null | HTMLElement>(null)

	const handleClickNotification = (event: React.MouseEvent<HTMLElement>) => {
		setOpenNotification(openNotification ? null : event.currentTarget)
	}

	const open = Boolean(openNotification)
	const id = open ? 'simple-popper' : undefined

	const handleCloseNotification = () => {
		setOpenNotification(null)
	}

	return (
		<div>
			<div className={classes.searchWrapper}>
				<CustomInput
					formControlProps={{
						className: `${classes.margin} ${classes.search}`,
					}}
					inputProps={{
						placeholder: 'Search',
						inputProps: {
							'aria-label': 'Search',
						},
					}}
				/>
				<Button
					color='white'
					aria-label='edit'
					justIcon
					round
					simple={false}
					onClick={() => console.log('Search Button')}
				>
					<Search />
				</Button>
			</div>

			<div className={classes.manager}>
				<Button
					color={window.innerWidth > 959 ? 'transparent' : 'white'}
					justIcon={window.innerWidth > 959}
					simple={!(window.innerWidth > 959)}
					aria-owns={openNotification ? 'notification-menu-list-grow' : null}
					aria-haspopup='true'
					onClick={handleClickNotification}
					className={classes.buttonLink}
				>
					<Notifications />
					<span className={classes.notifications}>5</span>
					<Hidden mdUp implementation='css'>
						<Button
							arial-describedby={id}
							color='transparent'
							onClick={handleCloseNotification}
							className={classes.linkText}
						>
							Notification
						</Button>
					</Hidden>
				</Button>
				<Poppers
					open={Boolean(openNotification)}
					anchorEl={openNotification}
					transition
					disablePortal
					className={`${classNames({
						[classes.popperClose]: !openNotification,
					})} ${classes.popperNav}`}
				>
					{({ TransitionProps, placement }) => (
						<Grow
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...TransitionProps}
							// id='notification-menu-list-grow'
							style={{
								transformOrigin:
									placement === 'bottom' ? 'center top' : 'center bottom',
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleCloseNotification}>
									<MenuList role='menu'>
										<MenuItem
											onClick={handleCloseNotification}
											className={classes.dropdownItem}
										>
											Mike John responded to your email
										</MenuItem>
										<MenuItem
											onClick={handleCloseNotification}
											className={classes.dropdownItem}
										>
											You have 5 new tasks
										</MenuItem>
										<MenuItem
											onClick={handleCloseNotification}
											className={classes.dropdownItem}
										>
											You are now friend with Andrew
										</MenuItem>
										<MenuItem
											onClick={handleCloseNotification}
											className={classes.dropdownItem}
										>
											Another Notification
										</MenuItem>
										<MenuItem
											onClick={handleCloseNotification}
											className={classes.dropdownItem}
										>
											Another One
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Poppers>
			</div>
		</div>
	)
}

export default NavbarLinks