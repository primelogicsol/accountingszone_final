// src/app/admin/layout.tsx
"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import AdminNav from "@/components/Admin/AdminNav"
import AdminHeader from "@/components/Admin/AdminHeader"
import { Loader2 } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  
  // Check if user is loading
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-[#fbc710]" />
        <span className="ml-2">Loading...</span>
      </div>
    )
  }
  
  // Check if user is authenticated and is admin
  if (!session || session.user.role !== "admin") {
    redirect("/login")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminNav />
      <div className="flex-1 overflow-auto">
        <AdminHeader />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}