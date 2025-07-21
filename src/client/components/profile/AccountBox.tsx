// src/components/profile/AccountBox.tsx
import { useState } from "react"
import { toast } from "react-hot-toast"
import type { z } from "zod"
import { ConfigurableAccountBox, type FieldConfig } from "./ConfigurableAccountBox"
import type { userSchema } from "@/shared/schema/userSchema"

type User = z.infer<typeof userSchema>

interface AccountBoxProps {
  id:    User["id"]
  email: User["email"]
}

export default function AccountBox({ email, id }: AccountBoxProps) {
  // local state for the single editable field
  const [info, setInfo] = useState({ email })

  // only email is editable; password field shows a reset link
  const fieldConfigs: Array<FieldConfig> = [
    { name: "email",     label: "Email",    type: "email",    editable: true },
    {
      name:            "password",
      label:           "Password",
      type:            "password",
      editable:        false,
      showResetLink:   true,
      // point this wherever your reset‑password UI lives:
      resetLinkUrl:    `/profile/${id}/reset-password`,
    },
  ]

  // what we pass into ConfigurableAccountBox initially
  const initialData: Record<string,string> = {
    email:    info.email,
    password: "",              // never prepopulate a password
  }

  const handleSave = async (updates: Record<string,string>) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method:  "PATCH",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(updates),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      setInfo(prev => ({ ...prev, ...updates }))
      toast.success("Info saved successfully!")
    } catch (err) {
      console.error("Save failed", err)
      toast.error("Failed to save info.")
    }
  }

  return (
      <ConfigurableAccountBox
          initialData={initialData}
          fieldConfigs={fieldConfigs}
          onSave={handleSave}
      />
  )
}
