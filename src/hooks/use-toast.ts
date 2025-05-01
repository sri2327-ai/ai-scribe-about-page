
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToastId = string

type ToastType = "default" | "destructive"

type Toast = {
  id: ToastId
  type?: ToastType
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  className?: string  // Add this line to fix the className error
}

type ToasterToast = Toast & {
  duration?: number
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const listeners: Array<(toast: ToasterToast) => void> = []

function dispatch(toast: ToasterToast) {
  listeners.forEach((listener) => {
    listener(toast)
  })
}

interface AddToastProps {
  title?: React.ReactNode
  description?: React.ReactNode
  type?: "default" | "destructive"
  action?: ToastActionElement
  duration?: number
  className?: string  // Add this line to fix the className error
}

function toast(props: AddToastProps) {
  const {
    title,
    description,
    type = "default",
    action,
    duration = 5000,
    className // Add this line
  } = props
  const id = genId()

  const update = (props: AddToastProps) => {
    const { title, description, type, action, className } = props
    dispatch({
      id,
      title,
      description,
      type,
      action,
      className // Add this line
    })
  }

  const dismiss = () => {
    if (toastTimeouts.has(id)) {
      clearTimeout(toastTimeouts.get(id))
      toastTimeouts.delete(id)
    }

    dispatch({ id })
  }

  dispatch({
    id,
    title,
    description,
    type,
    action,
    className, // Add this line
    duration
  })

  return {
    id,
    dismiss,
    update,
  }
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        dispatch({ id: toastId })
      } else {
        listeners.forEach((listener) => {
          listener({
            id: genId(),
          })
        })
      }
    },
  }
}

export { useToast, toast }
