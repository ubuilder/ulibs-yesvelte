import ConfirmModal from './ConfirmModal.svelte'
import { modal } from './modal.js'

export const confirmModal = modal.create(
	ConfirmModal,
	{},
	{
		size: 'sm',
		placement: 'top'
	}
)

export { modal }

export {default as BaseModal} from './BaseModal.svelte'
export {default as ModalProvider} from './ModalProvider.svelte'