'use client'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  disabled?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  body,
  footer,
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log('isOpen:', open)
  }, [open])

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Entrar</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] flex flex-col">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            {body}
          </DialogContent>
      </Dialog>
    </>
  )
}
