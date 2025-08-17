export const Branding = () => {
    return <div className="w-full border-b">
        <div className="max-w-5xl mx-auto border-x h-[30dvh] px-1 py-1">
            <LogoBranding />
        </div>
    </div>
}

function LogoBranding() {
    return <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-purple-900  via-purple-600 to-purple-500 rounded-md">
        <div className="text-9xl lowercase text-white font-semibold ">Slavan.</div>
        <div className="text-sm tracking-widest font-light capitalize">AI powered creative studio</div>
    </div>
}