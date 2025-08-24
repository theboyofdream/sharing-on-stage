import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function SpeakerDetailsPage() {
    return (
        <section id="speaker-details-page" className="flex-1 grid grid-cols-2 place-items-center">
            <form action="" className="grid gap-4 min-w-sm sm:max-w-[425px]">
                <div className="grid gap-2">
                    <Label htmlFor="fullname">Description</Label>
                    <Input id="fullname" name="fullname" placeholder="Abhishek Chaurasiya" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="description">Brief bio</Label>
                    <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe about yourself in few words 😉"
                    />
                    <span className="text-right text-xs text-muted-foreground">0/100</span>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="description">Brief about Topic</Label>
                    <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe about yourself in few words 😉"
                    />
                    <span className="text-right text-xs text-muted-foreground">0/250</span>
                </div>
                <div className="grid gap-2">
                    <p>Social Links</p>
                    <div className="grid gap-1">
                        <Input id="fullname" name="fullname" placeholder="https://github.com/theboyofdream" />
                        <Input id="fullname" name="fullname" placeholder="https://x.com/theboyofdream" />
                        <Input id="fullname" name="fullname" placeholder="https://linkedin.com/theboyofdream" />
                    </div>
                </div>
                <Button>Save</Button>
            </form>
            <div id="preview-profile" className="grid sm:max-w-md">
                <Avatar className="size-36 rounded-none">
                    <AvatarFallback className='rounded-none' />
                </Avatar>
                <h2 className="mt-2 text-xl">Name</h2>
                <span className="text-xs text-muted-foreground">Occupation</span>
                <p className="text-sm mt-1 text-muted-foreground text-ellipsis line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    eligendiarchitecto, excepturi aliquam quibusdam vero placeat
                </p>
                <span>Topic</span>
                <p className="text-sm mt-1 text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi
                    architecto, excepturi aliquam quibusdam vero placeat quaerat soluta minima, quam
                    vel exercitationem, maiores in fuga laboriosam mollitia illo incidunt sit!
                </p>
                <br />
                <span className="grid">
                    <a>link 1</a>
                    <a>link 2</a>
                    <a>link 3</a>
                    <a>link 4</a>
                </span>
            </div>
        </section>
    )
}

export { SpeakerDetailsPage }
