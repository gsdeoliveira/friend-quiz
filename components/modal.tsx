import { useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  disabled?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  disabled,
}) => {
  const handleCLose = useCallback(() => {
    if (disabled) return

    onClose()
  }, [disabled, onClose])

  if (!isOpen) return null

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          {/* content */}
          <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-950 outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-center justify-between p-5 rounded-t">
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <button
                onClick={handleCLose}
                className="p-1 ml-auto border-0 text-white hover:opacity-70 transition"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="relative p-5 flex-auto">{body}</div>

            {/* Footer */}
            <div className="flex-col gap-2 p-5 flex">{footer}</div>
          </div>
        </div>
      </div>
    </>
  )
}
