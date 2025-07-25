import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personal-loans')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /personal-loans!'
}
