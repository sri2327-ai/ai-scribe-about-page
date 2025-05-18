
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
                <span className="text-gray-400">Making Life Easy For Clinicians</span>
            </p>
        </div>
    )
}

export { CommitsGridDemo }
