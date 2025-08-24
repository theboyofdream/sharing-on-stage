import { CreateRoomForm } from '@/components/create-room'
import { JoinAsSpeakerForm } from '@/components/join-as-speaker'

function HomePage() {
    return (
        <section className="flex-1">
            <header
                id="banner"
                className="w-full p-1 text-sm text-center bg-primary-foreground border-b-2"
            >
                Open to new opportunities.
            </header>
            <main className="w-full h-full flex gap-2 justify-center items-center">
                <JoinAsSpeakerForm />
                <CreateRoomForm/>
            </main>
        </section>
    )
}

export { HomePage }

