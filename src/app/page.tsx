import { environment } from '@/core/configs/environment.config';
import { FriendPageComponent } from '@/views/pages/Friend/Friend.component';

export default function Home() {
    console.log('environment', environment);
    return <FriendPageComponent></FriendPageComponent>;
}
