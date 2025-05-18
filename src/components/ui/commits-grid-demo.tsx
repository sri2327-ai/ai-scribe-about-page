
import * as React from "react"
import { CommitsGrid } from "@/components/ui/commits-grid"
import { cn } from "@/lib/utils"

const CommitsGridDemo = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-xl">
                <CommitsGrid text="S10.AI" />
            </div>
            <p className="text-center mt-4 text-xl">
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-teal-500 bg-clip-text text-transparent font-bold">S10.AI</span>
                <span className="text-gray-400"> - Making Life Easy For Clinicians</span>
            </p>
        </div>
    )
}

export { CommitsGridDemo }
