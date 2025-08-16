export const Branding = () => {
    return <div className="w-full border-b">
        <div className="max-w-7xl mx-auto border-x h-[30dvh]">
            <LogoBranding />
        </div>
    </div>
}

function LogoBranding() {
    return <div className="w-full h-full flex items-center justify-center bg-gradient-to-bl from-purple-900  via-pink-600 to-purple-400">
        <div className="text-9xl lowercase">Slavan.</div>
    </div>
}