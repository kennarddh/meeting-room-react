import { FC, useCallback, useEffect } from 'react'

import { Button, Group, Modal, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { useRegisterSW } from 'virtual:pwa-register/react'

const PWAManager: FC = () => {
	const {
		offlineReady: [OfflineReady, SetOfflineReady],
		needRefresh: [NeedRefresh, SetNeedRefresh],
		updateServiceWorker: UpdateServiceWorker,
	} = useRegisterSW({
		onRegistered(registration) {
			console.log('Service Worker Registered', registration)
		},
		onRegisterError(error) {
			console.log('Service Worker registration error', error)

			showNotification({
				title: 'PWA Error',
				message: 'Service worker failed to register.',
				color: '#ee0000',
			})
		},
	})

	const Close = useCallback(() => {
		SetOfflineReady(false)
		SetNeedRefresh(false)
	}, [SetOfflineReady, SetNeedRefresh])

	useEffect(() => {
		if (!OfflineReady) return

		showNotification({
			title: 'Offline Ready',
			message: 'App is ready to work offline',
			color: '#458de6',
		})
	}, [OfflineReady])

	return (
		<Modal
			opened={NeedRefresh}
			title='Install Update'
			centered
			onClose={Close}
		>
			<Text>An update is available.</Text>
			<Text c='dimmed' fz='xs' mt='sm'>
				<strong>Reload</strong> will refresh the app. You may lose the
				progress, if any.
			</Text>
			<Text c='dimmed' fz='xs'>
				<strong>Cancel</strong> will install the update next time you
				visit the app.
			</Text>

			<Group mt='lg'>
				<Button variant='subtle' onClick={Close}>
					Cancel
				</Button>
				<Button onClick={() => UpdateServiceWorker(true)}>
					Reload
				</Button>
			</Group>
		</Modal>
	)
}

export default PWAManager
