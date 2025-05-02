
"use client"

import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function CookieConsent() {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    setHasConsented(consent === "accepted" || consent === "rejected")
  }, [])

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "rejected")
    setHasConsented(true)
  }

  // If user has already made a choice, show just the icon
  if (hasConsented) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <Cookie className="h-5 w-5 text-gray-600" />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-80 p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-gray-600" />
                <h4 className="text-sm font-medium">Cookie Preferences</h4>
              </div>
              <p className="text-xs text-gray-500">
                You've already set your cookie preferences. You can change them anytime.
              </p>
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleConsent(false)}
                >
                  Reject All
                </Button>
                <Button
                  size="sm"
                  className="bg-blue-600 text-xs hover:bg-blue-700"
                  onClick={() => handleConsent(true)}
                >
                  Accept All
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    )
  }

  // First time visitors see the full banner
  return (
    <div className="fixed bottom-4 left-4 z-50 w-80 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Cookie className="h-5 w-5 text-gray-600" />
          <h4 className="text-sm font-medium">Cookie Consent</h4>
        </div>
        <p className="text-xs text-gray-500">
          We use cookies to enhance your browsing experience, serve personalized ads or content, 
          and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => handleConsent(false)}
          >
            Reject All
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 text-xs hover:bg-blue-700"
            onClick={() => handleConsent(true)}
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
