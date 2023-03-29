import Link from 'next/link'
import Image from 'next/image'
import {Layout} from '@components/layouts'
import profileImage from '@images/profile.png'

const Profile = () => (
    <Image
        src={profileImage} // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
)
export default function FirstPost() {
    return (
        <Layout>
            <Profile />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}
