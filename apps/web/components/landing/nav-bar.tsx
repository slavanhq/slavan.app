
import { ModeToggle } from "../mode-toggle"
export const NavBar = () => {
    return <div className="sticky w-full border-b top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 border-x">
            <div className="text-xl font-bold">slvn</div>
            <div>
                <ModeToggle />
            </div>
        </div>
    </div>
}