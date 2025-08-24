import { Button } from './ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

function CreateRoomForm() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button>Create room</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create room for speakers</DialogTitle>
                        <DialogDescription>
                            Enter basic info to create a room.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="room-name">Room name</Label>
                            <Input id="room-name" name="room-name" placeholder='React talk' />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export { CreateRoomForm }
