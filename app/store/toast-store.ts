import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'

interface ToastStore {
  visible: boolean;
  message: string;
  draftToast: boolean;
  setDraftToast: (status: boolean) => void;
  showToast: (msg: string) => void;
  hideToast: () => void;
}

const useToastStore = create<ToastStore>()(
  devtools(
    persist(
      (set) => ({
        visible: false,
        message: "",
        showToast: (foo) => set(() => ({message: foo, visible: true})),
        hideToast: () => set(() => ({visible: false})),
        draftToast: false,
        setDraftToast: (status) => set(() => ({draftToast: status}))
      }),
      {
        name: 'toast-store',
      }
    )
  )
)

export default useToastStore;