import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'

interface ToastStore {
  visible: boolean;
  message: string;
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
        hideToast: () => set(() => ({visible: false}))
      }),
      {
        name: 'toast-store',
      }
    )
  )
)

export default useToastStore;