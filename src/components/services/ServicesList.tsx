'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface Service {
  title: string
  description: string
  imageUrl: string
  slug: {
    current: string
  }
}

export default function ServicesList() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('/api/services')
        if (!response.ok) {
          throw new Error('Failed to fetch services')
        }
        const data = await response.json()
        setServices(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading services...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div key={service.slug.current} className="card p-4 rounded-lg shadow-md">
          {service.imageUrl && (
            <Image
            src={urlFor(service.imageUrl).width(400).url()}
            alt={service.title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          )}
          <h3 className="text-xl font-bold mt-4">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  )
} 